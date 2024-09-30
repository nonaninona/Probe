import { useNavigate } from "react-router-dom"
import ChatbotPrompt from "../components/ChatbotPrompt"
import LastChatList from "../components/chat/LastChatList"
import NavBar from "../components/NavBar"
import styles from "./ChatPage.module.scss"
import { useEffect, useState } from "react"
import { callGetChatRoomListAPI } from "../services/ChatAPI"
import { callMakeChatRoomAPI } from "../services/ChatAPI"

export function ChatPage() {

    const navigate = useNavigate();

    const [chatRooms, setChatRooms] = useState([]);

    const id = localStorage.getItem('id')

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
        if(id == null)
            return

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
        <div className={styles['chat-page']}>
            <NavBar />
            <div className={styles['first-ui']}>
                <div className={styles['notice']}>프로비에게 질문하기</div>
                <ChatbotPrompt onQuery={handleQuery} />
            </div>
            <LastChatList items={chatRooms} />
        </div>
    )
}