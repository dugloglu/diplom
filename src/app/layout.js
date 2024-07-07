import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "ООО ЮК ИВАНЦОВ&ИВАНЦОВА",
  description: "Юридическая компания 'Иванцов и Иванцова' предлагает высококвалифицированные услуги для физических и юридических лиц в Аксае, Ростове-на-Дону и Ростовской области. Наши эксперты предоставляют помощь в банкротстве, гражданском, семейном, трудовом, наследственном и жилищном праве. Индивидуальный подход, доверие и многолетний опыт – залог успешного решения ваших правовых вопросов.",
  image: "images/favicon.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} /> 
        <meta property="og:image:secure_url" content={metadata.image} /> 
        <meta property="og:image:width" content="1200" /> 
        <meta property="og:image:height" content="630" />
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

