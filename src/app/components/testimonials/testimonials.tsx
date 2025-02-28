import React from "react";
import MySwiper from "../swiper/Swiper";

const TestimonialsSection = () => {
  return (
    <section
    style={{zIndex: 49}}
    className="w-full  h-auto min-h-screen py-20 text-center flex flex-col items-center justify-around rounded-[0%_0%_30%_30%_/_30%_30%_40px_40px] 
      sm:rounded-[0%_0%_40%_40%_/_40%_40%_50px_50px] 
      md:rounded-[0%_0%_50%_50%_/_50%_50%_70px_70px] bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] text-[var(--color-text-primary)] relative">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in text-white !pt-[67px] !pb-[67px] sm:pt-0 sm:pb-0">
        Отзывы врачей
    </h1>
      <MySwiper />
    </section>
  );
};

export default TestimonialsSection;
