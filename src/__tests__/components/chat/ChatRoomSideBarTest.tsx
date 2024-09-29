import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChatRoomSideBar from '../../../components/chat/ChatRoomSideBar';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const recentChatItems = [
    {
        chatRoomId : 1,
        title : 'test title 1'
    },
    {
        chatRoomId : 2,
        title : 'test title 2'
    },
    {
        chatRoomId : 3,
        title : 'test title 3'
    },
    {
        chatRoomId : 4,
        title : 'test title 4'
    }
]

describe('ChatRoomSideBar render', () => {
    it('버튼이 잘 그려지는가?', () => {
        render(
            <MemoryRouter initialEntries={['/chatroom/0']}>
                <Routes>
                    <Route path='/chatroom/:id' element={<ChatRoomSideBar userName={'testName'} items={recentChatItems}/>}/>
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
                    <Route path='/chatroom/:id' element={<ChatRoomSideBar userName={'testName'} items={recentChatItems}/>}/>
                </Routes>
            </MemoryRouter>
        );
        const btn = screen.getByText('test title 1');
        expect(btn).toBeInTheDocument();
    })
})