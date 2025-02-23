import React from "react";

export default function VideoLogo() {
  return (
    <div className="w-full flex items-center justify-center my-5">
      <video
        src="/video/vid2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-[90vw] max-w-xs sm:max-w-md md:max-w-lg aspect-square object-cover rounded-full"
      />
    </div>
  );
}
