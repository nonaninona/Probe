// 클릭 시 라우터를 통해 이동한 걸 테스트 할 수 있나? screen.getText 이런 걸로.... 하면 그런데 현재 있는 더미 텍스트를 변경하면 터지겠군
// 테스트 케이스 1 -> 최초에 App.tsx가 렌더링 되면, HomePage가 잘 뜨는가?

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom'
import App from '../../App';

describe('페이지 routing 테스트', () => {
    it('App 컴포넌트 로딩 시, MainPage가 로딩되는가?', () => {
        render(<BrowserRouter><App/></BrowserRouter>);
        const div = screen.getByText("홈");
        expect(div).toBeInTheDocument();
    })
})