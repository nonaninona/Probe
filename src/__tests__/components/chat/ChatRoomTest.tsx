import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
// import ChatRoomSideBar from '../../../components/chat/ChatRoomSideBar';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('ChatRoom render', () => {
    it('버튼이 잘 그려지는가?', () => {
        render(
            <MemoryRouter initialEntries={['/chatroom/0']}>
                <Routes>
                    <Route path='/chatroom/:id' element={<ChatRoom userName={'testName'}/>}/>
                </Routes>
            </MemoryRouter>
        );
        const btn = screen.getByText('새 채팅');
        expect(btn).toBeInTheDocument();
    })
    it('최근 대화가 잘 그려지는가?', () => {
        render(
            <MemoryRouter initialEntries={['/chatroom/0']}>
                <Routes>
                    <Route path='/chatroom/:id' element={<ChatRoom userName={'testName'}/>}/>
                </Routes>
            </MemoryRouter>
        );
        const btn = screen.getByText('test title 1');
        expect(btn).toBeInTheDocument();
    })
    it('대화가 잘 그려지는가?', () => {
        render(
            <MemoryRouter initialEntries={['/chatroom/0']}>
                <Routes>
                    <Route path='/chatroom/:id' element={<ChatRoom userName={'testName'}/>}/>
                </Routes>
            </MemoryRouter>
        );
        const chat = screen.getByText('123123123');
        expect(chat).toBeInTheDocument();
    })
})

describe('ChatRoom 화면 전환 기능 테스트', () => {
    it('다른 채팅방으로 잘 이동하는가?', () => {
        render(
            <MemoryRouter initialEntries={['/chatroom/0']}>
                <Routes>
                    <Route path='/chatroom/0' element={<ChatRoom userName={'testName'}/>}/>
                    <Route path='/chatroom/1' element={<div>1번 채팅방</div>}/>
                </Routes>
            </MemoryRouter>
        );
        const btn = screen.getByText('새 채팅');
        expect(btn).toBeInTheDocument();
    })
})

describe('ChatRoom 채팅 기능 테스트', () => {
    it('다른 채팅방으로 잘 이동하는가?', () => {
        render(
            <MemoryRouter initialEntries={['/chatroom/0']}>
                <Routes>
                    <Route path='/chatroom/:id' element={<ChatRoom userName={'testName'}/>}/>
                    <Route path='/chatroom/1' element={<div>1번 채팅방</div>}/>
                </Routes>
            </MemoryRouter>
        );

        const prompt = screen.getByAltText('프로비에게 부동산 물어보기 ex) 정비사업 종류에는 뭐가 있어?')
        const btn = screen.getByRole('button')
        
        fireEvent.change(prompt, { target : { value : 'asf' } })

        const probee = screen.getByText('probe-e')
        expect(probee).toBeInTheDocument();
    })
})