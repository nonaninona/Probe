import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewChatButton from '../../../components/chat/NewChatButton';

describe('NewChatButton render', () => {
    it('제목이 잘 그려지는가?', () => {
        render(<NewChatButton userName='asd' />);
        const title = screen.getByText('새 채팅');
        expect(title).toBeInTheDocument();
    })
})