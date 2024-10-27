import { useNavigate, useParams } from 'react-router-dom';
import styles from './ArticleDetail.module.scss';
import { useEffect, useState } from 'react';
import { callGetArticle, callGetSimilarArticles, callUpdateUserPreference } from '../services/ArticleAPI';
import ArticleItem, { ArticleItemProps } from '../components/article/ArticleItem';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export function ArticleDetail() {
    const userName = localStorage.getItem('id')!
    const [isLogin, setIsLogin] = useState(userName!=null)
    const articleParam = useParams().articleId!;
    const [articleId, setArticleId] = useState(articleParam)
    const [title, setTitle] = useState('test title')
    const [content, setContent] = useState('test content')
    const [url, setUrl] = useState('test url')
    const [otherArticles, setOtherArticles] = useState<ArticleItemProps[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        callGetArticle({ articleId })
            .then((data) => {
                console.log('article info')
                console.log(data)
                setContent(data.article.content)
                setUrl(data.article.url)
            })
            .catch((err) => {
                console.log(err)
            })

        callUpdateUserPreference({ userName, articleId })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })

        callGetSimilarArticles({ articleId })
            .then((data) => {
                console.log('similar article')
                console.log(data.articles)
                const articles = data.articles.map((article: { id: string; content: string; url: string; }) => {
                    return {
                        articleId: article.id,
                        width: 500,
                        height: 300,
                        title: 'test title',
                        body: article.content,
                        url: article.url,
                        onClick: handleClick
                    }
                })
                setOtherArticles(articles)
                console.log(otherArticles)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [articleId])

    const handleClick = (articleId: string) => {
        setArticleId(articleId)
        navigate('/article/' + articleId)
    }

    return (

        <div className={styles['article-detail']}>
            <NavBar isLogin={isLogin} setIsLogin={setIsLogin} page={'article'} />
            <div className={styles['article-content-wrapper']}>
                <div className={styles['title']}>test title1</div>
                <div className={styles['content']}>{content}</div>
                <div className={styles['url']}>{url}</div>
            </div>
            <div className={styles['other-articles-wrapper']}>
                <div className={styles['other-articles-title']}>다른 아티클 보러가기</div>
                <div className={styles['other-articles-item-list']}>
                    {
                        otherArticles.map((article) => {
                            return <ArticleItem
                                articleId={article.articleId}
                                width={article.width}
                                height={article.height}
                                title={article.title}
                                body={article.body}
                                url={article.url}
                                onClick={handleClick}>
                            </ArticleItem>
                        })
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}