"use client";
import { motion } from "framer-motion";
import ImplantModelWithSuspense from "../components/implant-model/ImplantModel";

export default function About() {
  return (
    <motion.section
      className="p-8 text-center h-screen flex flex-col justify-between items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h-96">
        <ImplantModelWithSuspense url="/models/scene.gltf" />
      </div>
      <div className="h-96">
        <ImplantModelWithSuspense url="/models/scene.gltf" />
      </div>

      <h1 className="text-4xl font-bold">О нашей компании</h1>
      <p className="mt-4 max-w-3xl mx-auto">
        Мы разрабатываем инновационные хирургические шаблоны для точной
        имплантации.
      </p>
    </motion.section>
  );
}
