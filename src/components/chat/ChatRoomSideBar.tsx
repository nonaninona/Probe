import { useNavigate } from 'react-router-dom'
import styles from './ChatRoomSidebar.module.scss'
import NewChatButton from './NewChatButton'
import RecentChatItem, { RecentChatItemProps } from './RecentChatItem'
import { callMakeChatRoomAPI } from '../../services/ChatAPI'

export interface ChatRoomSideBarProps {
    onClick?: Function,
    userName: string,
    items: RecentChatItemProps[]
}

export default function ChatRoomSideBar({ onClick, userName, items }: ChatRoomSideBarProps) {
    const navigate = useNavigate();

    const handleClick = (chatRoomId: number) => {
        onClick!(chatRoomId)
        navigate('/chatroom/' + chatRoomId)
    }

    const handleNewChatClick = () => {
        const response = callMakeChatRoomAPI({ username : userName, title : "test title"})
        response    
            .then((data) => {
                console.log(data)
                onClick!(data.chatRoomId)
                navigate('/chatroom/' + data.chatRoomId)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <div className={styles['chat-room-side-bar']}>
            <div className={styles['content-wrapper']}>
                <NewChatButton userName={userName} onClick={handleNewChatClick}/>
                <div className={styles['recent-chat-title']}>최근 대화</div>
                <div className={styles['recent-chat-list']}>
                    {
                        items.map((item) => {
                            return <div className={styles['recent-chat-item']}><RecentChatItem title={item.title} chatRoomId={item.chatRoomId} onClick={handleClick} /></div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
