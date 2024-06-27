import express from 'express';
import cors from 'cors'; 
import { Resend } from 'resend';

const app = express();
const resend = new Resend('re_TYoDpPsa_JguvmsbTqfTFgQqM3at6D5PJ');

app.use(express.json());
app.use(cors());
app.post('/api/contact', async (req, res) => {
  const { name, phone, question, area } = req.body;

  if (!name || !phone || !question || !area) {
    return res.status(400).json({ message: 'Неверный запрос. Отсутствуют поля.' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Обратная форма связи <onboarding@resend.dev>',
      to: ['IVANTSOV_IVANTSOVA@mail.ru'],
      subject: `Новое сообщение от ${name}`,
      html: `
      <p><strong>Область консультации:</strong> ${area}</p>
      <p><strong>Вопрос:</strong> ${question}</p>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
    `,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    console.error('Ошибка при отправке почты:', error);
    res.status(500).json({ message: 'Ошибка при отправке почты' });
  }
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});









