"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Styles from './Header.module.css';

export const Header = () => {
  const pathname = usePathname();
    return (
        <header className={Styles['header']}>
            <nav className={Styles['nav']}>
            <ul className={Styles['menu']}>
            <li className={Styles['menu__item']}>
            <Link href="/area" className={`${Styles["menu__link"]} ${pathname === "/area" ? Styles["menu__link_active"] : ""}`}>
              Услуги
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/about" className={`${Styles["menu__link"]} ${pathname === "/about" ? Styles["menu__link_active"] : ""}`}>
              О Нас
            </Link>
          </li>
          <li className={Styles['menu__item']}>
          <Link href="/" className={`${Styles["menu__link"]} ${pathname === "/" ? Styles["menu__link_active"] : ""}`}>
            Главная
          </Link>
        </li></ul></nav>
            <hr className={Styles['hr']}></hr>
            <div className={Styles['logo']}>
            <div className={Styles['logo__info']}>
            <img
          className={Styles['logo__image']}
          src="/images/logo.svg"
          alt="Логотип"
        />
        <p className={Styles['logo__name']}>ООО ЮК "ИВАНЦОВ&ИВАНЦОВА"</p>
            </div>
            <div className={Styles['contact']}>
            <div className={Styles['contact__wrapper']}> 
            <a href="tel:89953186052"  className={Styles['contact__phone']}>+7(995) 318-60-52</a>
            <img className={Styles['contact__image']} src="/images/phon.svg" alt="Телефон" />
            </div>
            <div className={Styles['contact__wrapper']}>
            <a href="tel:89613050536"  className={Styles['contact__phone']}>+7(961) 305-05-36</a>
            <img className={Styles['contact__image']} src="/images/phon.svg" alt="Телефон" />
            </div>
            </div>
            </div>
        </header>
    );
};

