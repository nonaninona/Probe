import { useNavigate } from "react-router-dom"
import ChatbotPrompt from "../components/ChatbotPrompt"
import LastChatList from "../components/chat/LastChatList"
import NavBar from "../components/NavBar"
import styles from "./ChatPage.module.scss"
import { useEffect, useState } from "react"
import { callGetChatRoomListAPI } from "../services/ChatAPI"
import { callMakeChatRoomAPI } from "../services/ChatAPI"
import Footer from "../components/Footer"

export function ChatPage() {

    const navigate = useNavigate();

    const [chatRooms, setChatRooms] = useState([]);

    const id = localStorage.getItem('id')
    const [isLogin, setIsLogin] = useState(id != null)

    useEffect(() => {
        console.log(id)

        if (id == null)
            return

        callGetChatRoomListAPI({ id: id! })
            .then((data) => {
                console.log(data)
                setChatRooms(data.chatRooms.slice(0, 6))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleQuery = (query: string) => {
        if (id == null)
            navigate('/login')

        const response = callMakeChatRoomAPI({ username: id!, title: Date.now().toString() })
        response
            .then((data) => {
                console.log(data)
                navigate('/chatroom/' + data.chatRoomId, { state: { initialQuery: query } })
            })
            .catch((err) => {
                console.log(err.message)
            })
        console.log(query);
    }

    return (
        <div className={styles['chat-page']}>
            <NavBar isLogin={isLogin} setIsLogin={setIsLogin} page={'chat'} />
            <div className={styles['first-ui']}>
                <div className={styles['notice']}>프로비에게 질문하기</div>
                <ChatbotPrompt onQuery={handleQuery} />
            </div>
            {isLogin ?
                chatRooms.length != 0 ?
                    <LastChatList items={chatRooms} /> 
                    :
                    <div></div>
                :
                <div/>
            }
            <Footer />
        </div>
    )
}