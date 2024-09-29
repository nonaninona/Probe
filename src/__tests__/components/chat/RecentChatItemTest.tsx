import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecentChatItem from '../../../components/chat/RecentChatItem';

describe('RecentChatItem render', () => {
    it('제목이 잘 그려지는가?', () => {
        render(<RecentChatItem title='test title' chatRoomId={1}/>);
        const title = screen.getByText('test title');
        expect(title).toBeInTheDocument();
    })
})