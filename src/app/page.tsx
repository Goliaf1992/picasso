"use client";
import React from "react";
import TemplateCard from "../app/components/template-card/TemplateCard";

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
    <div className="min-h-screen  text-white">
      {/* Герой-секция */}
      <section className="py-20 text-center">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in">
          Хирургические шаблоны нового поколения
        </h1>
        <p className="text-xl text-purple-300 mb-8 animate-fade-in-delay">
          Точность, надежность, инновации
        </p>
      </section>

      {/* Секция с карточками шаблонов */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </section>
    </div>
  );
}
