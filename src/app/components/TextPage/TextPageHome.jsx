import Styles from './TextPage.module.css';

export const TextPageHome = () => {
   return(
    <section className={Styles['section__text_page']}>
        <div className={Styles['container']}> 
            <h2 className={Styles['home__h']}>Наши преимущества:</h2>
            <ul className={Styles['advantages_ul']}>
                <li className={Styles['advantages__li']}> <img className={Styles['img__li']} src='/images/mark2.svg'/><p>Надежное решение ваших юридических вопросов</p></li>
                <li className={Styles['advantages__li']}><img className={Styles['img__li']} src='/images/mark2.svg'/><p>Экономия вашего времени и ресурсов</p></li>
                <li className={Styles['advantages__li']}><img className={Styles['img__li']} src='/images/mark2.svg'/><p>Высокая степень успешности дел</p></li>
            </ul>
        </div>
        <div className={Styles['container']}>
            <h2 className={Styles['home__h']}>Мы надежные партнеры в банкротстве:</h2>
            <div className={Styles['bankruptcy']}>
                <ul><li className={Styles['bankruptcy_li']}><img className={Styles['img__li']} src='/images/mark1.svg'/><p>Профессиональная помощь для физических лиц</p></li></ul>
                <div className={Styles['bankruptcy__container_top']}>
                    <div className={Styles['bankruptcy__container']}>
                        <img className={Styles['bankruptcy__img']} src="/images/image1.jpg" alt="Банкротство" />
                        <p className={Styles['bankruptcy__text_logo']}>Банкротство — законный способ списания долгов физического лица.</p>
                    </div>
                    <p className={Styles['bankruptcy__text']}>При банкротстве можно списать задолженность по кредитным картам, автокредитам, микрозаймам, распискам, налогам и коммунальным платежам. <br /><br />

Если вы не можете погашать долги в установленные сроки или у вас уже есть просрочки, мы поможем вам объявить себя банкротом, независимо от давности долгов.<br /><br />

После признания банкротства кредиторы и коллекторы не смогут требовать оплату. Исполнительные производства прекратятся, аресты на имущество и счета будут сняты, запрет на выезд за границу отменен, а взыскание с доходов прекратится.<br /><br />

Завершение процедуры банкротства полностью освободит вас от долгов.<br /><br />

Узнайте больше у нас на консультации.</p>
                </div>
            </div>
        </div>
        <div className={Styles['container']}>
            <h2 className={Styles['home__h']}>Спектор наших услуг также включает:</h2>
            <ul className={Styles['list']}>
                <li className={Styles['list__li']}>Оказание юридических услуг в области гражданского, семейного, трудового, наследственного, жилищного, налогового и иных отраслей права.</li>
                <li className={Styles['list__li']}>Представление интересов граждан и юридических лиц в государственных органах, учреждениях и судах.</li>
                <li className={Styles['list__li']}>Консультации.</li>
            </ul>
        </div>
    </section>
   )
}