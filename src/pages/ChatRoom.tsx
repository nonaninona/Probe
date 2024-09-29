import { useParams } from "react-router-dom"
import ChatList from "../components/chat/ChatList"
import ChatRoomSideBar from "../components/chat/ChatRoomSideBar"
import ChatbotPrompt from "../components/ChatbotPrompt"
import { callGetChatListAPI, callGetChatRoomListAPI } from "../services/ChatAPI"
import styles from "./ChatRoom.module.scss"
import { useEffect, useReducer, useState } from "react"

interface ChatRoomProps {
    id: string
}
export function ChatRoom({ id }: ChatRoomProps) {
    const chatRoomId = useParams().chatRoomId!;
    const ws = new WebSocket(import.meta.env.VITE_APP_WS_SERVER_URL + '/chat/sendMessage');

    // ws.onopen = () => {
    //     console.log('WebSocket 연결 성공');
    //   };
 
    // const sendMessage = () => {
    //     const message = {
    //         chatRoomId : chatRoomId,
    //         username : "id",
    //         message : "123"
    //     }
    //     ws.send(JSON.stringify(message))
    //   };

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

    useEffect(() => {
        callGetChatRoomListAPI({id})
    }, [])

    useEffect(() => {
        callGetChatListAPI({ chatRoomId })
    }, [])

    const handleQuery = () => {
        //소켓으로 메시지 보내기
    }

    return (
        <div  className={styles['chat-room']}>
            <ChatRoomSideBar userName={id} items={chatRooms} />
            <div className={styles['right-column']}>
                <div className={styles['chat-list']}>
                <ChatList items={chats} />
                </div>
                <div className={styles['prompt']}>
                <ChatbotPrompt onQuery={handleQuery} />
                </div>
            </div>
        </div>
    )
}