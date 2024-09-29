import { useNavigate } from 'react-router-dom'
import styles from './ChatRoomSidebar.module.scss'
import NewChatButton from './NewChatButton'
import RecentChatItem, { RecentChatItemProps } from './RecentChatItem'

export interface ChatRoomSideBarProps {
    userName: string,
    items: RecentChatItemProps[]
}

export default function ChatRoomSideBar({ userName, items }: ChatRoomSideBarProps) {
    const navigate = useNavigate();

    const handleClick = (chatRoomId: number) => {
        navigate('/chat/' + chatRoomId)
    }

    return (
        <div className={styles['chat-room-side-bar']}>
            <div className={styles['content-wrapper']}>
                <NewChatButton userName={userName} />
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
