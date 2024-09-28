import styles from './LoginForm.module.scss';

interface LoginFromProps {
    onLogin? : React.MouseEventHandler<HTMLButtonElement>,
    errorMessage: string
}

export default function LoginForm(props : LoginFromProps) {
    return (
        <div className={styles['login-form']}>
            <div className={styles['title']}>로그인</div>
            <div className={styles['item']}>
                <div className={styles['item-title']}>아이디</div>
                <div className={styles['item-input']}>
                    <input className={styles['item-input-field']} type="text"></input>
                </div>
            </div>
            <div className={styles['item']}>
                <div className={styles['item-title']}>비밀번호</div>
                <div className={styles['item-input']}>
                    <input className={styles['item-input-field']} type="password"></input>
                </div>
            </div>
            <div className={styles['error-message']}>{props.errorMessage}</div>
            <button onClick={props.onLogin} className={styles['login-button']}>로그인</button>
        </div>
    )
}