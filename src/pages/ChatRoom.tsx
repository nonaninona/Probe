import { useParams } from "react-router-dom"
import ChatList from "../components/chat/ChatList"
import ChatRoomSideBar from "../components/chat/ChatRoomSideBar"
import ChatbotPrompt from "../components/ChatbotPrompt"
import { callGetChatListAPI, callGetChatRoomListAPI } from "../services/ChatAPI"
import styles from "./ChatRoom.module.scss"
import { useEffect, useState } from "react"
import { useRef } from "react"

interface SocketMessage {
    chatRoomId: string,
    username: string,
    message: string
}

interface Chat {
    id : string,
    memberId : string,
    chatRoomId : string,
    role : string,
    message : string,
    date : string
}

export function ChatRoom() {
    const id = localStorage.getItem('id')
    const chatRoomParam = useParams().chatRoomId!;
    const [chatRoomId, setChatRoomId] = useState(chatRoomParam)
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
    let ws = useRef<WebSocket | null>(null)
    const JWT = localStorage.getItem("JWT")
    useEffect(() => {
        if(ws.current) {
            ws.current.close()
        }
        const socket = new WebSocket(import.meta.env.VITE_APP_WS_SERVER_URL + '/chat/sendMessage?token=' + JWT);
        ws.current = socket;
        socket.onopen = () => {
            console.log('소켓 접속 성공')
        };
        socket.onmessage = (event) => {
            setChats((chats) => [...chats, { side: 'probee', content: event.data }]);
        };
        socket.onclose = () => {
            console.log('소켓 연결 해제')
        }
    }, [chatRoomId])
    const sendMessage = (message: SocketMessage) => {
        if(ws.current)
            ws.current.send(JSON.stringify(message))
    };

    useEffect(() => {
        callGetChatRoomListAPI({ id : id! })
            .then((data) => {
                setChatRooms(data.chatRooms)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [chatRoomId])
    useEffect(() => {
        callGetChatListAPI({ chatRoomId })
            .then((data) => {
                setChats(data.chats.map((chat: Chat) => {
                    return { side : (chat.role == 'user' ? 'user' : 'probee'),  content : chat.message}
                }))
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [chatRoomId])


    const handleQuery = (query: string) => {
        const msg = {
            chatRoomId: chatRoomId,
            username: id || '',
            message: query
        }
        sendMessage(msg)
        setChats((chats) => [...chats, { side: 'user', content: msg.message }])
    }
    const handleClick = (chatRoomId : string) => {
        setChatRoomId(chatRoomId)
    }

    return (
        <div className={styles['chat-room']}>
            <ChatRoomSideBar onClick={handleClick} userName={id!} items={chatRooms} />
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