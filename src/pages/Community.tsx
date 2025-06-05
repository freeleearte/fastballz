import { useEffect, useState } from "react";
import GoodsCard from "../components/GoodsCard";
import Layout from "../components/Layout";
import { useGoods } from "../context/GoodsContext";
import { useBadWordFilter } from "../context/BadWordFilterContext";
import styles from './CardListLayout.module.css'
import TeamFilter from "../components/TeamFilter";
import { Link } from "react-router-dom";

const Community = () => {
    // 굿즈 전체 리스트와 바꾸는 함수 (전역에서 관리)
    const { goodsList, setGoodsList } = useGoods();
    // 내가 찜한 굿즈 id 목록 (localstorage 기반)
    const [likedIds, setLikedIds] = useState<string[]>([]);
    // 찜한 것만 보기 버튼 눌렀을때
    const [showOnlyLiked, setShowOnlyLiked] = useState(false);
    const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
    const { badWordFilterOn, containsBadWords } = useBadWordFilter();

    useEffect(() => {
        const stored = localStorage.getItem('goodsList'); // 저장된 굿즈
        const liked = localStorage.getItem('likes');

        // 로컬 스토리지에 있으면 그걸 쓰고
        if (stored) setGoodsList(JSON.parse(stored));
        else {
            fetch('data/goods.json') //불러옴
                .then((res) => res.json()) //json 형식으로 바꾸기(자바스크립트 객체로 변환)
                .then((data) => {
                    setGoodsList(data); //가져온 데이터를 화면에 보여줄 상태에 저장
                    localStorage.setItem('goodsList', JSON.stringify(data));
                    //localstorage에도 똑같이 저장 = 새로고침해도 유지되게
                })
        }
        if (liked) setLikedIds(JSON.parse(liked));
    }, [setGoodsList])

    const toggleTeam = (team: string) => {
        setSelectedTeams((prev) =>
            prev.includes(team) ? prev.filter(t => t !== team) : [...prev, team]
        );
    };

    // 팀 필터링까지 반영된 굿즈 리스트
    const displayedList = goodsList.filter(item => {
        const matchesLike = !showOnlyLiked || likedIds.includes(item.id);
        const matchesTeam = selectedTeams.length === 0 || selectedTeams.includes(item.team);
        const passesBadWordFilter =
            !badWordFilterOn || (
                !containsBadWords(item.title) &&
                !containsBadWords(item.description)
            );
        return matchesLike && matchesTeam && passesBadWordFilter;
    });

    return (
        <Layout>
            {/* 상단 찜 갯수/필터 버튼 */}
            {/* <div className={styles.topBar}>
                <span className={styles.likeCount}>💖 찜한 굿즈: {likedIds.length}개</span>
                <button onClick={() => setShowOnlyLiked(!showOnlyLiked)} className={styles.filterButton}>
                    {showOnlyLiked ? '전체 보기' : '찜한 굿즈만 보기'}
                </button>
            </div> */}
            <div className={styles.topBar}>
                <Link to={`/upload`} className={styles.uploadButton}>
                    Upload
                </Link>
            </div>

            {/* 굿즈 카드 리스트 영역 */}
            <div className={styles.listWrap}>
                <div className={styles.list}>
                    {
                        displayedList.map((item) => (
                            <GoodsCard
                                key={item.id}
                                item={item}
                                likedIds={likedIds}
                                setLikedIds={setLikedIds}
                                goodsList={goodsList}
                                setGoodsList={setGoodsList}
                                className={styles.card}
                            />
                        ))
                    }
                </div>
                <TeamFilter selectedTeams={selectedTeams} onToggleTeam={toggleTeam} />
            </div>
        </Layout>
    );
}

export default Community;