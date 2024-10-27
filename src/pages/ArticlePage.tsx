import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import RecommendArticleList from '../components/article/RecommendArticleList';
import styles from './ArticlePage.module.scss';
import { callGetRecommendedArticles } from '../services/ArticleAPI'
import { ArticleItemProps } from '../components/article/ArticleItem';

export function ArticlePage() {

    const [recommendedArticles, setRecommendedArticles] = useState<ArticleItemProps[]>
        ([
            {
                articleId: 1,
                width: 580,
                height: 478,
                title: 'test title1',
                url: 'testUrl1',
                body: 'test body1'
            },
            {
                articleId: 2,
                width: 580,
                height: 228,
                title: 'test title2',
                url: 'testUrl2',
                body: 'test body2'
            },
            {
                articleId: 3,
                width: 580,
                height: 228,
                title: 'test title3',
                url: 'testUrl3',
                body: 'test body3'
            }
        ]);

    useEffect(() => {
        const userName = localStorage.getItem('id')!

        callGetRecommendedArticles({ userName })
            .then((data) => {
                console.log(data)
                const articles = recommendedArticles.slice(0, data.articles.length)
                console.log(articles)
                for (let i = 0; i < articles.length; i++) {
                    articles[i].articleId = data.articles[i].id
                    articles[i].body = data.articles[i].content
                    articles[i].url = data.articles[i].url
                }
                console.log(articles)
                setRecommendedArticles(articles)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className={styles['article-page']}>
            <NavBar />
            <RecommendArticleList items={recommendedArticles} />
            <Footer />
        </div>
    )
}