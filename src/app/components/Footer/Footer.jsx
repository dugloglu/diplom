"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Styles from './Footer.module.css';


export const Footer = () => {
  const pathname = usePathname();
  const links = [
    'https://wa.me/79953186052?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D0%90%D0%BD%D0%BD%D0%B0!%20%D0%AF%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB(%D0%B0)%20%D0%B1%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E.%20%D0%A1%D0%B2%D1%8F%D0%B6%D0%B8%D1%82%D0%B5%D1%81%D1%8C%20%D1%81%D0%BE%20%D0%BC%D0%BD%D0%BE%D0%B9%2C%20%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0.', 
    'https://wa.me/79613050536?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD!%20%D0%AF%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB(%D0%B0)%20%D0%B1%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E.%20%D0%A1%D0%B2%D1%8F%D0%B6%D0%B8%D1%82%D0%B5%D1%81%D1%8C%20%D1%81%D0%BE%20%D0%BC%D0%BD%D0%BE%D0%B9%2C%20%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0.', 
  ];

  const handleClick = (e) => {
    e.preventDefault(); 
    const randomIndex = Math.floor(Math.random() * links.length);
    const randomLink = links[randomIndex];
    window.open(randomLink, '_blank', 'noopener,noreferrer');
  };
  return (
    <footer className={Styles['footer']}>
      <hr className={Styles['hr']}></hr>
      <section className={Styles['section']}>
        <div className={Styles['footer__section']}>
          <div className={Styles['footer__logo']}>
            <Link href="/" className={`${Styles["menu__link"]} ${pathname === "/" ? Styles["menu__link_active"] : ""}`}>
              <img
                className={Styles['logo__image']}
                src="/images/logo.svg"
                alt="Логотип"
              />
            </Link>
          </div>
          <div className={Styles['footer__form']}>
            <p>
              Получить бесплатную <Link href="/#feedback-form" className={Styles['footer__form__text']}>онлайн-консультацию</Link>
            </p>
          </div>
          <div className={Styles['footer__contact']}>
            <p>Наши контакты:</p>
            <ul>
              <li>
                <img className={Styles['contact__image']} src="/images/phon.svg" alt="Телефон" />
                <a href="tel:89953186052" className={Styles['contact__text']}>+7(995) 318-60-52</a>
              </li>
              <li>
                <img className={Styles['contact__image']} src="/images/phon.svg" alt="Телефон" />
                <a href="tel:89613050536" className={Styles['contact__text']}>+7(961) 305-05-36</a>
              </li>
              <li>
                <img className={Styles['contact__image']} src="/images/map.svg" alt="Адрес" />
                <p className={Styles['contact__text']}>Ростовская область, г. Аксай, ул. Толпинского, д. 130/70, 3 этаж, оф. 12</p>
              </li>
              <li>
                <img className={Styles['contact__image']} src="/images/eml.svg" alt="E-mail" />
                <a href="mailto:IVANTSOV_IVANTSOVA@mail.ru" className={Styles['contact__text']}>
                  IVANTSOV_IVANTSOVA@mail.ru
                </a>
              </li>
            </ul>
          </div>
          <div className={Styles['footer__social']}>
            <a href="https://vk.com/public211428962" target="_blank" rel="noopener noreferrer">
              <img className={Styles['social__image']} src="/images/vk.png" alt="Ссылка на ВК" />
            </a>
            <a href="https://vk.com/away.php?utf=1&to=https%3A%2F%2Ft.me%2Fivantsov_ivantsova" target="_blank" rel="noopener noreferrer">
              <img className={Styles['social__image']} src="/images/tg.png" alt="Ссылка на Телеграм" />
            </a>
            <a onClick={handleClick} href="#" target="_blank" rel="noopener noreferrer">
            <img className={Styles['social__image']} src="/images/wp.png" alt="Ссылка на WhatsApp" />
            </a>
          </div>
        </div>
        <div className={Styles['copyright']}>
          <p className={Styles['copyright__text']}>&copy; 2024 ООО ЮК "ИВАНЦОВ&ИВАНЦОВА"</p>
        </div>
      </section>
    </footer>
  );
};







