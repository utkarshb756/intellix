"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Music } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Empty } from "@/components/empty";
import { Heading } from "@/components/heading";
import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useProModal } from "@/hooks/use-pro-modal";
import { musicFormSchema } from "@/schemas";

const MusicPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [music, setMusic] = useState<string>();

  const form = useForm<z.infer<typeof musicFormSchema>>({
    resolver: zodResolver(musicFormSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof musicFormSchema>) => {
    try {
      setMusic(undefined);

      const response = await axios.post("/api/music", values);

      setMusic(response.data.audio);
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
      console.error(error);
    } finally {
      form.reset();
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-12 px-4 lg:px-8">
      <Heading
        title="BeatBuilder"
        description="Building rhythms that move you."
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />

      <div className="mt-8 w-full max-w-3xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            autoComplete="off"
            autoCapitalize="off"
            className="rounded-lg border border-gray-300 w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 bg-white/70 backdrop-blur-sm"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent bg-transparent"
                      disabled={isLoading}
                      aria-disabled={isLoading}
                      placeholder="Hey  IntellixAI, compose a jazz piece with saxophone and piano."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              className="col-span-12 lg:col-span-2 w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              Generate
            </Button>
          </form>
        </Form>

        <div className="space-y-4 mt-8">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {!music && !isLoading && <Empty label="No music generated." />}

          {music && (
            <audio controls className="w-full mt-4">
              <source src={music} />
            </audio>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
