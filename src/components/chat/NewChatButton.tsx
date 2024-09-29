import styles from './NewChatButton.module.scss'
import addIcon from '../../assets/add-icon.svg';

interface NewChatButtonProps {
    userName: string,
    onClick?: Function
}

export default function NewChatButton({ userName, onClick }: NewChatButtonProps) {

    const handleClick = () => {
        onClick!(userName)
    }

    return (
        <div onClick={handleClick} className={styles['new-chat-button']}>
            <div className={styles['content-wrapper']}>
                <img className={styles['add-image']} src={addIcon} />
                <div className={styles['button-content']}>
                    새 채팅
                </div>
            </div>
        </div>
    )
}
