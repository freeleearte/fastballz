import { NavLink } from "react-router-dom";
import { useState } from 'react';
import styles from './Nav.module.css';
import logoImg from '../asset/logo.png';

const Nav = () => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        // 여기에 검색 로직을 작성 (예: 검색어를 기반으로 리스트 필터링)
        console.log('검색어:', query);
    };

    return (
        <nav className={`${styles.nav} inner`}>
            <h1 className={styles.logo}>
                <NavLink to="/">
                    <img src={logoImg} alt="패스트볼즈" />
                </NavLink>
            </h1>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder=""
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={styles.searchInput}
                />
            </div>
            <ul className={styles.menu}>
                <li>
                    <NavLink to="/community" className={({ isActive }) => (isActive ? styles.active : '')}>
                        community
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/news" className={({ isActive }) => (isActive ? styles.active : '')}>
                        NEWS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/teams" className={({ isActive }) => (isActive ? styles.active : '')}>
                        TEAMS
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;