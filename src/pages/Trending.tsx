import { useEffect, useState } from "react";
import { Goods } from "../types";
import GoodsCard from "../components/GoodsCard";
import Layout from "../components/Layout";
import TeamFilter from '../components/TeamFilter';
import styles from './CardListLayout.module.css';

const Trending = () => {
    const [goodsList, setGoodsList] = useState<Goods[]>([]);
    const [likedIds, setLikedIds] = useState<string[]>([]);
    const [selectedTeams, setSelectedTeams] = useState<string[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('goodsList');
        const liked = localStorage.getItem('likes');

        if (stored) {
            const list: Goods[] = JSON.parse(stored);
            setGoodsList([...list].sort((a, b) => b.likes - a.likes));
        }
        if (liked) {
            setLikedIds(JSON.parse(liked));
        }
    }, []);

    const handleToggleTeam = (teamId: string) => {
        setSelectedTeams(prev =>
            prev.includes(teamId)
                ? prev.filter(id => id !== teamId)
                : [...prev, teamId]
        );
    };

    const filteredList = goodsList.filter(item => {
        if (selectedTeams.length === 0) return true;
        return selectedTeams.includes(item.team); // item.team이 팀 id여야 합니다.
    });

    return (
        <Layout>
            <h2 style={{ marginBlock: '20px' }}>인기 굿즈 순</h2>
            <div className={styles.listWrap}>
                <div className={styles.list}>
                    {filteredList.map((item) => (
                        <GoodsCard
                            key={item.id}
                            item={item}
                            likedIds={likedIds}
                            setLikedIds={setLikedIds}
                            goodsList={goodsList}
                            setGoodsList={setGoodsList}
                        />
                    ))}
                </div>
                <TeamFilter selectedTeams={selectedTeams} onToggleTeam={handleToggleTeam} />
            </div>
        </Layout>
    );
}

export default Trending;