"use client";
import React from "react";
import { Template } from "../app/templates/[id]/page";
import HeroSection from "./components/hero-section/HeroSection";
import TemplateSection from "./components/template-section/TemplateSection";
import TestimonialsSection from "./components/testimonials/testimonials";
import Footer from "./components/footer/footer";
import LearningSection from "./components/learning-section/LearningSection";

export default function Page() {
  const templates: Template[] = [
    {
      id: 1,
      title: "Пилотный протокол",
      description:
        "Точный хирургический шаблон для сложных операций с минимальным риском.",
      details:
        "Пилотный протокол предназначен для первичного позиционирования имплантов с высокой точностью. " +
        "Обеспечивает безопасное проведение сложных хирургических манипуляций, минимизирует погрешности " +
        "и ускоряет процесс имплантации. Отличный выбор для опытных хирургов, работающих с нестандартными случаями.",
      modelUrl: "/models/guide.glb",
      jawUrl: "/models/jaw-lower/lower.glb",
    },
    {
      id: 2,
      title: "Полный протокол",
      description:
        "Комплексное решение для хирургической имплантации с максимальной точностью.",
      details:
        "Полный протокол — это многоуровневый хирургический шаблон, обеспечивающий точное сверление " +
        "и установку имплантов. Благодаря дополнительным направляющим и фиксаторам, он снижает риск ошибок " +
        "и повышает долговечность результатов операции. Подходит для широкого спектра клинических случаев.",
      modelUrl: "/models/guide.glb",
      jawUrl: "/models/jaw-lower/lower.glb",
    },
    {
      id: 3,
      title: "Разборный шаблон",
      description:
        "Модульный дизайн для удобства работы и адаптации к индивидуальным случаям.",
      details:
        "Разборный шаблон представляет собой инновационную конструкцию, позволяющую адаптироваться " +
        "под различные анатомические особенности пациента. Он идеально подходит для случаев, когда требуется " +
        "пошаговая установка имплантов с возможностью корректировки в процессе операции.",
      modelUrl: "/models/guide.glb",
      jawUrl: "/models/jaw-lower/lower.glb",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-evenly text-textLight">
      {/* Герой-секция */}
      <HeroSection />
      {/* Секция с карточками шаблонов */}
      <TemplateSection templates={templates} />
      {/* Секция с отзывами */}
      <TestimonialsSection />
      {/* Секция с обучением */}
      <LearningSection />
      {/* Футер */}
      <Footer />
    </div>
  );
}
