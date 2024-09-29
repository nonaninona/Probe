import styles from './RecentChatItem.module.scss'
import chatIcon from '../../assets/chat-icon.svg';

export interface RecentChatItemProps {
    chatRoomId: number,
    title: string,
    onClick?: Function
}

export default function RecentChatItem({ chatRoomId, title, onClick }: RecentChatItemProps) {

    const handleClick = () => {
        onClick!(chatRoomId)
    }

    return (
        <div onClick={handleClick} className={styles['recent-chat-item']}>
            <img className={styles['chat-image']} src={chatIcon}></img>
            <div className={styles['chat-title']}>
                {title}
            </div>
        </div>
    )
}
