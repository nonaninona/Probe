import { useNavigate } from "react-router-dom";
import ChatbotPrompt from "../components/ChatbotPrompt";
import Footer from "../components/Footer";
import HomePageUI0 from "../components/HomePage/HomePageUI0";
import HomePageUI1 from "../components/HomePage/HomePageUI1";
import MainPageUI2 from "../components/HomePage/HomePageUI2";
import NavBar from "../components/NavBar";
import styles from "./HomePage.module.scss"

export function HomePage() {
    const navigate = useNavigate();

    const handleQuery = (query: string) => {
        navigate("/chat")
        console.log(query);
        //새로운 채팅방 + 그 화면으로 이동 + 쿼리 던지고 받기
    }

    return (
        <div className={styles['home-page']}>
            <NavBar />
            <div className={styles['first-ui']}>
                <div className={styles['home-page-ui-0']}>
                    <HomePageUI0 />
                </div>
                <ChatbotPrompt onQuery={handleQuery}/>
            </div>
            <HomePageUI1 />
            <MainPageUI2 />
            <Footer />
        </div>
    )
}