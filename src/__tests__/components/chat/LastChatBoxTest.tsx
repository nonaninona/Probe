import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LastChatBox from '../../../components/chat/LastChatBox';

describe('ChatbotPrompt render', () => {
    it('제목이 잘 그려지는가?', () => {
        render(<LastChatBox chatRoomId={1} title={"테스트 제목"} date={'3일전'}/>);
        const title = screen.getByText('테스트 제목');
        expect(title).toBeInTheDocument();
    })
})