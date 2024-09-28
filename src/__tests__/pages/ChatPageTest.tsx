import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ChatPage } from '../../pages';

describe('ChatPage 쿼리 기능 테스트', () => {
    it('입력한 query가 없으면 질의를 던지지 않는가?', () => {
        //given
        render(
            <MemoryRouter initialEntries={['/chat']}>
                <Routes>
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/newchat" element={<div>새로운 채팅방</div>} />
                    <Route path="/chatroom" element={<div>채팅방</div>} />
                </Routes>
            </MemoryRouter>
        );
        const button = screen.getByRole('button');
        const textForm = screen.getByPlaceholderText('프로비에게 부동산 물어보기 ex) 정비사업 종류에는 뭐가 있어?');

        //when

        //then
        expect(textForm).toHaveValue('');
        expect(button).toBeDisabled();

        // 입력한 쿼리가 있는지 확인
        // 입력한 쿼리가 없으면 버튼이 비활성화 상태인지 확인
        // 이건 완료한 듯

        //mock을 써서 검색함수가 호출되지 않았음을 확인하려면 component가 해당 함수를 입력으로 받아야 하는디...
        //아직 컴포넌트 디자인이 안되서 잘 모르겠는데??

        // textForm = text form 가져오기
        // btn = button 가져오기
        // textForm.value = "" 일때, btn이 disable인지 확인하기
        // textForm.value != "" 일때, textForm에 엔터 이벤트가 발생하면 함수가 실행되지 않는지 확인하기?

    })
    it('입력한 query가 있지만, 로그인 상태가 아니라면, 로그인 안내 창이 뜨는가?', () => {
        // 로그인 고려는 나중에
        //given
        render(
            <MemoryRouter initialEntries={['/chat']}>
                <Routes>
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/newchat" element={<div>새로운 채팅방</div>} />
                    <Route path="/chatroom" element={<div>채팅방</div>} />
                </Routes>
            </MemoryRouter>
        );
        const button = screen.getByRole('button');
        const textForm = screen.getByPlaceholderText('프로비에게 부동산 물어보기 ex) 정비사업 종류에는 뭐가 있어?');

        //when
        fireEvent.change(textForm, { target: { value: '테스트 입력' } })
        fireEvent.click(button)


        // 입력한 쿼리가 있는지 확인
        expect(textForm).toHaveValue('테스트 입력')

        // 로그인 했는지 확인
        // 쿠기를 가져와서 유효한 값인지 확인?

        // 로그인 안내창이 잘 뜨는 지 확인
        // screen에서 로그인 안내창 텍스트가 있는지 확인

        // textForm = text form 가져오기
        // btn = button 가져오기
        // textForm.value = "" 일때, btn이 잘 눌리는 지 확인하기
        // textForm.value = "" 일때, textForm에 엔터 이벤트가 발생하면 함수가 실행되는지 확인하기?
    })
    it('입력한 query가 있고, 로그인 상태가 맞다면, 질의를 잘 던지며 화면이 잘 이동하는가?', () => {
        // 로그인 고려는 나중에
        //given
        render(
            <MemoryRouter initialEntries={['/chat']}>
                <Routes>
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/newchat" element={<div>새로운 채팅방</div>} />
                    <Route path="/chatroom" element={<div>채팅방</div>} />
                </Routes>
            </MemoryRouter>
        );
        const button = screen.getByRole('button');
        const textForm = screen.getByPlaceholderText('프로비에게 부동산 물어보기 ex) 정비사업 종류에는 뭐가 있어?');

        //when
        fireEvent.change(textForm, { target: { value: '테스트 입력' } })
        fireEvent.click(button)


        // 입력한 쿼리가 있는지 확인
        expect(textForm).toHaveValue('테스트 입력')

        // 로그인 했는지 확인
        // 쿠기를 가져와서 유효한 값인지 확인?

        // 화면이 잘 이동했는 지 확인
        const chatText = screen.getByText('새로운 채팅방');
        expect(chatText).toBeInTheDocument();

        // textForm = text form 가져오기
        // btn = button 가져오기
        // textForm.value = "" 일때, btn이 잘 눌리는 지 확인하기
        // textForm.value = "" 일때, textForm에 엔터 이벤트가 발생하면 함수가 실행되는지 확인하기?
    })
})