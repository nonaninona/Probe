import { useNavigate } from "react-router-dom"
import ChatbotPrompt from "../components/ChatbotPrompt"
import LastChatList from "../components/chat/LastChatList"
import NavBar from "../components/NavBar"
import styles from "./ChatPage.module.scss"
import { useEffect } from "react"
import { callGetChatRoomListAPI } from "../services/ChatAPI"

export function ChatPage() {

    const navigate = useNavigate();

    const id = localStorage.getItem('id')

    const dummyItems = [
        {
            chatRoomId: 1,
            title: "test title 1",
            date: "1 days ago"
        },

        {
            chatRoomId: 2,
            title: "test title 2",
            date: "2 days ago"
        },

        {
            chatRoomId: 3,
            title: "test title 3",
            date: "3 days ago"
        },

        {
            chatRoomId: 4,
            title: "test title 4",
            date: "4 days ago"
        }
    ]

    useEffect(() => {
        console.log(id)

        if (id == null)
            return

        callGetChatRoomListAPI({ id: id! })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleQuery = (query: string) => {
        navigate("/newchat")
        console.log(query);
        //새로운 채팅방 + 그 화면으로 이동 + 쿼리 던지고 받기
    }

    return (
        <div className={styles['chat-page']}>
            <NavBar />
            <div className={styles['first-ui']}>
                <div className={styles['notice']}>프로비에게 질문하기</div>
                <ChatbotPrompt onQuery={handleQuery} />
            </div>
            <LastChatList items={dummyItems} />
        </div>
    )
}