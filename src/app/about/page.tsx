"use client";
import { motion } from "framer-motion";
import Advantages from "../components/advantages/Advantages";

export default function About() {
  return (
    <section>
      <motion.section
        className="p-4 md:p-8 text-center min-h-screen flex flex-col justify-center items-center text-textLight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold">О нашей компании</h1>
        <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed ">
          Цифровая лаборатория «Пикассо Lab» «Пикассо Lab» — цифровая
          высокоточная лаборатория, благодаря которой комплексный подход стал
          реальностью! Мы смогли создать систему полного цикла «от
          рентгенодиагностики до использования готовых изделий в лечении». Но
          это далеко не единственное достижение нашей цифровой лаборатории.
          Врачам доступны пакетные предложения «под ключ», которые были
          разработаны на базе нашего 9-летнего опыта применения цифровых
          технологий в дентальной диагностике и лечении. Экономим время врача и
          делаем акцент на важном — быстром и качественном лечении!
        </p>
      </motion.section>
      <Advantages />
    </section>
  );
}
