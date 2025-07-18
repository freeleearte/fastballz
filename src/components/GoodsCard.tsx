import { Goods } from "../types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './GoodsCard.module.css'
import { getCommentCount } from "../pages/Detail";
import likeImg from "../asset/heart.png";
import commentImg from "../asset/comment.png";

//Props 타입 정리 (받을 데이터들)
interface Props {
    item: Goods;
    likedIds: string[];
    setLikedIds: React.Dispatch<React.SetStateAction<string[]>>;
    goodsList: Goods[];
    setGoodsList: React.Dispatch<React.SetStateAction<Goods[]>>;
    className?: string;
}

const GoodsCard = ({ item, likedIds, setLikedIds, goodsList, setGoodsList, className }: Props) => {
    const [liked, setLiked] = useState(false); // 내가 아이템을 찜했는지
    const [commentCount, setCommentCount] = useState(0);

    useEffect(() => {
        setCommentCount(getCommentCount(item.id));
    }, [item.id]);

    // 처음 들어오거나 likedIds가 바뀌면 liked 상태를 업데이트
    useEffect(() => {
        setLiked(likedIds.includes(item.id));
    }, [likedIds, item.id]);

    const toggleLike = () => {
        const liked = likedIds.includes(item.id); // 이미 찜했는지 확인

        // 찜 id 목록을 추가하거나 제거함
        const updatedLikes = liked ? likedIds.filter((id) => id !== item.id) //제거
            : [...likedIds, item.id]; //추가

        localStorage.setItem('likes', JSON.stringify(updatedLikes)); //저장
        setLikedIds(updatedLikes); // 상태 반영

        // 굿즈 리스트안의 likes 수 업데이트
        const updatedGoodsList = goodsList.map((g) =>
            g.id === item.id ? {
                ...g,
                likes: liked ? Math.max(g.likes - 1, 0) // 좋아요 수가 0보다 작아지지 않게
                    : g.likes + 1,
            } : g
        )
        setGoodsList(updatedGoodsList);
        localStorage.setItem('goodsList', JSON.stringify(updatedGoodsList));
    }

    return (
        <div className={`${styles.card} ${className ?? ''} ${styles[item.team]}`}>
            <Link to={`/detail/${item.id}`} className={styles.link}>
                <img src={item.imageUrl} alt={item.title} className={styles.image} />
                <div className={styles.info}>
                    <div className={styles.top}>
                        <div className={styles.teamImg}>
                            <img src="" alt="" />
                        </div>
                        <div className={styles.right}>
                            <p className={styles.likes}><img src={likeImg} alt="좋아요" /> {item.likes}</p>
                            <p className={styles.comments}><img src={commentImg} alt="댓글" /> {commentCount}</p>
                        </div>
                    </div>
                    <div className={styles.bot}>
                        <h3 className={styles.title}>{item.title}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default GoodsCard;