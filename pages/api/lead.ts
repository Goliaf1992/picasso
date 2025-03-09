import type { NextApiRequest, NextApiResponse } from "next";

type LeadData = {
  name: string;
  email: string;
  phone: string;
  interest: string;
};

type ApiResponse = {
  message?: string;
  error?: string;
  details?: unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  const webhookUrl = process.env.BITRIX_WEBHOOK_ADD_LEAD?.trim(); // Получаем URL вебхука из переменной окружения

  if (!webhookUrl) {
    return res
      .status(500)
      .json({ error: "URL вебхука не найден в переменных окружения" });
  }

  // Проверка, что метод запроса POST
  if (req.method === "POST") {
    try {
      const { name, email, phone, interest }: LeadData = req.body;

      // Проверка на обязательные данные
      if (!name || !email || !phone || !interest) {
        return res.status(400).json({
          error: "Все поля (name, email, phone) обязательны для заполнения",
        });
      }

      const data = {
        fields: {
          TITLE: "Новый лид с сайта Picasso Company",
          NAME: name,
          EMAIL: [{ VALUE: email, VALUE_TYPE: "WORK" }],
          PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
          UF_CRM_1741253974811:{value: interest, VALUE_TYPE: "WORK"}
        },
      };

      // Отправка данных в Bitrix24 через вебхук
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // Если вебхук вернул успешный ответ
      if (result.result) {
        return res.status(200).json({ message: "Лид успешно создан!" });
      } else {
        return res.status(500).json({
          error: `Ошибка при создании лида: ${JSON.stringify(result)}`,
        });
      }
    } catch (error: any) {
      console.error("❌ Ошибка при отправке данных в Bitrix24:", error);
      return res.status(500).json({
        error: "Ошибка при отправке данных",
        details: error.message || JSON.stringify(error),
      });
    }
  } else {
    // Если метод не поддерживается
    return res.status(405).json({ error: "Метод не поддерживается" });
  }
}
