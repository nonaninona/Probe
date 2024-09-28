import styles from './HomePageUI0.module.scss';
import mainPageUI from "../../assets/HomePageUI0.png"

export default function HomePageUI0() {

    return (
        <div className={styles['ui-image-container']}>
            <img className={styles['ui-image']} src={mainPageUI}></img>
        </div>
    )
}