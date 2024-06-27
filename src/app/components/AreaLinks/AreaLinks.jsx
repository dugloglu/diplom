"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Styles from './AreaLinks.module.css';

export const AreaLinks = () => {
    const pathname = usePathname();
    return(
        <section className={Styles['section__link']}>
        <Link href="/bankruptcy" className={`${Styles["area__link"]} ${pathname === "/bankruptcy" ? Styles["menu__link_active"] : ""}`}> <img className={Styles['img__link']} src="/images/bankruptcy.jpg" alt="Банкротство" /></Link>
        <Link href="/house" className={`${Styles["area__link"]} ${pathname === "/house" ? Styles["menu__link_active"] : ""}`}><img className={Styles['img__link']} src="/images/house.jpg" alt="Жилищное право" /></Link>
        <Link href="/heritage" className={`${Styles["area__link"]} ${pathname === "/heritage" ? Styles["menu__link_active"] : ""}`}> <img className={Styles['img__link']} src="/images/heritage.jpg" alt="Наследственное право" /></Link>
        <Link href="/work" className={`${Styles["area__link"]} ${pathname === "/work" ? Styles["menu__link_active"] : ""}`}> <img className={Styles['img__link']} src="/images/work.jpg" alt="Трудовое право" /></Link>
        <Link href="/family" className={`${Styles["area__link"]} ${pathname === "/family" ? Styles["menu__link_active"] : ""}`}> <img className={Styles['img__link']} src="/images/family.jpg" alt="Семейное право" /></Link>
        </section>
    );
};




