import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { teams } from "../components/TeamFilter";
import { useTeamInfo } from "../context/TeamInfoContext";
import styles from './teams.module.css';
import leftImg from '../asset/left.png';
import rightImg from '../asset/right.png';

const Teams = () => {
    const { teamDetails } = useTeamInfo();
    const [selectedTeamId, setSelectedTeamId] = useState("doosan");
    const selectedTeamData = teamDetails[selectedTeamId];
    const [showFilter, setShowFilter] = useState(true);

    const selectedTeam = teams.find(team => team.id === selectedTeamId);

    return (
        <Layout>
            <section className={styles.container}>
                <div className={`${styles.filter} ${showFilter ? styles.show : styles.hide}`}>
                    <div className={styles.toggleBtn} onClick={() => setShowFilter(!showFilter)} >
                        <img src="" alt="" />
                    </div>
                    <h4>구단 소개</h4>
                    <ul className={styles.teamList}>
                        {teams.map(team => (
                            <li
                                key={team.id}
                                onClick={() => setSelectedTeamId(team.id)}
                                className={`${styles.teamButton} ${selectedTeamId === team.id ? styles.active : ''}`}
                            >
                                {team.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.detail}>
                    {selectedTeamData ? (
                        <>
                            <div className={`${styles.main} ${styles[selectedTeamId]}`}>
                                <div className={styles.left}>
                                    <img src={leftImg} alt="left arrow" />
                                    <img src={selectedTeamData.images.logo} alt={selectedTeamData.name} />
                                    <img src={rightImg} alt="right arrow" />
                                </div>
                                <div className={styles.right}>
                                    <h2>{selectedTeamData.name} <span>({selectedTeamData.engName})</span></h2>
                                    <p>{selectedTeamData.description}</p>
                                    <div className={styles.bot}>
                                        <p><span>창단 연도</span>{selectedTeamData.founded}</p>
                                        <p><span>연고지</span>{selectedTeamData.location}</p>
                                        <p><span>우승횟수</span>{selectedTeamData.wins}</p>
                                        <p><span>홈구장</span>{selectedTeamData.stadium}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.sec}>
                                <h4>CI & 마스코트</h4>
                                <p>{selectedTeamData.mascotSubTitle}</p>
                                <div className={styles.itemWrap}>
                                    <div className={styles.item}>
                                        <h5>심볼마크</h5>
                                        <p>{selectedTeamData.name}의 심볼마크는<br />{selectedTeamData.symbol}</p>
                                        <div className={styles.imgWrap}>
                                            <img src="" alt="" />
                                            <img src="" alt="" />
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                    <div className={styles.item}>
                                        <h5>워드마크</h5>
                                        <p>{selectedTeamData.name}의 워드마크는<br />{selectedTeamData.word}</p>
                                        <div className={styles.imgWrap}>
                                            <img src="" alt="" />
                                            <img src="" alt="" />
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                    <div className={styles.item}>
                                        <h5>{selectedTeamData.mascot}</h5>
                                        <p>{selectedTeamData.mascotInfo}</p>
                                        <div className={styles.imgWrap}>
                                            <img src="" alt="" />
                                            <img src="" alt="" />
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.sec}>
                                <h4>{selectedTeamData.name} 응원단</h4>
                                <p>{selectedTeamData.cheerInfo}</p>
                                <div className={styles.itemWrap}>
                                    <div className={styles.item}>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.itemWrapL}>
                                <div className={styles.itemI}>
                                    <img src={selectedTeamData.images.stadium} alt={selectedTeamData.stadiumName} />
                                </div>
                                <div className={styles.itemL}>
                                    <h5>{selectedTeamData.stadiumName}</h5>
                                    <p>{selectedTeamData.stadiumNameInfo}</p>
                                    <img src="" alt="" />
                                    <div className={styles.visit}>
                                        티켓 예매하기
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>팀을 선택해주세요.</p>
                    )}
                </div>
            </section>
        </Layout>
    );
}

export default Teams;