// app/review/page.tsx

"use client";

import TestimonialCarousel from "@/components/review";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// app/review/page.tsx



const ReviewPage = () => {
  const router = useRouter();

  const handleReviewClick = () => {
    window.open("https://testimonial.to/intellix-space", "_blank");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-600 animate-text"> Join Intellix's Fanbase: Share Your Thoughts</h2> {/* Centered heading */}
      <div className="flex justify-center">
        <Button
          onClick={handleReviewClick}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-colors"
        >
          Give Review
        </Button>
      </div>

      <div className="mt-8"> {/* Added margin top for spacing */}
        <TestimonialCarousel /> {/* Placing TestimonialCarousel component */}
      </div>
    </div>
  );
};

export default ReviewPage;
