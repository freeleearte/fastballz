import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Goods } from "../types";
import GoodsCard from "../components/GoodsCard";
import { useGoods } from "../context/GoodsContext";
import styles from './form.module.css';
import Layout from "../components/Layout";

const Detail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [goods, setGoods] = useState<Goods | null>(null);
    const [inputPw, setInputPw] = useState('');
    const [pwMatched, setPwMatched] = useState(false); // 비밀번호 일치 여부
    const { goodsList, setGoodsList } = useGoods();
    const [likedIds, setLikedIds] = useState<string[]>([]);

    useEffect(() => {
        const storedGoods = localStorage.getItem('goodsList');
        if (storedGoods) {
            setGoodsList(JSON.parse(storedGoods));
        }

        const liked = localStorage.getItem('likes');
        if (liked) {
            setLikedIds(JSON.parse(liked));
        }
    }, []);

    const suggestedItems = goodsList
        // 현재 상세 페이지 제외
        .filter(item => item.id !== id)
        // 무작위 섞기
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    // 로컬 스토리지에서 굿즈 정보 불러오기
    useEffect(() => {
        const data = localStorage.getItem('goodsList');
        if (data) {
            const list: Goods[] = JSON.parse(data);
            const found = list.find((g) => g.id === id);
            if (found) setGoods(found);
        }
    }, [id]);

    // 비밀번호 확인
    const handleCheckPassword = () => {
        if (inputPw === goods?.password) {
            setPwMatched(true);
        } else {
            alert('비밀번호가 틀렸습니다');
        }
    }

    // 배열 형태의 localStorage에서 특정 ID를 제거하는 함수
    const removeIdFromStorageArray = (key: string, id: string) => {
        const data = localStorage.getItem(key);
        if (data) {
            const arr: string[] = JSON.parse(data);
            const updated = arr.filter(itemId => itemId !== id);
            localStorage.setItem(key, JSON.stringify(updated));
        }
    }

    // 삭제처리
    const handleDelete = () => {
        if (!goods) return;
        const data = localStorage.getItem('goodsList');
        if (data) {
            const list: Goods[] = JSON.parse(data);
            const updated = list.filter((g) => g.id !== goods.id);
            localStorage.setItem('goodsList', JSON.stringify(updated));
            // 좋아요 관련 키 모두 한번에 처리
            removeIdFromStorageArray('likedGoods', goods.id);
            removeIdFromStorageArray('likes', goods.id);
            navigate('/');
        }
    }

    return (
        <Layout>
            <div className={styles.wrap}>
                {
                    goods ? (
                        <div className={styles.goods}>
                            {/* 이미지가 있을 경우 미리 보기 */}
                            <div className={styles.previewWrap}>
                                {
                                    goods.imageUrl?.trim() !== '' && (
                                        <img src={goods.imageUrl} alt={goods.title} className={styles.preview} />
                                    )
                                }
                            </div>
                            <div className={styles.bot}>
                                <div className={styles.txt}>
                                    <h2>{goods.title}</h2>
                                    <p>{goods.description}</p>
                                </div>
                                {/* 비밀번호 확인 전 */}
                                {
                                    !pwMatched ? (
                                        <div className={styles.edit}>
                                            <form onSubmit={handleCheckPassword}>
                                                <span>수정 및 삭제 : </span>
                                                <input type="password" placeholder="비밀번호 입력" value={inputPw} onChange={(e) => setInputPw(e.target.value)}
                                                    className={styles.input} autoComplete="off" />
                                                <div className={styles.btnWrap}>
                                                    <button className={styles.editBtn} type="submit">비밀번호 확인</button>
                                                </div>
                                            </form>
                                        </div>
                                    ) :
                                        /* 확인 후 수정 및 삭제버튼 노출 */
                                        (<div className={styles.editBtnWrap}>
                                            <button type="button" onClick={() => navigate(`/edit/${goods.id}`)} className={styles.editBtn} >
                                                수정
                                            </button>
                                            <button type="button" onClick={handleDelete} className={styles.editBtn} style={{ backgroundColor: "#ff4d4f" }} >
                                                삭제
                                            </button>
                                        </div>)
                                }
                            </div>
                        </div>)
                        : (<p style={{ padding: '40px 0', textAlign: 'center' }}>굿즈를 찾을 수 없습니다</p>)
                }
                <div className={styles.list}>
                    {
                        suggestedItems.map((item) => (
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
            </div>
        </Layout >
    );
}

export default Detail;