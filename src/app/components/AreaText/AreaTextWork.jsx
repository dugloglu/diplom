import Styles from './AreaText.module.css';
import { Button } from "../Button/Button";
export const AreaTextWork = () => {
    return(
        <section className={Styles['section__area']}>
        <img className={Styles['img__link']} src="/images/work.jpg" alt="Трудовое право" />
        <img className={Styles['img__link_min']} src="/images/work_min.jpg" alt="Трудовое право" />
        <div className={Styles['container']}>
        <p className={Styles['area__logo']}>
        Если у вас возникли проблемы или вопросы, связанные с трудовыми отношениями, наши специалисты по трудовому праву готовы помочь. <br />
        </p><p className={Styles['area__logo']}>Мы предоставляем комплексные юридические услуги для защиты ваших трудовых прав.
        </p>
        </div>
        <div className={Styles['container']}>
        <h2 className={Styles['area__h']}>Наши услуги включают:</h2>
        <p className={Styles['area__text']}><b>Консультации по трудовому законодательству:</b> Мы предоставляем консультации по всем аспектам трудового права, включая трудовые споры, охрану труда и социальное обеспечение.
        </p><p className={Styles['area__text']}>
        <b>Подготовка и анализ трудовых документов:</b> Мы поможем вам с подготовкой и анализом трудовых контрактов, приказов, приема на работу и увольнения.
        </p><p className={Styles['area__text']}>
        <b>Представление интересов в трудовых спорах:</b> Наши адвокаты будут защищать ваши права в суде и других инстанциях по любым трудовым спорам, включая несоблюдение трудовых прав работодателем и другие спорные вопросы.</p>
        </div>
        <div className={Styles['container']}>
        <h2 className={Styles['area__h']}>Почему стоит выбрать нас?</h2>
        <ul className={Styles['area__text']}>
            <li className={Styles['area__li']}><b>Профессионализм и опыт:</b> Наши юристы имеют большой опыт работы в области трудового права и готовы предложить вам квалифицированную помощь.</li>
            <li className={Styles['area__li']}><b>Индивидуальный подход:</b> Мы учитываем особенности вашей ситуации и разрабатываем индивидуальную стратегию защиты ваших трудовых прав.</li>
            <li className={Styles['area__li']}><b>Комплексное сопровождение:</b> Мы предоставляем полное сопровождение вашего дела от начала и до конца, обеспечивая профессиональную помощь на каждом этапе.</li>
        </ul>
        </div>
        <div className={Styles['container']}>
            <p className={Styles['area__bottom']}>Не оставляйте свои трудовые споры без внимания. Обратитесь к нам для получения квалифицированной юридической помощи и защиты ваших трудовых прав.</p>
        </div>
        <div className={Styles['container']}>
        <Button/>
        </div>
        </section>
    );
};
