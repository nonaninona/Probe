import ChatbotPrompt from "../components/ChatbotPrompt"
import LastChatList from "../components/ChatRoom/LastChatList"
import NavBar from "../components/NavBar"
import styles from "./ChatPage.module.scss"

export function ChatPage() {
    const dummyItems = [
        {
            chatRoomId : 1,
            title : "test title 1",
            date : "1 days ago"
        },
    
        {
            chatRoomId : 2,
            title : "test title 2",
            date : "2 days ago"
        },
    
        {
            chatRoomId : 3,
            title : "test title 3",
            date : "3 days ago"
        },
    
        {
            chatRoomId : 4,
            title : "test title 4",
            date : "4 days ago"
        }
    ]

    const callGetItems = () => {

    }

    return (
        <div className={styles['chat-page']}>
            <NavBar />
            <div className={styles['first-ui']}>
                <div className={styles['notice']}>프로비에게 질문하기</div>
                <ChatbotPrompt />
            </div>
            <LastChatList items={dummyItems}/>
        </div>
    )
}