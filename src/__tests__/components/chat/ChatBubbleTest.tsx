import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChatBubble from '../../../components/chat/ChatBubble';

describe('ChatBubble render', () => {
    it('내용이 잘 그려지는가?', () => {
        render(<ChatBubble side={'user'} content={'what is the number?'}/>);
        const title = screen.getByText('what is the number?');
        expect(title).toBeInTheDocument();
    })
})