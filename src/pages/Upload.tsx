import Layout from "../components/Layout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Goods } from "../types";
import styles from './form.module.css';
import { useGoods } from "../context/GoodsContext";
import { uploadToCloudinary } from "../utils/cloudinary";

const Upload = () => {
    const navigate = useNavigate();
    const { setGoodsList } = useGoods(); // 굿즈 목록 업데이트

    // 각 입력 필드의 상태 만들기
    const [team, setTeam] = useState('all');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [password, setPassword] = useState('');

    const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTeam(e.target.value);
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        try {
            const uploadUrl = await uploadToCloudinary(file);
            setImageUrl(uploadUrl); // 미리보기로 보여주기
        } catch (err) {
            alert('업로드 실패');
        }
    }

    // 등록 또는 엔터로 재출시 실행
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // 새로고침 방지

        const newGoods: Goods = {
            id: Date.now().toString(), //고유 id
            team,
            title,
            description,
            imageUrl,
            likes: 0,
            password,
        }
        let stored = localStorage.getItem('goodsList');
        let existing: Goods[] = [];

        if (stored) {
            existing = JSON.parse(stored);
        } else {
            const response = await fetch('/data/goods.json');
            const dummy = await response.json();
            existing = dummy;
        }

        const updated = [newGoods, ...existing];
        localStorage.setItem('goodsList', JSON.stringify(updated));
        setGoodsList(updated);
        navigate('/');
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit} className={styles.formWrap} autoComplete="off"> {/* 자동완성 끄기 */}
                <h2>UPLOAD</h2>
                <div className={styles.form} >
                    <label htmlFor="team-select">팀을 선택해주세요 :</label>
                    <select id="team-select"className={styles.option} value={team} onChange={handleTeamChange}>
                        <option value="kia">KIA 타이거즈</option>
                        <option value="all">전체 팀</option>
                        <option value="doosan">두산 베어스</option>
                        <option value="lotte">롯데 자이언츠</option>
                        <option value="kt">KT 위즈</option>
                        <option value="lg">LG 트윈스</option>
                        <option value="kiwoom">키움 히어로즈</option>
                        <option value="samsung">삼성 라이온즈</option>
                        <option value="nc">NC 다이노스</option>
                        <option value="hanwha">한화 이글스</option>
                        <option value="ssg">SSG 랜더스</option>
                    </select>
                    <input type="text" placeholder="제목을 입력하세요" value={title} required className={styles.input} onChange={(e) => setTitle(e.target.value)} />
                    <textarea placeholder="설명 및 내용을 작성해주세요." value={description} onChange={(e) => setDescription(e.target.value)} required className={styles.textarea} />
                    <input type="text" placeholder="이미지 주소 (URL)를 입력해주세요." value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className={styles.input} autoComplete="current-url" />
                    <input type="file" onChange={handleImageChange} accept="image/*" className={styles.input} />
                    {imageUrl ? (<img src={imageUrl} alt="굿즈 미리보기" className={styles.preview} />) : null}
                    <input type="password" placeholder="수정 및 삭제용 비밀번호를 설정해주세요." value={password} onChange={(e) => setPassword(e.target.value)} required className={styles.input} />
                </div>
                <div className={styles.btnWrap}>
                    <button type="submit" className={styles.button} >업로드하기</button>
                </div>
            </form>
        </Layout>
    );
}

export default Upload;