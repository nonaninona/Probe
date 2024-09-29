import styles from './ChatBubble.module.scss'

export interface ChatBubbleProps {
    content: string,
    side: string
}

export default function ChatBubble({ content, side }: ChatBubbleProps) {

    return (
        <div className={styles['chat-bubble']}>
            {side == 'user'
                ?
                <div className={styles['user-content-wrapper']}>
                    <div className={styles['content-wrapper']}>
                        <div className={styles['speecher']}>{side}</div>
                        <div className={styles['content']}>{content}</div>
                    </div>
                </div>
                :
                <div className={styles['probee-content-wrapper']}>
                    <div className={styles['content-wrapper']}>
                        <div className={styles['speecher']}>{side}</div>
                        <div className={styles['content']}>{content}</div>
                    </div>
                </div>
            }

        </div>
    )
}
