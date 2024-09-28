import Footer from "../components/Footer";
import MainPageUI0 from "../components/HomePage/HomePageUI0";
import MainPageUI1 from "../components/HomePage/HomePageUI1";
import MainPageUI2 from "../components/HomePage/HomePageUI2";
import NavBar from "../components/NavBar";
import styles from "./HomePage.module.scss"

export function HomePage() {
    return (
        <div className={styles['home-page']}>
            <NavBar/>
            <MainPageUI0/>
            <MainPageUI1/>
            <MainPageUI2/>
            <Footer/>
        </div>

    )
}