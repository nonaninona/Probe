import { useNavigate } from "react-router-dom";
import ChatbotPrompt from "../components/ChatbotPrompt";
import Footer from "../components/Footer";
import HomePageUI0 from "../components/homePage/HomePageUI0";
import HomePageUI1 from "../components/homePage/HomePageUI1";
import MainPageUI2 from "../components/homePage/HomePageUI2";
import NavBar from "../components/NavBar";
import styles from "./HomePage.module.scss"
import { callMakeChatRoomAPI } from "../services/ChatAPI";

export function HomePage() {
    const navigate = useNavigate();

    const id = localStorage.getItem('id')

    const handleQuery = (query: string) => {
        if(id == null)
            navigate('/login')

        const response = callMakeChatRoomAPI({ username : id!, title : "test title"})
        response    
            .then((data) => {
                console.log(data)
                navigate('/chatroom/' + data.chatRoomId)
            })
            .catch((err) => {
                console.log(err.message)
            })
        console.log(query);
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