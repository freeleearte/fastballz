import { NavLink } from 'react-router-dom';
import '../App.css';
import Nav from './Nav';
import youtubeImg from '../asset/youtube.png';
import facebookImg from '../asset/facebook.png';
import twitterImg from '../asset/twitter.png';
import instagramImg from '../asset/instagram.png';
import linkedinImg from '../asset/linkedin.png';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='layout'>
            <header>
                <Nav />
            </header>
            <div className="placeholder"></div>
            <main>
                {children}
            </main>
            <footer>
                <div className='inner'>
                    <ul className='f_top'>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/community">
                                Community
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/news">
                                NEWS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/teams">
                                Teams
                            </NavLink>
                        </li>
                    </ul>
                    <ul className='f_bot'>
                        <li><img src={youtubeImg} alt="유튜브" /></li>
                        <li><img src={facebookImg} alt="페이스북" /></li>
                        <li><img src={twitterImg} alt="트위터" /></li>
                        <li><img src={instagramImg} alt="인스타그램" /></li>
                        <li><img src={linkedinImg} alt="링크드인" /></li>
                    </ul>
                    <p>ⓒ 2025 Fastballz. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout;