// import { LandingContent } from "@/components/landing-content";
// import { LandingFooter } from "@/components/landing-footer";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import TestimonialCarousel from "@/components/review";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      {/* <LandingContent /> */}
      {/* <LandingFooter /> */}
       <TestimonialCarousel/>
    </div>
  );
};

export default LandingPage;
