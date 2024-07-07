import Styles from './Banner.module.css';

export const Banner = () => {
    return(
        <div className={Styles['banner']}>
     <img className={Styles['banner_img']}  src="/images/banner.jpg" alt="Баннер" />
     <img className={Styles['banner_img_mobile']} src="/images/banner_min.jpg" alt="Мобильный баннер"/>
     </div>
    )
}