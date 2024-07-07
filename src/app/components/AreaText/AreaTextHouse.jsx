import Styles from './AreaText.module.css';
import { Button } from "../Button/Button";
export const AreaTextHouse = () => {
    return(
        <section className={Styles['section__area']}>
        <img className={Styles['img__link']} src="/images/house.jpg" alt="Жилищное право" />
        <img className={Styles['img__link_min']} src="/images/house_min.jpg" alt="Жилищное право" />
        <div className={Styles['container']}>
        <p className={Styles['area__logo']}>
        Если у вас возникли вопросы или проблемы, связанные с жилищным правом, наши специалисты готовы предоставить квалифицированную помощь. <br />
        </p><p className={Styles['area__logo']}>Мы предлагаем полный спектр услуг, направленных на защиту ваших жилищных прав и интересов.
        </p>
        </div>
        <div className={Styles['container']}>
        <h2 className={Styles['area__h']}>Наши услуги включают:</h2>
        <p className={Styles['area__text']}><b>Консультирование по жилищным вопросам:</b> Мы предоставляем профессиональные консультации по любым вопросам, связанным с жильем, включая аренду, покупку и продажу недвижимости.
        </p><p className={Styles['area__text']}>
        <b>Подготовка и проверка документов:</b> Мы обеспечим грамотную подготовку и проверку всех необходимых документов для заключения сделок с недвижимостью.
        </p><p className={Styles['area__text']}>
        <b>Представление интересов в суде:</b> Наши юристы будут защищать ваши права и интересы в суде по любым жилищным спорам, включая выселение, раздел имущества и другие вопросы.</p>
        </div>
        <div className={Styles['container']}>
        <h2 className={Styles['area__h']}>Почему стоит выбрать нас?</h2>
        <ul className={Styles['area__text']}>
            <li className={Styles['area__li']}><b>Опыт и надежность:</b> Наши специалисты имеют многолетний опыт работы в области жилищного права и готовы предложить вам компетентную помощь на каждом этапе.</li>
            <li className={Styles['area__li']}><b>Индивидуальный подход:</b> Мы учитываем все особенности вашей ситуации и разрабатываем стратегию, которая наилучшим образом соответствует вашим потребностям.</li>
            <li className={Styles['area__li']}><b>Поддержка на всех этапах:</b> Мы будем рядом с вами от начала и до конца вашего дела, обеспечивая полное юридическое сопровождение и поддержку.</li>
        </ul>
        </div>
        <div className={Styles['container']}>
            <p className={Styles['area__bottom']}>Не откладывайте решение своих жилищных вопросов. Обратитесь к нам за консультацией, и мы поможем вам защитить свои права и интересы.</p>
        </div>
        <div className={Styles['container']}>
        <Button/>
        </div>
        </section>
    );
};
