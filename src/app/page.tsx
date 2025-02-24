"use client";
import React from "react";
import TemplateCard from "../app/components/template-card/TemplateCard";
import MySwiper from "./components/swiper/Swiper";
import VideoLogo from "./components/video-logo/VideoLogo";

export default function Page() {
  const templates = [
    {
      id: 1,
      title: "Пилотный протокол",
      description: "Идеально подходит для сложных операций.",
      modelUrl: "/models/scene.gltf",
    },
    {
      id: 2,
      title: "Полный протокол",
      description: "Высокая точность и надежность.",
      modelUrl: "/models/scene.gltf",
    },
    {
      id: 3,
      title: "Разборный шаблон",
      description: "Инновационный дизайн.",
      modelUrl: "/models/scene.gltf",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-evenly text-white">
      {/* Герой-секция */}
      <section
        className="bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] w-full px-4 sm:px-6 lg:px-8 py-20 text-center h-auto min-h-screen flex flex-col items-center z-20 justify-around relative  rounded-[0%_0%_30%_30%_/_30%_30%_40px_40px] 
      sm:rounded-[0%_0%_40%_40%_/_40%_40%_50px_50px] 
      md:rounded-[0%_0%_50%_50%_/_50%_50%_70px_70px] "
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Хирургические шаблоны нового поколения
        </h1>
        <p className="text-lg sm:text-xl text-[var(--color-text-primary)] mb-8 animate-fade-in-delay">
          Точность, надежность, инновации
        </p>
        <VideoLogo />
      </section>

      {/* Секция с карточками шаблонов */}
      <section
        className="w-full px-4 sm:px-6 lg:px-8 py-20 text-center h-auto min-h-screen flex flex-col items-center justify-around z-10 bg-white shadow-lg rounded-[0%_0%_30%_30%_/_30%_30%_40px_40px] 
      sm:rounded-[0%_0%_40%_40%_/_40%_40%_50px_50px] 
      md:rounded-[0%_0%_50%_50%_/_50%_50%_70px_70px]  -mt-[67px]"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in text-[var(--color-text-gray)] !pt-[67px] !pb-[67px] sm:pt-0 sm:pb-0">
          Попробуйте сейчас
        </h1>
        <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </section>

      {/* Секция с отзывами */}
      <section className="container max-w-7xl px-4 sm:px-6 lg:px-8 h-auto min-h-screen py-20 text-center flex flex-col items-center justify-around">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in !pt-[67px] !pb-[67px]">
          Отзывы врачей
        </h1>
        <MySwiper />
      </section>
      <footer className="p-6 text-center text-sm opacity-75">
        &copy; 2024 | Все права защищены
      </footer>
    </div>
  );
}
