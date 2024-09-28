import styles from './LastChatList.module.scss'
import { LastChatBoxProps } from './LastChatBox'
import LastChatBox from './LastChatBox'
import { useNavigate } from 'react-router-dom';

interface LastChatListProps {
    items: LastChatBoxProps[]
}

export default function LastChatList({ items }: LastChatListProps) {
    const navigate = useNavigate();

    const handleClick = (chatRoomId: number) => {
        navigate('/chatroom')
        console.log(chatRoomId)
    }

    return (
        <div className={styles['last-chat-list']}>
            <div className={styles['title']}>이전 대화 목록</div>
            <div className={styles['list-wrapper']}>
                {items.map((item) => {
                    return <div key={item.chatRoomId} className={styles['list-item']}>
                        <LastChatBox
                            chatRoomId={item.chatRoomId}
                            title={item.title}
                            date={item.date}
                            onClick={handleClick}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}
