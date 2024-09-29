import styles from './ArticleItem.module.scss';

export interface ArticleItemProps {
    width: number,
    height: number,
    title: string,
    body: string
}

export default function ArticleItem(props : ArticleItemProps) {
    return (
        <div style={ {width : props.width, height : props.height}} className={styles['article-item']}>
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