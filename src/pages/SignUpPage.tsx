import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar"
import { useState } from "react";
import styles from './SignUpPage.module.scss';
import SignUpForm from "../components/login/SignUpForm";
import { callSignUpAPI } from "../services/SignUpAPI";

export function SignUpPage() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = ({ userName, id, password }: { userName: string, id: string; password: string }) => {
        const response = callSignUpAPI({ userName, id, password });
        response
            .then((data) => {
                console.log(data)
                if(!data.isSuccess) {
                    throw Error("회원가입 실패")
                }
                setErrorMessage('')
                navigate('/')
            })
            .catch((err) => {
                console.log(err.message)
                setErrorMessage('이름, 아이디 혹은 비밀번호가 올바르지 않습니다')
            })
    }
    return (
        <div className={styles['sign-up-page']}>
            <NavBar />
            <div className={styles['sign-up-form-wrapper']}>
                <SignUpForm onSignUp={handleSignUp} errorMessage={errorMessage} />
            </div>
        </div>
    )
}