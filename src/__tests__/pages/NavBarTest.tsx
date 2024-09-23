import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../../components/NavBar';

describe('NavBar render', () => {
    it('로고가 잘 로딩되는가?', () => {
        render(<NavBar />);
        const logo = screen.getByAltText('로고');
        expect(logo).toBeInTheDocument();
    })
    it('챗봇 버튼이 잘 그려지는가?', () => {
        render(<NavBar />);
        const chatPageLink = screen.getByText('챗봇');
        expect(chatPageLink).toBeInTheDocument();
    })
    it('아티클 버튼이 잘 그려지는가?', () => {
        render(<NavBar />);
        const articlePageLink = screen.getByText('아티클');
        expect(articlePageLink).toBeInTheDocument();
    })
    it('지도 버튼이 잘 그려지는가?', () => {
        render(<NavBar />);
        const mapPageLink = screen.getByText('지도');
        expect(mapPageLink).toBeInTheDocument();
    })
    it('로그인 버튼이 잘 그려지는가?', () => {
        render(<NavBar />);
        const loginPageLink = screen.getByText('로그인');
        expect(loginPageLink).toBeInTheDocument();
    })
    it('회원가입 버튼이 잘 그려지는가?', () => {
        render(<NavBar />);
        const SignUpPageLink = screen.getByText('회원가입');
        expect(SignUpPageLink).toBeInTheDocument();
    })
})

describe('NavBar Link 테스트', () => {
    it('ChatPage로 이동 시, 잘 로딩되는가?', () => {
        render(<NavBar />);
        const chatPageLink = screen.getByText('챗봇');
        fireEvent.click(chatPageLink);
        const div = screen.getByText("챗봇")
        expect(div).toBeInTheDocument();
    })
    it('ArticlePage로 이동 시, 잘 로딩되는가?', () => {
        render(<NavBar />);
        const ArticlePageLink = screen.getByText('아티클');
        fireEvent.click(ArticlePageLink);
        const div = screen.getByText("아티클")
        expect(div).toBeInTheDocument();
    })
    it('MapPage 이동 시, 잘 로딩되는가?', () => {
        render(<NavBar />);
        const MapPageLink = screen.getByText('지도');
        fireEvent.click(MapPageLink);
        const div = screen.getByText("지도")
        expect(div).toBeInTheDocument();
    })
    it('LoginPage 이동 시, 잘 로딩되는가?', () => {
        render(<NavBar />);
        const LoginLink = screen.getByText('로그인');
        fireEvent.click(LoginLink);
        const div = screen.getByText("로그인")
        expect(div).toBeInTheDocument();
    })
    it('SignUpPage 이동 시, 잘 로딩되는가?', () => {
        render(<NavBar />);
        const SignUpLink = screen.getByText('회원가입');
        fireEvent.click(SignUpLink);
        const div = screen.getByText("회원가입")
        expect(div).toBeInTheDocument();
    })
})