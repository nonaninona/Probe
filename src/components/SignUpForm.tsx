import styles from './SignUpForm.module.scss';
import { useState } from 'react';

interface SignUpFormProps {
    onSignUp? : Function,
    errorMessage: string
}

export default function SignUpForm(props : SignUpFormProps) {
    const [userName, setUserName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        props.onSignUp!({userName, id, password})
        console.log(userName);
        console.log(id);
        console.log(password);
    }

    return (
        <div className={styles['sign-up-form']}>
            <div className={styles['title']} data-testid='회원가입-제목'>회원가입</div>
            <div className={styles['item']}>
                <div className={styles['item-title']}>이름</div>
                <div className={styles['item-input']}>
                    <input className={styles['item-input-field']} placeholder='이름을 입력해주세요' type="text" onChange={(e)=>setUserName(e.target.value)} value={userName}></input>
                </div>
            </div>
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
            <button onClick={handleSignUp} className={styles['sign-up-button']}>회원가입</button>
        </div>
    )
}