import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('NewChatButton render', () => {
    it('제목이 잘 그려지는가?', () => {
        render(<NewChatButton />);
        const title = screen.getByText('새 채팅');
        expect(title).toBeInTheDocument();
    })
})