import React from "react";
import VideoLogo from "../video-logo/VideoLogo";

const HeroSection = () => {
  return (
    <section
      className="bg-gradient-to-r from-customPurple to-customPurpleLight w-full px-4 sm:px-6 lg:px-8 py-20 text-center h-auto min-h-screen flex flex-col items-center z-40 justify-around relative rounded-[0%_0%_30%_30%_/_30%_30%_40px_40px] 
      sm:rounded-[0%_0%_40%_40%_/_40%_40%_50px_50px] 
      md:rounded-[0%_0%_50%_50%_/_50%_50%_70px_70px]"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in  text-textLight">
        Хирургические шаблоны нового поколения
      </h1>
      <p className="text-lg sm:text-xl text-[var(--color-text-primary)] mb-8 animate-fade-in-delay  text-textLight">
        Точность, надежность, инновации
      </p>
      <VideoLogo />
    </section>
  );
};

export default HeroSection;
