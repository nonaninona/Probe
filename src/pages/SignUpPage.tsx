import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar"
import { useState } from "react";
import styles from './SignUpPage.module.scss';
import SignUpForm from "../components/SignUpForm";

export function SignUpPage() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const callSignUpAPI = (userName: string, id: string, password: string) => {
        console.log(userName);
        console.log(id);
        console.log(password);
        
        const response = { ok : false }
        if(userName == 'testName' && id == 'test@example.com' && password == 'password123')
            response.ok = true;

        return response
    }

    const handleLogin = ({name, id, password} : { name: string, id: string; password: string }) => {
        const response = callSignUpAPI(name, id, password);
        if(response.ok) {
            setErrorMessage('')
            navigate('/')
        }
        setErrorMessage('이름, 아이디 혹은 비밀번호가 올바르지 않습니다')
    }
    return ( 
        <div className={styles['login-page']}>
            <NavBar />
            <div className={styles['login-form-wrapper']}>
                <SignUpForm onLogin={handleLogin} errorMessage={errorMessage}/>
            </div>
        </div>
    )
}