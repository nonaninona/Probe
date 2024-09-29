import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ArticlePage } from '../../pages';

describe('ArticlePage 위치 이동 기능 테스트', () => {
    it('추천 아티클 선택 시, 아티클 상세 정보로 이동하는가?', () => {
        //given
        render(
            <MemoryRouter initialEntries={['/article']}>
                <Routes>
                    <Route path="/article" element={<ArticlePage />} />
                    <Route path="/article/:id" element={<div>아티클 상세</div>} />
                    <Route path="/articles" element={<div>아티클 목록</div>} />
                </Routes>
            </MemoryRouter>
        );

        const titleText = screen.getByText('test title 1');
        
        //when
        fireEvent.click(titleText)

        const articleDetailText = screen.getByText('아티클 상세')

        //then
        expect(articleDetailText).toBeInTheDocument();
    })
    it('아티클 더 보기 선택 시, 아티클 목록으로 이동하는가?', () => {
        //given
        render(
            <MemoryRouter initialEntries={['/article']}>
                <Routes>
                    <Route path="/article" element={<ArticlePage />} />
                    <Route path="/article/:id" element={<div>아티클 상세</div>} />
                    <Route path="/articles" element={<div>아티클 목록</div>} />
                </Routes>
            </MemoryRouter>
        );

        const more = screen.getByText('추천 아티클 더 보기 >');
        
        //when
        fireEvent.click(more)

        const articleListText = screen.getByText('아티클 목록')

        //then
        expect(articleListText).toBeInTheDocument();
    })
})