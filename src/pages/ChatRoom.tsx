import ChatList from "../components/chat/ChatList"
import ChatRoomSideBar from "../components/chat/ChatRoomSideBar"
import ChatbotPrompt from "../components/ChatbotPrompt"
import styles from "./ChatRoom.module.scss"
import { useState } from "react"

interface ChatRoomProps {
    userName: string
}

export function ChatRoom({ userName }: ChatRoomProps) {
    const [chatRooms, setChatRooms] = useState(
        [
            {
                chatRoomId: 1,
                title: 'test title 1'
            },
            {
                chatRoomId: 2,
                title: 'test title 2'
            },
            {
                chatRoomId: 3,
                title: 'test title 3'
            },
            {
                chatRoomId: 4,
                title: 'test title 4'
            }
        ]
    )
    const [chats, setChats] = useState(
        [
            {
                side: 'user',
                content: '123123'
            },
            {
                side: 'probee',
                content: '123123'
            },
            {
                side: 'user',
                content: '123123123'
            },
            {
                side: 'probee',
                content: '123123'
            },
            {
                side: 'user',
                content: '123123'
            },
            {
                side: 'probee',
                content: '123123'
            }
        ]
    )

    const callGetChatRoomsAPI = () => {

    }

    const callGetChatsAPI = () => {

    }

    const sendSocketMessageAPI = () => {

    }

    return (
        <div className={styles['chat-room']}>
            <ChatRoomSideBar userName={userName} items={chatRooms} />
            <div className={styles['right-column']}>
                <div className={styles['chat-list']}>
                <ChatList items={chats} />
                </div>
                <div className={styles['prompt']}>
                <ChatbotPrompt />
                </div>
            </div>
        </div>
    )
}