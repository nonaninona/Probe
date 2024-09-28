import styles from './HomePageUI2.module.scss';
import mainPageUI from "../../assets/HomePageUI2.png"

export default function MainPageUI1() {

    return (
        <div>
            <img className={styles['ui-image']} src={mainPageUI}></img>
        </div>
    )
}