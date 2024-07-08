// components/TestimonialCarousel.js

"use client";
// components/TestimonialCarousel.js
import { useEffect } from 'react';

const TestimonialCarousel = () => {
  useEffect(() => {
    // Load the iframeResizer script
    const script = document.createElement('script');
    script.src = 'https://testimonial.to/js/iframeResizer.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Configure the iframeResizer
    script.onload = () => {
      if (window.iFrameResize) {
        window.iFrameResize(
          { log: false, checkOrigin: false },
          '#testimonialto-carousel-intellix-space-tag-all-light'
        );
      }
    };

    // Cleanup script
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      id="testimonialto-carousel-intellix-space-tag-all-light"
      src="https://embed-v2.testimonial.to/carousel/all/intellix-space?theme=light&autoplay=on&showmore=off&one-row=on&same-height=off&tag=all&arrowColor=ffffff"
      frameBorder="0"
      scrolling="no"
      width="100%"
    ></iframe>
  );
};

export default TestimonialCarousel;
