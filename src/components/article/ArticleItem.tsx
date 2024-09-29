import styles from './ArticleItem.module.scss';

export interface ArticleItemProps {
    articleId: number,
    width: number,
    height: number,
    title: string,
    body: string,
    onClick? : Function
}

export default function ArticleItem(props : ArticleItemProps) {
    
    const handleClick = () => {
        console.log(props.articleId)
        props.onClick!(props.articleId);
    }
    
    return (
        <div onClick={handleClick} style={ {width : props.width, height : props.height}} className={styles['article-item']}>
            <div className={styles['content-wrapper']}>
                <div className={styles['title']}>
                    {props.title}
                </div>
                <div className={styles['body']}>
                    {props.body}
                </div>
            </div>
        </div>
    )
}