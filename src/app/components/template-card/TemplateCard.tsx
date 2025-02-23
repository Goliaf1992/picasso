"use client";
import React from "react";
const ImplantModelWithSuspense = dynamic(
  () => import("../implant-model/ImplantModel"),
  { ssr: false }
);
import dynamic from "next/dynamic";

interface Template {
  id: number;
  title: string;
  description: string;
  modelUrl: string;
}

interface TemplateCardProps {
  template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-shadow duration-300">
      {/* Контейнер для 3D-модели */}
      <div className="h-64 w-full bg-gray-100 flex items-center justify-center relative">
        <ImplantModelWithSuspense url={"/models/scene.gltf"} />
      </div>

      {/* Описание шаблона */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-[var(--color-text-accent)]">
          {template.title}
        </h2>
        <p className="text-gray-600">{template.description}</p>
      </div>

      {/* Кнопка для деталей (можно добавить функционал) */}
      <div className="p-4 bg-gray-50">
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
