import ChatBubble, { ChatBubbleProps } from './ChatBubble'
import styles from './ChatList.module.scss'

export interface ChatListProps {
    items: ChatBubbleProps[]
}

export default function ChatList({ items }: ChatListProps) {

    return (
        <div className={styles['chat-list']}>
            {
                items.map((item) => {
                    return <ChatBubble side={item.side} content={item.content}/>
                })
            }
        </div>
    )
}
