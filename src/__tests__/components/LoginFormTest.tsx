import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from '../../components/LoginForm';

describe('LoginForm render', () => {
    it('제목이 잘 그려지는가?', () => {
        render(
            <LoginForm errorMessage='' />
        );
        const title = screen.getByTestId('로그인-제목');
        expect(title).toBeInTheDocument();
    })
    it('form item 제목이 잘 그려지는가?', () => {
        render(
            <LoginForm errorMessage=''/>
        );
        const idTitle = screen.getByText('아이디');
        const passwordTitle = screen.getByText('비밀번호');
        expect(idTitle).toBeInTheDocument();
        expect(passwordTitle).toBeInTheDocument();
    })
    it('form input이 잘 그려지는가?', () => {
        render(
            <LoginForm errorMessage=''/>
        );
        const idInput = screen.getByPlaceholderText('아이디를 입력해주세요');
        const passwordInput = screen.getByPlaceholderText('비밀번호를 입력해주세요');
        expect(idInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    })
    it('로그인 버튼이 잘 그려지는가?', () => {
        render(
            <LoginForm errorMessage=''/>
        );
        const loginBtn = screen.getByRole('button');
        expect(loginBtn).toBeInTheDocument();
    })

    it('에러 메시지가 잘 그려지는가?', () => {
        render(
            <LoginForm errorMessage={'아이디 혹은 비밀번호가 올바르지 않습니다'} />
        );
        const loginBtn = screen.getByRole('button');
        expect(loginBtn).toBeInTheDocument();

        const errorMsg = screen.getByText("아이디 혹은 비밀번호가 올바르지 않습니다")
        expect(errorMsg).toBeInTheDocument();
    })
})

// describe('LoginForm 제출 테스트', () => {
//     it('올바르지 않은 아이디, 비밀번호 입력 후 요청 시, 오류 메시지가 뜨는가?', () => {
//         const handleLogin = jest.fn();
//         const errorMessage = "아이디 혹은 비밀번호가 올바르지 않습니다."
//         render(
//             <LoginForm onLogin={handleLogin} errorMessage={errorMessage}/>
//         );
//         const loginBtn = screen.getByRole('button');
//         fireEvent.click(loginBtn);

//         const errorMsg = screen.getByText("아이디 혹은 비밀번호가 올바르지 않습니다")

//         expect(errorMsg).toBeInTheDocument();
//         expect(handleLogin).toHaveBeenCalledTimes(1)
//         expect(handleLogin).toHaveBeenCalledWith({
//             id : "",
//             password: ""
//         })
//     })
//     it('올바른 아이디, 비밀번호 입력 후 요청 시 HomePage로 이동하는가?', () => {
//         const handleLogin = jest.fn();
//         handleLogin.mockImplementation(({id, password}) => {
//             console.log(id)
//             console.log(password)
//             window.history.pushState({}, 'Login', '/login');
//         })

//         render(
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/login" element={ <LoginForm onLogin={handleLogin} /> } />
//                     <Route path="/" element={ <div>메인</div> } />
//                 </Routes>
//             </BrowserRouter>
//         );

//         const idInput = screen.getByPlaceholderText('아이디를 입력해주세요');
//         const passwordInput = screen.getByPlaceholderText('비밀번호를 입력해주세요');
//         fireEvent.change(idInput, { target: { value: 'test@example.com' } });
//         fireEvent.change(passwordInput, { target: { value: 'password123' } });

//         const loginBtn = screen.getByRole('button');
//         fireEvent.click(loginBtn);

//         const pageName = screen.getByText('메인')
//         expect(pageName).toBeInTheDocument();
//         expect(handleLogin).toHaveBeenCalledTimes(1)
//         expect(handleLogin).toHaveBeenCalledWith({
//             id : 'test@example.com',
//             password: 'password123'
//         })
        
//     })
// })