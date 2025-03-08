"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
// Динамическая загрузка 3D-модели
const ImplantModelWithSuspense = dynamic(
  () => import("../../components/implant-model/ImplantModel"),
  { ssr: false }
);

// Интерфейс шаблона
export interface Template {
  id: number;
  title: string;
  description: string;
  details: string;
  modelUrl: string;
  jawUrl: string;
}

// Фейковые данные (потом можно заменить API-запросом)
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

export default function TemplateDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [template, setTemplate] = useState<Template | null>(null);

  useEffect(() => {
    const foundTemplate = templates.find((t) => t.id === Number(params.id));
    if (foundTemplate) {
      setTemplate(foundTemplate);
    } else {
      router.push("/");
    }
  }, [params.id, router]);

  if (!template) {
    return <p className="text-center text-xl mt-20">Загрузка...</p>;
  }

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-8 rounded-[0%_0%_30%_30%_/_30%_30%_40px_40px] 
      sm:rounded-[0%_0%_40%_40%_/_40%_40%_50px_50px] 
      md:rounded-[0%_0%_50%_50%_/_50%_50%_70px_70px] "
    >
      {/* Кнопка назад */}
      <button
        className="absolute top-4 left-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg shadow-lg text-sm sm:text-base"
        onClick={() => router.back()}
      >
        ← Назад
      </button>

      {/* Заголовок */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-700">
        {template.title}
      </h1>

      {/* Контейнер для 3D-модели */}
      <div className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl bg-gray-200 flex items-center justify-center rounded-lg shadow-xl p-4">
        <ImplantModelWithSuspense
          urls={{ base: template.modelUrl, extra: template.jawUrl }}
        />
      </div>

      {/* Описание */}
      <div className="mt-6 max-w-md sm:max-w-lg md:max-w-2xl text-center">
        <p className="text-lg sm:text-xl font-semibold text-gray-700">
          {template.description}
        </p>
        <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
          {template.details}
        </p>
      </div>

      {/* Кнопка заказа */}
      <button className="mt-8 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-lg shadow-lg transition w-full sm:w-auto">
        <Link href={"/order"}>Заказать шаблон</Link>
      </button>

      {/* Волнообразный разделитель */}
    </div>
  );
}

/* function WaveDivider() {
  return (
    <div className="absolute inset-x-0 bottom-0 w-full overflow-hidden leading-none z-0">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[100px] sm:h-[150px] md:h-[180px] scale-y-[-1]"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-[#312e81]"
        ></path>
      </svg>
    </div>
  );
} */
