import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChatbotPrompt from '../../components/ChatbotPrompt';

describe('ChatbotPrompt render', () => {
    it('전송버튼이 잘 그려지는가?', () => {
        render(<ChatbotPrompt/>);
        const button = screen.getByAltText('전송버튼');
        expect(button).toBeInTheDocument();
    })
    it('placeholder가 잘 그려지는가?', () => {
        render(<ChatbotPrompt/>);
        const textForm = screen.getByPlaceholderText('프로비에게 부동산 물어보기 ex) 정비사업 종류에는 뭐가 있어?');
        expect(textForm).toBeInTheDocument();
    })
})

// describe('Chatbot query 질의 기능 테스트', () => {
//     it('입력한 query가 없으면 질의를 던지지 않는가?', () => {
//         render(<ChatbotPrompt/>);
//         const button = screen.getByRole('전송');
//         const textForm = screen.getByPlaceholderText('프로비에게 부동산 물어보기 ex) 정비사업 종류에는 뭐가 있어?');

//         expect(textForm) // 빈 값임을 assert
//         expect(button).toBeDisabled();

//         //mock을 써서 검색함수가 호출되지 않았음을 확인하려면 component가 해당 함수를 입력으로 받아야 하는디...
//         //아직 컴포넌트 디자인이 안되서 잘 모르겠는데??

        
//         // textForm = text form 가져오기
//         // btn = button 가져오기
//         // textForm.value = "" 일때, btn이 disable인지 확인하기
//         // textForm.value != "" 일때, textForm에 엔터 이벤트가 발생하면 함수가 실행되지 않는지 확인하기?

//     })
//     it('입력한 query가 있지만, 로그인 상태가 아니라면, 로그인 안내 창이 뜨는가?', () => {
//         // 로그인 고려는 나중에
//         render(<ChatbotPrompt/>);
//         const button = screen.getByRole('전송');
//         const textForm = screen.getByPlaceholderText('프로비에게 부동산 물어보기 ex) 정비사업 종류에는 뭐가 있어?');

//         expect(textForm) // 빈 값임을 assert
//         expect(button).toBeDisabled();

//         // textForm = text form 가져오기
//         // btn = button 가져오기
//         // textForm.value = "" 일때, btn이 잘 눌리는 지 확인하기
//         // textForm.value = "" 일때, textForm에 엔터 이벤트가 발생하면 함수가 실행되는지 확인하기?
//     })
//     it('입력한 query가 있고, 로그인 상태가 맞다면, 질의를 잘 던지며 화면이 잘 이동하는가?', () => {
//         // 로그인 고려는 나중에
//         render(<ChatbotPrompt/>);
//         const button = screen.getByRole('전송');
//         const textForm = screen.getByPlaceholderText('프로비에게 부동산 물어보기 ex) 정비사업 종류에는 뭐가 있어?');

//         expect(textForm) // 빈 값임을 assert
//         expect(button).toBeDisabled();

//         // textForm = text form 가져오기
//         // btn = button 가져오기
//         // textForm.value = "" 일때, btn이 잘 눌리는 지 확인하기
//         // textForm.value = "" 일때, textForm에 엔터 이벤트가 발생하면 함수가 실행되는지 확인하기?
//     })
// })