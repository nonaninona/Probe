import styles from './MainPageUI1.module.scss';
import mainPageUI from "../assets/MainPageUI1.png"

export default function MainPageUI1() {

    return (
        <div>
            <img className={styles['ui-image']} src={mainPageUI}></img>
        </div>
    )
}