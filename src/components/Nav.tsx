import { NavLink } from "react-router-dom";
import styles from './Nav.module.css';
import logoImg from '../asset/logo.png';

const Nav = () => {
    return (
        <nav className={`${styles.nav} inner`}>
            <h1 className={styles.logo}>
                <NavLink to="/">
                    <img src={logoImg} alt="패스트볼즈" />
                </NavLink>
            </h1>
            <ul className={styles.menu}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/community" className={({ isActive }) => (isActive ? styles.active : '')}>
                        커뮤니티
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/trending" className={({ isActive }) => (isActive ? styles.active : '')}>
                        인기
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/teams" className={({ isActive }) => (isActive ? styles.active : '')}>
                        구단소개
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;