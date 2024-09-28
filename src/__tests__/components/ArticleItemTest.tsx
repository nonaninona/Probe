import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticleItem from '../../components/ArticleItem';

describe('ArticleItem render', () => {
    it('제목이 잘 그려지는가?', () => {
        render(<ArticleItem width={500} height={500} title={'title'} body={'body'}/>);
        const titleText = screen.getByText('title');
        expect(titleText).toBeInTheDocument();
    })
    it('내용이 잘 그려지는가?', () => {
        render(<ArticleItem width={500} height={500} title={'title'} body={'body'}/>);
        const bodyText = screen.getByText('body');
        expect(bodyText).toBeInTheDocument();
    })
})