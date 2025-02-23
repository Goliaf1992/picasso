import React from "react";

export default function VideoLogo() {
  return (
    <div className="w-[100%] h-[50%] m-5 flex items-center justify-center">
      <video
        src="/video/vid2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-[500px] h-[500px] object-cover bg-red rounded-full"
      />
    </div>
  );
}
