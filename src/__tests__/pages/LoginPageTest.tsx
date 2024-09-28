import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from '../../components/LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

describe('LoginPage 로그인 기능 테스트', () => {
    it('올바르지 않은 아이디, 비밀번호 입력 후 요청 시, 오류 메시지가 뜨는가?', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={ <LoginPage /> }/>
                    <Route path="/" element={ <div>메인</div> }/>
                </Routes>
            </BrowserRouter>
        );

        const loginBtn = screen.getByRole('button');
        fireEvent.click(loginBtn);

        const errorMsg = screen.getByText("아이디 혹은 비밀번호가 올바르지 않습니다")

        expect(errorMsg).toBeInTheDocument();
    })
    it('올바른 아이디, 비밀번호 입력 후 요청 시 HomePage로 이동하는가?', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={ <LoginPage /> } />
                    <Route path="/" element={ <div>메인</div> } />
                </Routes>
            </BrowserRouter>
        );

        const idInput = screen.getByPlaceholderText('아이디를 입력해주세요');
        const passwordInput = screen.getByPlaceholderText('비밀번호를 입력해주세요');
        fireEvent.change(idInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        const loginBtn = screen.getByRole('button');
        fireEvent.click(loginBtn);

        const pageName = screen.getByText('메인')
        expect(pageName).toBeInTheDocument();
        
    })
})