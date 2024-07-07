import Styles from './AreaText.module.css';
import { Button } from "../Button/Button";
export const AreaTextFamily = () => {
    return(
        <section className={Styles['section__area']}>
        <img className={Styles['img__link']} src="/images/family.jpg" alt="Семейное право" />
        <img className={Styles['img__link_min']} src="/images/family_min.jpg" alt="Семейное право" />
        <div className={Styles['container']}>
        <p className={Styles['area__logo']}>
        Если у вас возникли семейные споры или вопросы, связанные с семейным правом, наши юристы готовы предоставить вам квалифицированную помощь. <br />
        </p><p className={Styles['area__logo']}>Мы специализируемся на защите ваших семейных прав и интересов.
        </p>
        </div>
        <div className={Styles['container']}>
        <h2 className={Styles['area__h']}>Наши услуги включают:</h2>
        <p className={Styles['area__text']}><b>Развод и раздел имущества:</b> Мы предоставляем полное юридическое сопровождение при разводе, включая раздел имущества, определение места жительства детей и разработку соглашений.
        </p>
        <p className={Styles['area__text']}>
        <b>Усыновление и опека:</b> Мы поможем вам с оформлением усыновления, установлением опеки или попечительства над детьми, обеспечивая защиту их прав и интересов.
        </p><p className={Styles['area__text']}>
        <b>Регулирование отношений между супругами:</b> Мы предоставляем консультации и помощь по вопросам совместного проживания, алиментов, установления отцовства и другим семейным вопросам.</p>
        </div>
        <div className={Styles['container']}>
        <h2 className={Styles['area__h']}>Почему стоит выбрать нас?</h2>
        <ul className={Styles['area__text']}>
            <li className={Styles['area__li']}><b>Опыт и профессионализм:</b> Наши юристы имеют обширный опыт работы в области семейного права и готовы предложить вам компетентную помощь на каждом этапе вашего дела.</li>
            <li className={Styles['area__li']}><b>Индивидуальный подход:</b> Мы учитываем особенности вашей семейной ситуации и разрабатываем стратегию, нацеленную на достижение наилучшего результата для вас и вашей семьи.</li>
            <li className={Styles['area__li']}><b>Поддержка на всех этапах:</b> Мы будем сопровождать вас от начала и до конца процесса, обеспечивая всестороннюю помощь и защиту ваших семейных интересов.</li>
        </ul>
        </div>
        <div className={Styles['container']}>
            <p className={Styles['area__bottom']}>Не откладывайте решение важных семейных вопросов. Обратитесь к нам за консультацией, и мы поможем вам найти оптимальное решение для вашей семьи.</p>
        </div>
        <div className={Styles['container']}>
        <Button/>
        </div>
        </section>
    );
};
