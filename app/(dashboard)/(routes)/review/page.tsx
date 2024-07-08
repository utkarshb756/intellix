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
      <h2 className="text-2xl md:text-2xl mb-5 text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-600 animate-text">
        Add a Review and Join the List of Intellix Enthusiasts
      </h2> {/* Updated heading text */}
      <div className="flex justify-center">
        <Button
          onClick={handleReviewClick}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-colors"
        >
          Give Review
        </Button>
      </div>

      <div className="mt-24"> {/* Added margin top for spacing */}
        <TestimonialCarousel /> {/* Placing TestimonialCarousel component */}
      </div>
    </div>
  );
};

export default ReviewPage;