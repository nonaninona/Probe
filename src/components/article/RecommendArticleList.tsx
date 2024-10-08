import styles from './RecommendArticleList.module.scss';
import ArticleItem, { ArticleItemProps } from './ArticleItem';
import { useNavigate } from 'react-router-dom';

interface RecommendArticleListProps {
    items: ArticleItemProps[]
}

export default function RecommendArticleList(props: RecommendArticleListProps) {
    const navigate = useNavigate();


    const handleArticleItemClick = (articleId: number) => {
        navigate('/article/'+articleId)
    }

    const handleMoreArticleClick = () => {
        navigate('/articles')
    }


    return (
        <div className={styles['recommend-article-list']}>
            <div className={styles['content-wrapper']}>
                <div className={styles['title']}>추천 아티클</div>
                <div className={styles['article-wrapper']}>
                    {
                        props.items.map((item) => {
                            return <div key={item.articleId} className={styles['article-item']}>
                                <ArticleItem articleId={item.articleId} onClick={handleArticleItemClick} width={item.width} height={item.height} title={item.title} body={item.body} />
                            </div>
                        })
                    }
                </div>
                <div onClick={handleMoreArticleClick} className={styles['more-article-button']}>추천 아티클 더 보기 {'>'}</div>
            </div>
        </div>
    )
}