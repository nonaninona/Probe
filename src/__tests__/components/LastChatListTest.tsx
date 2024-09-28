import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LastChatList from '../../components/ChatRoom/LastChatList';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

const dummyItems = [
    {
        chatRoomId : 1,
        title : "test title 1",
        date : "1 days ago"
    },

    {
        chatRoomId : 2,
        title : "test title 2",
        date : "2 days ago"
    },

    {
        chatRoomId : 3,
        title : "test title 3",
        date : "3 days ago"
    },

    {
        chatRoomId : 4,
        title : "test title 4",
        date : "4 days ago"
    }
]

describe('LastChatList render', () => {
    it('제목이 잘 그려지는가?', () => {
        render(
            <MemoryRouter initialEntries={['/chatlist']}>
                <Routes>
                    <Route path='/chatlist' element={<LastChatList items={dummyItems}/>}/>
                    <Route path='/chatroom' element={<div>채팅방</div>}/>
                </Routes>
            </MemoryRouter>
        );
        const title = screen.getByText('test title 1');
        expect(title).toBeInTheDocument();
    })

    it('날짜가 잘 그려지는가?', () => {
        render(
            <MemoryRouter initialEntries={['/chatlist']}>
                <Routes>
                    <Route path='/chatlist' element={<LastChatList items={dummyItems}/>}/>
                    <Route path='/chatroom' element={<div>채팅방</div>}/>
                </Routes>
            </MemoryRouter>
        );
        const title = screen.getByText('1 days ago');
        expect(title).toBeInTheDocument();
    })
})

describe('LastChatList 기능', () => {
    it('최신 채팅방으로 이동이 잘 되는가?', () => {
        render(
            <MemoryRouter initialEntries={['/chatlist']}>
                <Routes>
                    <Route path='/chatlist' element={<LastChatList items={dummyItems}/>}/>
                    <Route path='/chatroom' element={<div>채팅방</div>}/>
                </Routes>
            </MemoryRouter>
        );

        // 채팅방 찾기
        const lastChatTitle = screen.getByText('test title 1');
        
        // 이동하기
        fireEvent.click(lastChatTitle);

        const chatRoomText = screen.getByText('채팅방');
        expect(chatRoomText).toBeInTheDocument();
    })
})