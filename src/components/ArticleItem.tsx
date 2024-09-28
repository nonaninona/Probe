import styles from './ArticleItem.module.scss';

interface ArticleItemProp {
    width: number,
    height: number,
    title: string,
    body: string
}

export default function ArticleItem(prop : ArticleItemProp) {
    return (
        <div style={ {width : prop.width, height : prop.height}} className={styles['article-item']}>
            <div className={styles['content-wrapper']}>
                <div className={styles['title']}>
                    왕초보를 위한 어쩌고
                </div>
                <div className={styles['body']}>
                    정비사업이라는 말을 들어본 적 있는가?

                    아마 익숙치 않은 사람들이 많을 것이다.

                    하지만 재개발, 이라는 단어는 모두에게 익숙할 것이다.

                    정비사업은 노후된 도시 지역을 새롭게 정비하여 주거 환경...
                </div>
            </div>
        </div>
    )
}