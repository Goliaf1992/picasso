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
      <section className="container max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center h-auto min-h-screen flex flex-col items-center justify-around relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Хирургические шаблоны нового поколения
        </h1>
        <p className="text-lg sm:text-xl text-[var(--color-text-primary)] mb-8 animate-fade-in-delay">
          Точность, надежность, инновации
        </p>
        <VideoLogo />
      </section>

      {/* Секция с карточками шаблонов */}
      <section className="container max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center h-auto min-h-screen flex flex-col items-center justify-around">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Попробуйте сейчас
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </section>

      {/* Секция с отзывами */}
      <section className="container max-w-7xl px-4 sm:px-6 lg:px-8 h-auto min-h-screen py-20 text-center flex flex-col items-center justify-around">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Отзывы врачей
        </h1>
        <MySwiper />
      </section>
    </div>
  );
}
