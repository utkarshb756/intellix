"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { TOOLS } from "@/constants";
import { cn } from "@/lib/utils";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center py-12 bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="mb-12 space-y-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-600 animate-text">
          Discover the Potential of AI
        </h2>
        <p className="text-gray-700 font-light text-base md:text-lg max-w-2xl mx-auto">
          Engage in insightful conversations powered by AI.
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-6 w-full max-w-screen-lg">
        {TOOLS.map((tool) => (
          <Card
            key={tool.href}
            className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-between bg-white hover:bg-gradient-to-r hover:from-[#abc9e9] hover:to-[#f5bfd7] border border-gray-200"
            onClick={() => router.push(tool.href)}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-3 rounded-full bg-opacity-50", tool.bgColor)}>
                <tool.icon className={cn("w-10 h-10", tool.color, "transform hover:scale-110 transition-transform duration-300")} />
              </div>
              <div className="text-lg font-semibold text-gray-800">{tool.label}</div>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-600" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
