import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm"
import NavBar from "../components/NavBar"
import { useState } from "react";
import styles from './LoginPages.module.scss';

export function LoginPage() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const callLoginAPI = (id: string, password: string) => {
        console.log(id);
        console.log(password);
        
        const response = { ok : false }
        if(id == 'test@example.com' && password == 'password123')
            response.ok = true;

        return response
    }

    const handleLogin = ({id, password} : { id: string; password: string }) => {
        const response = callLoginAPI(id, password);
        if(response.ok) {
            setErrorMessage('')
            navigate('/')
        }
        setErrorMessage('아이디 혹은 비밀번호가 올바르지 않습니다')
    }
    return ( 
        <div className={styles['login-page']}>
            <NavBar />
            <div className={styles['login-form-wrapper']}>
                <LoginForm onLogin={handleLogin} errorMessage={errorMessage}/>
            </div>
        </div>
    )
}