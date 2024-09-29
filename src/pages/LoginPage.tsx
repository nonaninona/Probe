import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/LoginForm"
import NavBar from "../components/NavBar"
import { useState } from "react";
import styles from './LoginPage.module.scss';
import { callLoginAPI } from "../services/LoginAPI";

export function LoginPage() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = ({id, password} : { id: string; password: string }) => {
        const response = callLoginAPI({id, password});
        response
            .then((data) => {
                console.log(data)
                setErrorMessage('')
                navigate('/')
            })
            .catch((err) => {
                setErrorMessage('아이디 혹은 비밀번호가 올바르지 않습니다')
            })
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