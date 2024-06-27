import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "ООО ЮК ИВАНЦОВ&ИВАНЦОВА",
  description: "Юридическая компания 'Иванцов и Иванцова' предлагает высококвалифицированные услуги для физических и юридических лиц. Наши эксперты предоставляют помощь в банкротстве, гражданском, семейном, трудовом, наследственном и жилищном праве. Индивидуальный подход, доверие и многолетний опыт – залог успешного решения ваших правовых вопросов.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="images/favicon.ico" />
      </head>
      <body>
        <Header />
       {children}
        <Footer />
        </body>
    </html>
  );
}

