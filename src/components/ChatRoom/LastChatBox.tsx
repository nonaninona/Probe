import styles from './LastChatBox.module.scss'
import probeE from '../../assets/ProbeE.png'

export interface LastChatBoxProps {
    chatRoomId: number,
    title: string,
    date: string,
    onClick?: Function
}

export default function LastChatBox({ chatRoomId, title, date, onClick }: LastChatBoxProps) {

    const handleClick = () => {
        onClick!(chatRoomId)
    }

    return (
        <div onClick={handleClick} className={styles['last-chat-box']}>
            <div className={styles['content-container']}>
                <img className={styles['probe-E-image']} src={probeE}/>
                <div className={styles['title']}>{title}</div>
                <div className={styles['last-update']}>{date}</div>
            </div>
        </div>
    )
}
