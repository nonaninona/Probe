import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChatbotPrompt from '../../components/ChatbotPrompt';

describe('ChatbotPrompt render', () => {
    it('전송버튼이 잘 그려지는가?', () => {
        render(<ChatbotPrompt/>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })
    it('placeholder가 잘 그려지는가?', () => {
        render(<ChatbotPrompt/>);
        const textForm = screen.getByPlaceholderText('프로비에게 부동산 물어보기 ex) 정비사업 종류에는 뭐가 있어?');
        expect(textForm).toBeInTheDocument();
    })
})