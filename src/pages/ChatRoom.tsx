import { useParams } from "react-router-dom"
import ChatList from "../components/chat/ChatList"
import ChatRoomSideBar from "../components/chat/ChatRoomSideBar"
import ChatbotPrompt from "../components/ChatbotPrompt"
import { callGetChatListAPI, callGetChatRoomListAPI } from "../services/ChatAPI"
import styles from "./ChatRoom.module.scss"
import { useEffect, useState } from "react"
import { useRef } from "react"
import { useLocation } from "react-router-dom"
import { ChatBubbleProps } from "../components/chat/ChatBubble"

interface SocketMessage {
    chatRoomId: string,
    username: string,
    message: string
}

interface Chat {
    id: string,
    memberId: string,
    chatRoomId: string,
    role: string,
    message: string,
    date: string
}

export function ChatRoom() {
    const id = localStorage.getItem('id')
    const chatRoomParam = useParams().chatRoomId!;
    const location = useLocation();
    const JWT = localStorage.getItem("JWT")
    const [chatRoomId, setChatRoomId] = useState(chatRoomParam)
    const [chatRooms, setChatRooms] = useState([])
    const [chats, setChats] = useState<ChatBubbleProps[]>([])

    let ws = useRef<WebSocket | null>(null)
    useEffect(() => {
        const socket = new WebSocket(import.meta.env.VITE_APP_WS_SERVER_URL + '/chat/sendMessage?token=' + JWT);
        ws.current = socket;

        socket.onopen = () => {
            console.log(chatRoomId + '소켓 접속 성공')
            console.log(location.state)
            if (location.state != null && location.state.initialQuery != "") {
                handleQuery(location.state.initialQuery)
                location.state.initialQuery = ''
            }
        };

        socket.onmessage = (event) => {
            setChats((chats) => [...chats, { side: 'probee', content: event.data }]);
            console.log("set in socket")
        };

        socket.onclose = (event) => {
            console.log(chatRoomId + '소켓 연결 해제')
            console.log(event)
        }

        return () => {
            if(ws.current) {
                ws.current.close();
            }
        }

    }, [chatRoomId])

    useEffect(() => {
        callGetChatRoomListAPI({ id: id! })
            .then((data) => {
                setChatRooms(data.chatRooms)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [chatRoomId])
    
    useEffect(() => {
        if(location.state != null && location.state.initialQuery != "")
            return
        callGetChatListAPI({ chatRoomId })
            .then((data) => {
                setChats(data.chats.map((chat: Chat) => {
                    return { side: (chat.role == 'user' ? 'user' : 'probee'), content: chat.message }
                }))
                console.log("set in effect")
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [chatRoomId])

    const sendMessage = (message: SocketMessage) => {
        if (ws.current)
            ws.current.send(JSON.stringify(message))
    };

    const handleQuery = (query: string) => {
        const msg = {
            chatRoomId: chatRoomId,
            username: id || '',
            message: query
        }
        console.log(msg)
        sendMessage(msg)
        setChats((chats) => [...chats, { side: 'user', content: msg.message }])
        console.log("set in handlequery")
    }

    const handleClick = (chatRoomId: string) => {
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