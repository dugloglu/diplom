"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from 'react';
import { Toast } from '../Toast/Toast';
import Styles from './Footer.module.css';


export const Footer = () => {
  const pathname = usePathname();
  const [toastVisible, setToastVisible] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
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
              <li onClick={() => copyToClipboard('+7(995) 318-60-52')}>
                <img className={Styles['contact__image']} src="/images/phon.svg" alt="Телефон" />
                <p className={Styles['contact__text']}>+7(995) 318-60-52</p>
              </li>
              <li onClick={() => copyToClipboard('+7(961) 305-05-36')}>
                <img className={Styles['contact__image']} src="/images/phon.svg" alt="Телефон" />
                <p className={Styles['contact__text']}>+7(961) 305-05-36</p>
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
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
              <img className={Styles['social__image']} src="/images/vk.png" alt="Ссылка на ВК" />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <img className={Styles['social__image']} src="/images/tg.png" alt="Ссылка на Телеграм" />
            </a>
          </div>
        </div>
        <div className={Styles['copyright']}>
          <p className={Styles['copyright__text']}>&copy; 2024 ООО ЮК "ИВАНЦОВ&ИВАНЦОВА"</p>
        </div>
      </section>
      <Toast message="Номер телефона скопирован в буфер обмена" visible={toastVisible} />
    </footer>
  );
};







