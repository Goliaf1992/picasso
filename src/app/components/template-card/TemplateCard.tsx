"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const ImplantModelWithSuspense = dynamic(
  () => import("../implant-model/ImplantModel"),
  { ssr: false }
);

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
  const router = useRouter();

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-shadow duration-300">
      <div className="h-64 w-full bg-gray-100 flex items-center justify-center relative">
        <ImplantModelWithSuspense url={template.modelUrl} />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-[var(--color-text-accent)]">
          {template.title}
        </h2>
        <p className="text-gray-600">{template.description}</p>
      </div>

      <div className="p-4 bg-gray-50">
        <button
          onClick={() => router.push(`/templates/${template.id}`)}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
