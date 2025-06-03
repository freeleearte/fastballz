import React from 'react';
import styles from './MatchCard.module.css';

type MatchData = {
    id: number;
    place?: string;
    time?: string;
    tv?: string;
    leftImgSrc?: string;
    leftTeam?: string;
    leftLabel?: string;
    rightImgSrc?: string;
    rightTeam?: string;
    rightLabel?: string;
};

const MatchCard: React.FC<MatchData> = ({
    place = '',
    time = '',
    tv = '',
    leftImgSrc = '',
    leftTeam = '',
    leftLabel = '',
    rightImgSrc = '',
    rightTeam = '',
    rightLabel = '',
}) => {
    return (
        <li className={styles.card}>
            <div className={styles.title}>
                <p>{place}</p>
                <p>{time}</p>
            </div>
            <b>{tv}</b>
            <div className={styles.info}>
                <span>경기예정</span>
            </div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <img src={leftImgSrc} alt={leftTeam} />
                    <em><i>선</i>{leftLabel}</em>
                </div>
                <i>VS</i>
                <div className={styles.right}>
                    <img src={rightImgSrc} alt={rightTeam} />
                    <em><i>선</i>{rightLabel}</em>
                </div>
            </div>
        </li>
    );
};

export default MatchCard;
