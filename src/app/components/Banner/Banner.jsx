import Styles from './Banner.module.css';

export const Banner = () => {
    return(
     <img className={Styles['banner']}  src="/images/banner.jpg" alt="Баннер" />
    )
}