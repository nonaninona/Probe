import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('RecentChatItem render', () => {
    it('제목이 잘 그려지는가?', () => {
        render(<RecentChatItem title={}/>);
        const title = screen.getByText('test title1');
        expect(title).toBeInTheDocument();
    })
})