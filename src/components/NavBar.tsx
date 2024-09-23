import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import logo from '../assets/logo.png';

export default function NavBar() {
    return (
        <div className={styles['nav-bar']}>
            <img className={styles['logo']} src={logo} />
            <div className={styles['nav-list']}>
                <div className={styles['page-item']}>
                    <ul>
                        <li>
                            <Link to='/chat'>
                                챗봇
                            </Link>
                        </li>
                        <li>
                            <Link to='/article'>
                                아티클
                            </Link>
                        </li>
                        <li>
                            <Link to='/map'>
                                지도
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles['login-item']}>
                    <Link to='/login'>
                        로그인
                    </Link>
                    <div className={styles['separator']}>
                        |
                    </div>
                    <Link to='/login'>
                        회원가입
                    </Link>
                </div>
            </div>
        </div>
    )
}