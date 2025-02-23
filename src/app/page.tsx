"use client";
import React from "react";
import TemplateCard from "../app/components/template-card/TemplateCard";
import MySwiper from "./components/swiper/Swiper";
import VideoLogo from "./components/video-logo/VideoLogo";

export default function page() {
  const templates = [
    {
      id: 1,
      title: "Шаблон для имплантов #1",
      description: "Идеально подходит для сложных операций.",
      modelUrl: "/models/scene.gltf", // Путь к модели
    },
    {
      id: 2,
      title: "Шаблон для имплантов #2",
      description: "Высокая точность и надежность.",
      modelUrl: "/models/scene.gltf",
    },
    {
      id: 3,
      title: "Шаблон для имплантов #3",
      description: "Инновационный дизайн.",
      modelUrl: "/models/scene.gltf",
    },
  ];

  return (
    <div className="min-h-screen width-screen flex flex-col items-center justify-evenly text-white">
      {/* Герой-секция */}
      <section className="container py-20 text-center h-screen flex flex-col items-center justify-around relative">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in">
          Хирургические шаблоны нового поколения
        </h1>
        <p className="text-xl text-[var(--color-text-primary)] mb-8 animate-fade-in-delay">
          Точность, надежность, инновации
        </p>
        <VideoLogo />
      </section>

      {/* Swiper */}
      {/*  <section className="h-screen flex flex-col items-center justify-center">
        <MySwiper />
      </section> */}
      {/* Секция с карточками шаблонов */}
      <section className="container py-20 text-center h-screen flex flex-col items-center justify-around">
        <h2 className="text-6xl font-bold mb-4 animate-fade-in">
          Поробуйте сейчас
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </section>
      <section className="container h-screen py-20 text-center flex flex-col items-center justify-around">
        <h2 className="text-6xl font-bold mb-4 animate-fade-in">
          Отзывы врачей
        </h2>
        <MySwiper />
      </section>
    </div>
  );
}
