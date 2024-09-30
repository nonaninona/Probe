import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import RecommendArticleList from '../components/article/RecommendArticleList';
import styles from './ArticlePage.module.scss';

export function ArticlePage() {

    const callGetAPI = () => {

    }

    const dummyItems = [
        {
            articleId : 1,
            width : 580,
            height : 478,
            title : 'test title1',
            body : 'test body1'
        },
        {
            articleId : 2,
            width : 580,
            height : 228,
            title : 'test title2',
            body : 'test body2'
        },
        {
            articleId : 3,
            width : 580,
            height : 228    ,
            title : 'test title3',
            body : 'test body3'
        }
    ]

    return (
        <div className={styles['article-page']}>
            <NavBar />
            <RecommendArticleList items={dummyItems}/>
            <Footer/>
        </div>
    )
}