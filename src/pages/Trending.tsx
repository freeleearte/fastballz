import { useEffect, useState } from "react";
import { Goods } from "../types";
import GoodsCard from "../components/GoodsCard";
import Layout from "../components/Layout";
import styles from './CardListLayout.module.css';
import checkboxImg from '../asset/checkbox.png';

const Trending = () => {
    const [goodsList, setGoodsList] = useState<Goods[]>([]);
    const [likedIds, setLikedIds] = useState<string[]>([]);

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

    return (
        <Layout>
            <h2 style={{ marginBlock: '20px' }}>인기 굿즈 순</h2>
            <div className={styles.listWrap}>
                <div className={styles.list}>
                    {goodsList.map((item) => (
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
                <div className={styles.filter}>
                    <div className={styles.top}>
                        <p>밴치 클리어링 모드</p>
                    </div>
                    <ul className={styles.bot}>
                        <li><img src={checkboxImg} alt="체크박스" />KIA</li>
                        <li><img src={checkboxImg} alt="체크박스" />두산</li>
                        <li><img src={checkboxImg} alt="체크박스" />KT</li>
                        <li><img src={checkboxImg} alt="체크박스" />LG</li>
                        <li><img src={checkboxImg} alt="체크박스" />한화</li>
                        <li><img src={checkboxImg} alt="체크박스" />롯데</li>
                        <li><img src={checkboxImg} alt="체크박스" />삼성</li>
                        <li><img src={checkboxImg} alt="체크박스" />SSG</li>
                        <li><img src={checkboxImg} alt="체크박스" />NC</li>
                        <li><img src={checkboxImg} alt="체크박스" />키움</li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
}

export default Trending;