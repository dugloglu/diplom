import Styles from './AreaText.module.css';
import { Button } from "../Button/Button";
export const AreaTextBankruptcy = () => {
    return(
        <section className={Styles['section__area']}>
        <img className={Styles['img__link']} src="/images/bankruptcy.jpg" alt="Банкротство" />
        <img className={Styles['img__link_min']} src="/images/bankruptcy_min.jpg" alt="Банкротство" />
        <div className={Styles['container']}>
        <p className={Styles['area__logo']}>
        Если вы оказались в сложной финансовой ситуации и не можете погасить свои долги, процедура банкротства физических лиц может стать для вас оптимальным решением. <br />
        </p>
        <p className={Styles['area__logo']}>Мы готовы предложить вам полный комплекс услуг по сопровождению этой процедуры.
        </p>
        </div>
        <div className={Styles['container']}>
        <h2 className={Styles['area__h']}>Наши услуги включают:</h2>
        <p className={Styles['area__text']}><b>Сбор и подготовка всех необходимых документов:</b> Мы тщательно соберем и подготовим все необходимые документы, чтобы ваше дело было рассмотрено максимально быстро и эффективно.
        </p>
        <p className={Styles['area__logo']}><b>Составление и подача заявления:</b> Мы составим и подадим заявление о признании вас банкротом в арбитражный суд, обеспечивая корректность и полноту всех юридических аспектов.
        </p>
        <p className={Styles['area__logo']}><b>Представление интересов должника:</b> На протяжении всей процедуры банкротства мы будем представлять ваши интересы в суде, защищая ваши права и помогая вам добиться наиболее благоприятного исхода.</p>
        </div>
        <div className={Styles['container']}>
        <h2 className={Styles['area__h']}>Почему стоит выбрать нас?</h2>
        <ul className={Styles['area__text']}>
            <li className={Styles['area__li']}><b>Опыт и профессионализм:</b> Наши юристы имеют богатый опыт в области банкротства физических лиц и готовы предложить вам компетентную помощь на каждом этапе.</li>
            <li className={Styles['area__li']}><b>Индивидуальный подход:</b> Мы учитываем все особенности вашей ситуации и разрабатываем стратегию, которая наилучшим образом соответствует вашим потребностям.</li>
            <li className={Styles['area__li']}><b>Поддержка на всех этапах:</b> Мы будем рядом с вами от начала и до конца процедуры, обеспечивая полное юридическое сопровождение и поддержку.</li>
        </ul>
        </div>
        <div className={Styles['container']}>
            <p className={Styles['area__bottom']}>Не откладывайте решение своих финансовых проблем. Обратитесь к нам за консультацией, и мы поможем вам вернуть финансовую стабильность и спокойствие.</p>
        </div>
        <div className={Styles['container']}>
        <Button/>
        </div>
        </section>
    );
};
