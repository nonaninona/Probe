import styles from './Recommend.module.scss';
import ArticleItem, { ArticleItemProps } from './ArticleItem';

interface RecommendArticleListProps {
    items: ArticleItemProps[]
}

export default function RecommendArticleList(props: RecommendArticleListProps) {
    return (
        <div className={styles['recommend-article-list']}>
            <div className={styles['content-wrapper']}>
                <div className={styles['title']}>추천 아티클</div>
                <div className={styles['article-wrapper']}>
                    {
                        props.items.map((item) => {
                            return <div className={styles['article-item']}>
                                <ArticleItem width={item.width} height={item.height} title={item.title} body={item.body} />
                            </div>
                        })
                    }
                </div>
                <div className={styles['more-article-button']}>추천 아티클 더 보기 {'>'}</div>
            </div>
        </div>
    )
}