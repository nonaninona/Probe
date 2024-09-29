import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChatList from '../../../components/chat/ChatList';

const chatList = [
    {
        side : 'user',
        content : '123123'
    },
    {
        side : 'probee',
        content : '123123'
    },
    {
        side : 'user',
        content : '123123123'
    },
    {
        side : 'probee',
        content : '123123'
    },
    {
        side : 'user',
        content : '123123'
    },
    {
        side : 'probee',
        content : '123123'
    }
]

describe('ChatList render', () => {
    it('채팅이 잘 그려지는가?', () => {
        render(<ChatList items={chatList}/>);
        const content = screen.getByText('123123123');
        expect(content).toBeInTheDocument();
    })
})