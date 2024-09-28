import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ChatbotPrompt render', () => {
    it('제목이 잘 그려지는가?', () => {
        render(<LastChatBox title={"테스트 제목"}/>);
        const title = screen.getByText('테스트 제목');
        expect(title).toBeInTheDocument();
    })
})