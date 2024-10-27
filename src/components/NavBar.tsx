import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import logo from '../assets/logo.png';

export interface NavBarProps {
    isLogin: boolean,
    setIsLogin: Function,
    page: string
}

export default function NavBar(props: NavBarProps) {
    const handleClick = () => {
        localStorage.removeItem('id')
        localStorage.removeItem('JWT')
        props.setIsLogin(false)
    }

    return (
        <div className={styles['nav-bar']}>
            <div className={styles['item-container']}>
                <Link to='/'>
                    <img className={styles['logo']} src={logo} alt='로고' />
                </Link>
                <div className={styles['nav-list']}>
                    <div className={styles['page-item']}>
                        <ul>
                            <li className={props.page == 'chat' ? styles['current-page'] : ''}>
                                <Link to='/chat'>
                                    챗봇
                                </Link>
                            </li>
                            <li className={props.page == 'article' ? styles['current-page'] : ''}>
                                <Link to='/article'>
                                    아티클
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {props.isLogin ?
                        <div onClick={handleClick} className={styles['login-item']}>
                            로그아웃
                        </div>
                        :
                        <div className={styles['login-item']}>
                            <Link to='/login'>
                                로그인
                            </Link>
                            <div className={styles['separator']}>
                                |
                            </div>
                            <Link to='/signup'>
                                회원가입
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}