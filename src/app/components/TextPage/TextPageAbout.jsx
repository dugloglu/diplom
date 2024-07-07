"use client";
import Styles from './TextPage.module.css';
import { Map } from "../Map/Map"

export const TextPageAbout = () => {
   return(
    <section className={Styles['section__text_page']}>

        <h1 className={Styles['h_big']}>О нас</h1>
        <div className={Styles['container']}>
        <div className={Styles['container__about']}>
            <div className={Styles['container__about_text']}> 
                <p className={Styles['about__logo']}>ООО ЮК "ИВАНЦОВ&ИВАНЦОВА"</p>
                <p className={Styles['about__text']}>Мы — юридическая компания, основанная и управляемая семейной парой профессиональных юристов, Владиленом Иванцовым и Анной Иванцовой.</p>
                <p className={Styles['about__text']}>Наша цель — предоставить каждому клиенту высококвалифицированную юридическую помощь и поддержку, основанную на доверии, опыте и индивидуальном подходе.</p>
                </div>
            <img className={Styles['about__img']} src="/images/image2.png" alt="" />
        </div>
        </div>
    <div className={Styles['container']}>
        <h2 className={Styles['home__h']}>Почему выбирают нас?</h2>
        <ul className={Styles['list']}>
            <li className={Styles['list__li']}><b>Командный подход:</b> Наш семейный союз и профессиональное партнерство позволяют нам эффективно сотрудничать и разрабатывать уникальные стратегии для каждого клиента.</li>
            <li className={Styles['list__li']}><b>Опыт и квалификация:</b> Каждый из нас имеет богатый опыт в различных областях права, что позволяет нам предлагать широкий спектр юридических услуг.</li>
            <li className={Styles['list__li']}><b>Индивидуальный подход:</b> Мы ценим каждого клиента и подходим к каждой ситуации с полной ответственностью и вниманием к деталям.</li>
            <li className={Styles['list__li']}><b>Доверие и конфиденциальность:</b> Ваши личные данные и правовые вопросы находятся под надежной защитой, и мы гарантируем полную конфиденциальность.</li>
        </ul>
    </div>
    <div className={Styles['container']}>
    <h2 className={Styles['home__h']}>Наша миссия:</h2>
    <div className={Styles['container__about_miss']}>
    <p className={Styles['about__text']}>Мы стремимся помочь нашим клиентам найти решения в самых сложных правовых ситуациях, обеспечивая высокое качество обслуживания и поддерживая на каждом этапе.
    </p><p className={Styles['about__text']}>
Если вы ищете надежного партнера, который окажет вам профессиональную юридическую помощь, обращайтесь в ООО ЮК "ИВАНЦОВ & ИВАНЦОВА". Мы всегда готовы помочь вам добиться справедливости и защитить ваши права.</p>
    </div></div>
    <div className={Styles['container__diplom']}>
    <img className={Styles['diplom']} src="/images/certificate.png" alt="Диплом" />
    <img className={Styles['diplom']} src="/images/certificate1.png" alt="Диплом" />
    <img className={Styles['diplom']} src="/images/certificate2.png" alt="Диплом" />
    </div>
    <div className={Styles['container']}>
        <h2 className={Styles['home__h']}>Наши контакты</h2>
        <ul>
                        <li className={Styles['contact']}>
                            <img className={Styles['contact__image']} src="/images/phon.svg" alt="Телефон" />
                            <a href="tel:89953186052"  className={Styles['contact__text']}>+7(995) 318-60-52</a>
                        </li>
                        <li className={Styles['contact']}>
                            <img className={Styles['contact__image']} src="/images/phon.svg" alt="Телефон" />
                            <a href="tel:89613050536"  className={Styles['contact__text']}>+7(961) 305-05-36</a>
                        </li>
                        <li className={Styles['contact']}>
                            <img className={Styles['contact__image']} src="/images/map.svg" alt="Адрес" />
                            <p className={Styles['contact__text']}>Ростовская область, г. Аксай, ул. Толпинского, д. 130/70, 3 этаж, оф. 12</p>
                        </li >
                        <li className={Styles['contact']}>
                            <img className={Styles['contact__image']} src="/images/eml.svg" alt="E-mail" />
                           <a href="mailto:IVANTSOV_IVANTSOVA@mail.ru" className={Styles['contact__text']}>
                  IVANTSOV_IVANTSOVA@mail.ru
                </a>
                        </li>
                    </ul>
    </div>
    <div className={Styles['container']}>
            <Map/>
      </div>
    </section>
   )
}