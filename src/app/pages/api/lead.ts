export default async function handler(req, res) {
  const webhookUrl = process.env.BITRIX_WEBHOOK_ADD_LEAD; // Получаем URL вебхука из переменной окружения

  if (req.method === "POST") {
    const { name, email, phone } = req.body;

    const data = {
      fields: {
        TITLE: "Новый лид с сайта Picasso Company",
        NAME: name,
        EMAIL: [{ VALUE: email, VALUE_TYPE: "WORK" }],
        PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
      },
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.result) {
        res.status(200).json({ message: "Лид успешно создан!" });
      } else {
        res.status(500).json({ error: "Ошибка при создании лида" });
      }
    } catch (error) {
      res.status(500).json({ error: "Ошибка при отправке данных" });
    }
  } else {
    res.status(405).json({ error: "Метод не поддерживается" });
  }
}
