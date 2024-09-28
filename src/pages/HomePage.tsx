import ChatbotPrompt from "../components/ChatbotPrompt";
import Footer from "../components/Footer";
import HomePageUI0 from "../components/HomePage/HomePageUI0";
import HomePageUI1 from "../components/HomePage/HomePageUI1";
import MainPageUI2 from "../components/HomePage/HomePageUI2";
import NavBar from "../components/NavBar";
import styles from "./HomePage.module.scss"

export function HomePage() {
    return (
        <div className={styles['home-page']}>
            <NavBar />
            <div className={styles['first-ui']}>
                <div className={styles['home-page-ui-0']}>
                    <HomePageUI0 />
                </div>
                <ChatbotPrompt />
            </div>
            <HomePageUI1 />
            <MainPageUI2 />
            <Footer />
        </div>
    )
}