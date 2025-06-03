import React from 'react';
import MatchCard from './MatchCard';
import styles from './MatchCard.module.css';

const MatchList: React.FC = () => {
    const matchData = [
        {
            id: 1,
            place: '잠실',
            time: '14:00',
            tv: 'KN-T',
            leftImgSrc: '/images/teamA.png',
            leftTeam: '한화',
            leftLabel: '임찬규',
            rightImgSrc: '/images/teamB.png',
            rightTeam: 'LG',
            rightLabel: '황준서',
        },
        {
            id: 2,
            place: '잠실',
            time: '14:00',
            tv: 'KN-T',
            leftImgSrc: '/images/teamA.png',
            leftTeam: '한화',
            leftLabel: '임찬규',
            rightImgSrc: '/images/teamB.png',
            rightTeam: 'LG',
            rightLabel: '황준서',
        },
        {
            id: 3,
            place: '잠실',
            time: '14:00',
            tv: 'KN-T',
            leftImgSrc: '/images/teamA.png',
            leftTeam: '한화',
            leftLabel: '임찬규',
            rightImgSrc: '/images/teamB.png',
            rightTeam: 'LG',
            rightLabel: '황준서',
        },
        {
            id: 4,
            place: '잠실',
            time: '14:00',
            tv: 'KN-T',
            leftImgSrc: '/images/teamA.png',
            leftTeam: '한화',
            leftLabel: '임찬규',
            rightImgSrc: '/images/teamB.png',
            rightTeam: 'LG',
            rightLabel: '황준서',
        },
        {
            id: 5,
            place: '잠실',
            time: '14:00',
            tv: 'KN-T',
            leftImgSrc: '/images/teamA.png',
            leftTeam: '한화',
            leftLabel: '임찬규',
            rightImgSrc: '/images/teamB.png',
            rightTeam: 'LG',
            rightLabel: '황준서',
        },
    ];

    return (
        <ul className={styles.card_list}>
            {matchData.map((match) => (
                <MatchCard key={match.id} {...match} />
            ))}
        </ul>
    );
};

export default MatchList;
