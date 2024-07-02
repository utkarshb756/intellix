import type { PropsWithChildren } from "react";

const LandingLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="h-full overflow-hidden relative">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        {/* Add additional source tags for different video formats if needed */}
      </video>
      <div className="relative mx-auto max-w-screen-xl h-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
