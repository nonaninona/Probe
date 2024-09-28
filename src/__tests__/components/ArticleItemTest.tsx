import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticleItemTest from '../../components/ChatbotPrompt';

describe('ArticleItem render', () => {
    it('제목이 잘 그려지는가?', () => {
        render(<ArticleItem/>);
        const titleText = screen.getByText('title');
        expect(titleText).toBeInTheDocument();
    })
    it('내용이 잘 그려지는가?', () => {
        render(<ArticleItem/>);
        const bodyText = screen.getByText('body');
        expect(bodyText).toBeInTheDocument();
    })
})