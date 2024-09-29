import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { SignUpPage } from '../../pages/LoginPage';

describe('SignUpPage 회원가입 기능 테스트', () => {
    it('올바르지 않은 이름, 아이디, 비밀번호 입력 후 요청 시, 오류 메시지가 뜨는가?', () => {
        render(
            <MemoryRouter initialEntries={['/signup']}>
                <Routes>
                    <Route path="/signup" element={ <SignUpPage /> }/>
                    <Route path="/" element={ <div>메인</div> }/>
                </Routes>
            </MemoryRouter>
        );


        const signUpBtn = screen.getByRole("button")
        fireEvent.click(signUpBtn);

        const errorMsg = screen.getByText("이름, 아이디 혹은 비밀번호가 올바르지 않습니다")

        expect(errorMsg).toBeInTheDocument();
    })
    it('올바른 이름, 아이디, 비밀번호 입력 후 요청 시 HomePage로 이동하는가?', () => {
        render(
            <MemoryRouter initialEntries={['/signup']}>
                <Routes>
                    <Route path="/signup" element={ <SignUpPage /> }/>
                    <Route path="/" element={ <div>메인</div> }/>
                </Routes>
            </MemoryRouter>
        );

        const userNameInput = screen.getByPlaceholderText('이름을 입력해주세요');
        const idInput = screen.getByPlaceholderText('아이디를 입력해주세요');
        const passwordInput = screen.getByPlaceholderText('비밀번호를 입력해주세요');
        fireEvent.change(userNameInput, { target: { value: 'testName' } });
        fireEvent.change(idInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        const signupButton = screen.getByRole('button');
        fireEvent.click(signupButton);

        const pageName = screen.getByText('메인')
        expect(pageName).toBeInTheDocument();
        
    })
})