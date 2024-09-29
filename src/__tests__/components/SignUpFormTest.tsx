import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpForm from '../../components/login/SignUpForm';

describe('SignUpForm render', () => {
    it('제목이 잘 그려지는가?', () => {
        render(
            <SignUpForm errorMessage='' />
        );
        const title = screen.getByTestId('회원가입-제목');
        expect(title).toBeInTheDocument();
    })
    it('form item 제목이 잘 그려지는가?', () => {
        render(
            <SignUpForm errorMessage=''/>
        );
        const userName = screen.getByText('이름');
        const idTitle = screen.getByText('아이디');
        const passwordTitle = screen.getByText('비밀번호');
        expect(userName).toBeInTheDocument();
        expect(idTitle).toBeInTheDocument();
        expect(passwordTitle).toBeInTheDocument();
    })
    it('form input이 잘 그려지는가?', () => {
        render(
            <SignUpForm errorMessage=''/>
        );
        const userNameInput = screen.getByPlaceholderText('이름을 입력해주세요');
        const idInput = screen.getByPlaceholderText('아이디를 입력해주세요');
        const passwordInput = screen.getByPlaceholderText('비밀번호를 입력해주세요');
        expect(userNameInput).toBeInTheDocument();
        expect(idInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    })
    it('회원가입 버튼이 잘 그려지는가?', () => {
        render(
            <SignUpForm errorMessage=''/>
        );
        const signUpButton = screen.getByRole('button');
        expect(signUpButton).toBeInTheDocument();
    })

    it('에러 메시지가 잘 그려지는가?', () => {
        render(
            <SignUpForm errorMessage={'이름, 아이디 혹은 비밀번호가 올바르지 않습니다'} />
        );
        const signUpBtn = screen.getByRole('button');
        expect(signUpBtn).toBeInTheDocument();

        const errorMsg = screen.getByText("이름, 아이디 혹은 비밀번호가 올바르지 않습니다")
        expect(errorMsg).toBeInTheDocument();
    })
})