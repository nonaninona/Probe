import styles from './MainPageUI0.module.scss';
import mainPageUI from "../assets/MainPageUI0.png"

export default function MainPageUI0() {

    return (
        <div className={styles['ui-image-container']}>
            <img className={styles['ui-image']} src={mainPageUI}></img>
        </div>
    )
}