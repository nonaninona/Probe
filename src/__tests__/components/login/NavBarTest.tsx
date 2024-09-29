import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../../../components/NavBar';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { HomePage, ChatPage, ArticlePage } from '../../../pages';
import { LoginPage } from '../../../pages/LoginPage';

describe('NavBar render', () => {
    it('챗봇 버튼이 잘 그려지는가?', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/chat' element={<ChatPage/>}/>
                    <Route path='/article' element={<ArticlePage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                </Routes>
            </MemoryRouter>
        );
        const chatPageLink = screen.getByText('챗봇');
        expect(chatPageLink).toBeInTheDocument();
    })
    it('아티클 버튼이 잘 그려지는가?', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/chat' element={<ChatPage/>}/>
                    <Route path='/article' element={<ArticlePage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                </Routes>
            </MemoryRouter>
        );
        const articlePageLink = screen.getByText('아티클');
        expect(articlePageLink).toBeInTheDocument();
    })
    it('지도 버튼이 잘 그려지는가?', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/chat' element={<ChatPage/>}/>
                    <Route path='/article' element={<ArticlePage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                </Routes>
            </MemoryRouter>
        );
        const mapPageLink = screen.getByText('지도');
        expect(mapPageLink).toBeInTheDocument();
    })
    it('로그인 버튼이 잘 그려지는가?', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/chat' element={<ChatPage/>}/>
                    <Route path='/article' element={<ArticlePage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                </Routes>
            </MemoryRouter>
        );
        const loginPageLink = screen.getByText('로그인');
        expect(loginPageLink).toBeInTheDocument();
    })
    it('회원가입 버튼이 잘 그려지는가?', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/chat' element={<ChatPage/>}/>
                    <Route path='/article' element={<ArticlePage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                </Routes>
            </MemoryRouter>
        );
        const SignUpPageLink = screen.getByText('회원가입');
        expect(SignUpPageLink).toBeInTheDocument();
    })
})

describe('NavBar Link 테스트', () => {
    it('ChatPage로 이동 시, 잘 로딩되는가?', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/chat' element={<ChatPage/>}/>
                    <Route path='/article' element={<ArticlePage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                </Routes>
            </MemoryRouter>
        );
        const ChatPageLink = screen.getByText('챗봇');
        fireEvent.click(ChatPageLink);
        const text = screen.getByText('프로비에게 질문하기');
        expect(text).toBeInTheDocument();
    })
    it('ArticlePage로 이동 시, 잘 로딩되는가?', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/chat' element={<ChatPage/>}/>
                    <Route path='/article' element={<ArticlePage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                </Routes>
            </MemoryRouter>
        );
        const ArticlePageLink = screen.getByText('아티클');
        fireEvent.click(ArticlePageLink);
        const div = screen.getByText("추천 아티클 더 보기 >")
        expect(div).toBeInTheDocument();
    })
    // it('MapPage 이동 시, 잘 로딩되는가?', () => {
    //     render(
    //         <MemoryRouter initialEntries={['/']}>
    //             <Routes>
    //                 <Route path='/' element={<HomePage/>}/>
    //                 <Route path='/chat' element={<ChatPage/>}/>
    //                 <Route path='/article' element={<ArticlePage/>}/>
    //                 <Route path='/login' element={<LoginPage/>}/>
    //             </Routes>
    //         </MemoryRouter>
    //     );
    //     const MapPageLink = screen.getByText('지도');
    //     fireEvent.click(MapPageLink);
    //     const div = screen.getByText("지도")
    //     expect(div).toBeInTheDocument();
    // })
    it('LoginPage 이동 시, 잘 로딩되는가?', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/chat' element={<ChatPage/>}/>
                    <Route path='/article' element={<ArticlePage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                </Routes>
            </MemoryRouter>
        );
        const LoginLink = screen.getByText('로그인');
        fireEvent.click(LoginLink);
        const div = screen.getByText("아이디")
        expect(div).toBeInTheDocument();
    })
    // it('SignUpPage 이동 시, 잘 로딩되는가?', () => {
    //     render(
    //         <BrowserRouter>
    //             <NavBar />
    //         </BrowserRouter>
    //     );
    //     const SignUpLink = screen.getByText('회원가입');
    //     fireEvent.click(SignUpLink);
    //     const div = screen.getByText("회원가입")
    //     expect(div).toBeInTheDocument();
    // })
})