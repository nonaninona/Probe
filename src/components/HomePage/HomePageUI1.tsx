import styles from './HomePageUI1.module.scss';
import mainPageUI from "../../assets/HomePageUI1.png"

export default function MainPageUI1() {

    return (
        <div>
            <img className={styles['ui-image']} src={mainPageUI}></img>
        </div>
    )
}