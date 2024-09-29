import styles from './HomePageUI1.module.scss';
import mainPageUI from "../../assets/homePageUI1.png"

export default function HomePageUI1() {

    return (
        <div>
            <img className={styles['ui-image']} src={mainPageUI}></img>
        </div>
    )
}