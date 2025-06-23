import React, { useState } from 'react';
import styles from './TeamFilter.module.css';
import { useBadWordFilter } from '../context/BadWordFilterContext';
import filterOffImg from '../asset/filterbutton_off.png';
import filterOnImg from '../asset/filterbutton_on.png';
import checkboxImg from '../asset/checkbox.png';
import checkedImg from '../asset/checkbox_checked.png';
import hamImg from '../asset/ham.png';
import recentImg from '../asset/recent.png';
import trendingImg from '../asset/trending.png';
import teamsImg from '../asset/teams.png';
import uploadImg from '../asset/upload.png';
import { NavLink } from 'react-router-dom';

interface TeamFilterProps {
    selectedTeams: string[];
    onToggleTeam: (team: string) => void;
}

export const teams = [
    { id: 'kia', name: 'KIA 타이거즈' },
    { id: 'doosan', name: '두산 베어스' },
    { id: 'kt', name: 'KT 위즈' },
    { id: 'lg', name: 'LG 트윈스' },
    { id: 'hanwha', name: '한화 이글스' },
    { id: 'lotte', name: '롯데 자이언츠' },
    { id: 'samsung', name: '삼성 라이온즈' },
    { id: 'ssg', name: 'SSG 랜더스' },
    { id: 'nc', name: 'NC 다이노스' },
    { id: 'kiwoom', name: '키움 히어로즈' },
];

const TeamFilter: React.FC<TeamFilterProps> = ({ selectedTeams, onToggleTeam }) => {
    const { badWordFilterOn, toggleBadWordFilter } = useBadWordFilter();
    const [showFilter, setShowFilter] = useState(true);
    const [showTeamList, setShowTeamList] = useState(true);

    return (
        <div className={`${styles.filter} ${showFilter ? styles.show : styles.hide}`}>
            <div className={styles.toggleBtn} onClick={() => setShowFilter(!showFilter)} >
                <img src={hamImg} alt="메뉴 토글 버튼" />
            </div>
            <div className={styles.top}>
                <NavLink to={`/upload`}>
                    <img src={uploadImg} alt="업로드버튼" />
                    <p>Upload</p>
                </NavLink>
            </div>
            <div className={styles.mid}>
                <p><NavLink to={`/community`} className={({ isActive }) => (isActive ? styles.active : '')}><img src={recentImg} alt="최신 버튼" />최신</NavLink></p>
                <p><NavLink to={`/trending`} className={({ isActive }) => (isActive ? styles.active : '')}><img src={trendingImg} alt="인기 버튼" />인기</NavLink></p>
                <p onClick={() => setShowTeamList(!showTeamList)} className={styles.toggleTitle}>
                    <img src={teamsImg} alt="구단 별 이미지" />
                    구단 별
                </p>
                <ul className={`${styles.teamList} ${showTeamList ? styles.open : styles.closed}`}>
                    {teams.map((team) => (
                        <li
                            key={team.id}
                            onClick={() => onToggleTeam(team.id)}
                            className={selectedTeams.includes(team.id) ? styles.active : ''}
                        >
                            <img
                                src={selectedTeams.includes(team.id) ? checkedImg : checkboxImg}
                                alt="체크박스"
                            />
                            <span className={selectedTeams.includes(team.id) ? styles.activeText : ''}>
                                {team.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.bot}>
                <p>밴치 클리어링 모드</p>
                <img src={badWordFilterOn ? filterOnImg : filterOffImg} alt="욕설 필터링 모드" onClick={toggleBadWordFilter} />
            </div>
        </div>
    );
};

export default TeamFilter;
