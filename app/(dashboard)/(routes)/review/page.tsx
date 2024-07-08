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
      <h1 className="text-3xl font-bold mb-8 text-center">
        Add a Review and Join the List of Intellix Enthusiasts
      </h1> {/* Updated heading text */}
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