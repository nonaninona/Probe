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

interface SocketMessage {
    chatRoomId: string,
    username: string,
    message: string
}

export function ChatRoom({ id }: ChatRoomProps) {
    const chatRoomIdParam = useParams().chatRoomId!;
    const [chatRoomId, setChatRoomId] = useState(chatRoomIdParam);
    const ws = new WebSocket(import.meta.env.VITE_APP_WS_SERVER_URL + '/chat/sendMessage');

    ws.onopen = () => {
        console.log('WebSocket 연결 성공');
    };

    ws.onmessage = (event) => {
        console.log('서버로부터 메시지:', event.data);
        setChats((chats) => [...chats, { side: 'probee', content: event.data }]);
    };

    const sendMessage = (message: SocketMessage) => {
        ws.send(JSON.stringify(message))    
    };

    const [chatRooms, setChatRooms] = useState(
        [
            {
                chatRoomId: 1,
                title: 'test title 1'
            }
        ]
    )
    const [chats, setChats] = useState(
        [
            {
                side: 'user',
                content: 'test title 1'
            }
        ]
    )

    useEffect(() => {
        callGetChatRoomListAPI({id})
            .then((data) => {
                console.log(data)
                setChatRooms(data.chatRooms)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    useEffect(() => {
        callGetChatListAPI({ chatRoomId })
        .then((data) => {
            console.log(data)
            setChats(data.chats)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }, [])

    const handleQuery = (query:string) => {
        const msg = {
            chatRoomId: chatRoomId,
            username: id,
            message: query
        }
        sendMessage(msg)
        setChats((chats) => [...chats, { side: 'user', content: msg.message }])
    }

    return (
        <div className={styles['chat-room']}>
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