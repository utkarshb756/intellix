"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Code2 as Code2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import type { ChatCompletionRequestMessage } from "openai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";
import * as z from "zod";

import { BotAvatar } from "@/components/bot-avatar";
import { Empty } from "@/components/empty";
import { Heading } from "@/components/heading";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useProModal } from "@/hooks/use-pro-modal";
import { cn } from "@/lib/utils";
import { codeFormSchema } from "@/schemas";

const CodePage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof codeFormSchema>>({
    resolver: zodResolver(codeFormSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof codeFormSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/code", {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data]);
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
        title="CodeSmith"
        description="Smithing elegant code solutions."
        icon={Code2Icon}
        iconColor="text-blue-500"
        bgColor="bg-blue-700/10"
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
                      placeholder="Hey Intellix, create a JavaScript function to sort an array."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              className="col-span-12 lg:col-span-2 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
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
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message, i) => (
              <div
                key={`${i}-${message.content}`}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg shadow-md",
                  message.role === "user"
                    ? "bg-white border border-gray-200"
                    : "bg-gray-100"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <div className="text-sm">
                  <ReactMarkdown
                    components={{
                      pre: ({ node, ...props }) => (
                        <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                          <pre {...props} />
                        </div>
                      ),
                      code: ({ node, ...props }) => (
                        <code className="bg-black/10 rounded-lg p-1" {...props} />
                      ),
                    }}
                    className="text-sm overflow-hidden leading-7"
                  >
                    {message.content || ""}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePage;
