"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  interest: string; // новое поле для выбора предмета интереса
};

const interests = [
  { id: "1941", label: "Шаблоны" },
  { id: "1943", label: "Элайнеры" },
  { id: "1945", label: "Ретенционные каппы" },
  { id: "1947", label: "Интраоральное сканирование" },
  { id: "1957", label: "Коронки" },
];

export default function OrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setMessage("");

    try {
      console.log(data);
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(result.message);
      } else {
        setMessage("Ошибка: " + result.error);
      }
    } catch (error) {
      setMessage("Ошибка отправки данных!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[50%] max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg text-[var(--color-text-gray)]">
      <h2 className="text-xl font-semibold mb-4">Оставьте заявку</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Ваше имя"
            {...register("name", {
              required: "Поле обязательно для заполнения",
            })}
            className="w-full p-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Ваш email"
            {...register("email", {
              required: "Поле обязательно для заполнения",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Введите корректный email",
              },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Ваш телефон"
            {...register("phone", {
              required: "Поле обязательно для заполнения",
            })}
            className="w-full p-2 border rounded"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="interest" className="block mb-2">
            Предмет интереса
          </label>
          <select
            id="interest"
            {...register("interest", {
              required: "Поле обязательно для заполнения",
            })}
            className="w-full p-2 border rounded"
          >
            <option value="">Выберите...</option>
            {interests.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.interest && (
            <p className="text-red-500 text-sm">{errors.interest.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          {loading ? "Загрузка..." : "Отправить"}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
}
