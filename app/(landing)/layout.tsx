import type { PropsWithChildren } from "react";

const LandingLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="relative">
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/background-video.mp4" type="video/mp4" />
          {/* Add additional source tags for different video formats if needed */}
        </video>
      </div>
      <div className="relative z-10 mx-auto max-w-screen-xl min-h-screen">
        {children}
      </div>
    </main>
  );
};

export default LandingLayout;