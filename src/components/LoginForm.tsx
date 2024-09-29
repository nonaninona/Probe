import styles from './LoginForm.module.scss';
import { useState } from 'react';

interface LoginFromProps {
    onLogin? : Function,
    errorMessage: string
}

export default function LoginForm(props : LoginFromProps) {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        props.onLogin!({id, password})
    }

    return (
        <div className={styles['login-form']}>
            <div className={styles['title']} data-testid='로그인-제목'>로그인</div>
            <div className={styles['item']}>
                <div className={styles['item-title']}>아이디</div>
                <div className={styles['item-input']}>
                    <input className={styles['item-input-field']} placeholder='아이디를 입력해주세요' type="text" onChange={(e)=>setId(e.target.value)} value={id}></input>
                </div>
            </div>
            <div className={styles['item']}>
                <div className={styles['item-title']}>비밀번호</div>
                <div className={styles['item-input']}>
                    <input className={styles['item-input-field']} placeholder='비밀번호를 입력해주세요' type="password" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                </div>
            </div>
            <div className={styles['error-message']}>{props.errorMessage}</div>
            <button onClick={handleLogin} className={styles['login-button']}>로그인</button>
        </div>
    )
}