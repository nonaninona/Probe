import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import RecommendArticleList from '../../../components/article/RecommendArticleList';

const articleItems = [
    {
        articleId : 1,
        width : 500,
        height : 500,
        title : 'test title1',
        body : 'test body1'
    },
    {
        articleId : 2,
        width : 500,
        height : 500,
        title : 'test title2',
        body : 'test body2'
    },
    {
        articleId : 3,
        width : 500,
        height : 500,
        title : 'test title3',
        body : 'test body3'
    }
]

describe('RecommendArticleList render', () => {
    it('제목이 잘 그려지는가?', () => {
        render(
            <MemoryRouter initialEntries={['/article']}>
                <Routes>
                    <Route path='/article' element={<RecommendArticleList items={articleItems}/>}/>
                    <Route path='/articledetail' element={<div>아티클 상세</div>}/>
                </Routes>
            </MemoryRouter>
        );
        const title = screen.getByText('추천 아티클');
        expect(title).toBeInTheDocument();
    })
})

describe('RecommendArticleList 기능', () => {
    it('아티클 상세로 이동하는가?', () => {
        render(
            <MemoryRouter initialEntries={['/article']}>
                <Routes>
                    <Route path='/article' element={<RecommendArticleList items={articleItems}/>}/>
                    <Route path='/articledetail' element={<div>아티클 상세</div>}/>
                </Routes>
            </MemoryRouter>
        );

        const title = screen.getByText('test title1');
        fireEvent.click(title)

        const articleDetailText = screen.getByText('아티클 상세')

        expect(articleDetailText).toBeInTheDocument();
    })
    it('추천 아티클 더 보기로 이동하는가?', () => {
        render(
            <MemoryRouter initialEntries={['/article']}>
                <Routes>
                    <Route path='/article' element={<RecommendArticleList items={articleItems}/>}/>
                    <Route path='/articlelist' element={<div>아티클 상세</div>}/>
                </Routes>
            </MemoryRouter>
        );

        const more = screen.getByText('추천 아티클 더 보기 >');
        fireEvent.click(more)

        const articleLists = screen.getByText('아티클 상세')

        expect(articleLists).toBeInTheDocument();
    })
})