"use client";

import { motion } from "framer-motion";
import ImplantModelWithSuspense from "../components/implant-model/ImplantModel";

export const products = [
  {
    id: 1,
    name: "Шаблон X-Precision",
    description: "Максимальная точность имплантации",
    price: "$299",
  },
  {
    id: 2,
    name: "Шаблон Y-Surgical",
    description: "Оптимизирован для сложных операций",
    price: "$349",
  },
  {
    id: 3,
    name: "Шаблон Z-Guide",
    description: "Совместимость с большинством имплантов",
    price: "$399",
  },
];

export default function Templates() {
  return (
    <section className="p-8 text-centerbg-gradient-to-b from-purple-900 to-white text-center text-white flex-col justify-between">
      <h1 className="text-4xl font-bold mb-6">Наша продукция</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="p-6 bg-white text-black rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: product.id * 0.2 }}
          >
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="mt-2">{product.description}</p>
            <p className="mt-2 font-semibold">{product.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
