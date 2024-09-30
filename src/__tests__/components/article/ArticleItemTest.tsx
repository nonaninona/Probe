import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticleItem from '../../../components/article/ArticleItem';

describe('ArticleItem render', () => {
    it('제목이 잘 그려지는가?', () => {
        render(<ArticleItem articleId={123} width={500} height={500} title={'title'} body={'body'}/>);
        const titleText = screen.getByText('title');
        expect(titleText).toBeInTheDocument();
    })
    it('내용이 잘 그려지는가?', () => {
        render(<ArticleItem articleId={123} width={500} height={500} title={'title'} body={'body'}/>);
        const bodyText = screen.getByText('body');
        expect(bodyText).toBeInTheDocument();
    })
})