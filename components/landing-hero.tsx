"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Ultimate AI Toolkit</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3EB78] to-[#AF4261]">


          <TypewriterComponent
            options={{
              strings: [
                "conversations.",
                "Photo Generation.",
                "Music Composition.",
                "Code Generation.",
                "Video Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div className="text-sm md:text-xl font-light text-zinc-400">
      Boost your content creation speed with AI, achieving results 100x faster.
      </div>

      <div className="">
        <Button
          variant="premium"
          className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          asChild
        >
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            Enter The World For Free
          </Link>
        </Button>
      </div>

      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};
