import Styles from './Button.module.css';

export const Button = () => {
    return (
        <div className={Styles['div_wtsp']}>
            <p className={Styles['labe_wtsp']}>Связаться с нами в WhatsApp</p>
            <div className={Styles['div_btn']}>
            <button className={Styles['btn']}>
                <a className={Styles['btn__a']} href="https://wa.me/79953186052?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D0%90%D0%BD%D0%BD%D0%B0!%20%D0%AF%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB(%D0%B0)%20%D0%B1%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D0%BE%20%D0%B1%D0%B0%D0%BD%D0%BA%D1%80%D0%BE%D1%82%D1%81%D1%82%D0%B2%D1%83%20%D1%84%D0%B8%D0%B7%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%BB%D0%B8%D1%86%D0%B0.%20%D0%A1%D0%B2%D1%8F%D0%B6%D0%B8%D1%82%D0%B5%D1%81%D1%8C%20%D1%81%D0%BE%20%D0%BC%D0%BD%D0%BE%D0%B9%2C%20%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0." target="_blank" rel="noopener noreferrer">
                <p className={Styles['btn__p']}>Анна : <br /> +7(995) 318-60-52</p>
                <img className={Styles['wtps__img']} src="/images/wp.png" alt="Ссылка на Вотсапп" />
                </a>
            </button>
            <span className={Styles['spn']}>или</span>
            <button className={Styles['btn']}>
                <a className={Styles['btn__a']} href="https://wa.me/79613050536?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD!%20%D0%AF%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB(%D0%B0)%20%D0%B1%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D0%BE%20%D0%B1%D0%B0%D0%BD%D0%BA%D1%80%D0%BE%D1%82%D1%81%D1%82%D0%B2%D1%83%20%D1%84%D0%B8%D0%B7%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%BB%D0%B8%D1%86%D0%B0.%20%D0%A1%D0%B2%D1%8F%D0%B6%D0%B8%D1%82%D0%B5%D1%81%D1%8C%20%D1%81%D0%BE%20%D0%BC%D0%BD%D0%BE%D0%B9%2C%20%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0." target="_blank" rel="noopener noreferrer">
                <p className={Styles['btn__p']}>Владилен : <br /> +7(961) 305-05-36</p>
                <img className={Styles['wtps__img']} src="/images/wp.png" alt="Ссылка на Вотсапп" />
                </a>
            </button>
            </div>
        </div>
    );
}