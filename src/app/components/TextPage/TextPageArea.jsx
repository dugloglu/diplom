import Styles from './TextPage.module.css';

export const TextPageArea = () => {
   return(
    <section className={Styles['section__text_page']}>
        <h1 className={Styles['h_big']}>Услуги и практики</h1>
        <div className={Styles['container']}>
        <ul className={Styles['advantages_ul']}><li className={Styles['advantages__li_big']}> <img src="/images/mark3.svg" className={Styles['img__li_ab']} alt="" />Помогаем гражданам и компаниям решать правовые вопросы профессионально и эффективно.</li></ul>
        </div>
        <div className={Styles['container']}>

        <h2 className={Styles['home__h']}>Наши области экспертности</h2>
            <ul className={Styles['advantages_ul']}><li className={Styles['advantages__li']}> <img src="/images/mark3.svg" className={Styles['img__li_ab']} alt="" />Мы обладаем высокой компетентностью во всех заявленных правовых областях.</li></ul>
        </div>
        <div>
        </div>
    </section>
   )
}