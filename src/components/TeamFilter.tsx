import React from 'react';
import styles from './TeamFilter.module.css';
import { useBadWordFilter } from '../context/BadWordFilterContext';
import filterOffImg from '../asset/filterbutton_off.png';
import filterOnImg from '../asset/filterbutton_on.png';
import checkboxImg from '../asset/checkbox.png';
import checkedImg from '../asset/checkbox_checked.png';

interface TeamFilterProps {
    selectedTeams: string[];
    onToggleTeam: (team: string) => void;
}

const teams = [
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
    return (
        <div className={styles.filter}>
            <div className={styles.top}>
                <p>밴치 클리어링 모드</p>
                <img src={badWordFilterOn ? filterOnImg : filterOffImg} alt="욕설 필터링 모드" onClick={toggleBadWordFilter} />
            </div>
            <ul className={styles.bot}>
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
    );
};

export default TeamFilter;
