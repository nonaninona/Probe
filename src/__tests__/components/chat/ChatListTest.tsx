import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
// import LastChatBox from '../../../components/chat/LastChatBox';

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
        content : '123123'
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
        const user = screen.getByText('user');
        expect(user).toBeInTheDocument();
    })
})