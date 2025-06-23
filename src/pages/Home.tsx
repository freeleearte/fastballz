import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GoodsCard from "../components/GoodsCard";
import Layout from "../components/Layout";
import MatchList from "../components/MatchList";
import NewsItemList from "../components/NewsItemList";
import { useGoods } from "../context/GoodsContext";
import 'swiper/css';
import styles from './home.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import main1 from '../asset/main1.png';
import main2 from '../asset/main2.png';
import main3 from '../asset/main3.png';
import main4 from '../asset/main4.png';
import img1 from '../asset/1.png';
import img2 from '../asset/4.png';
import img3 from '../asset/3.png';
import img4 from '../asset/2.png';
import img5 from '../asset/5.png';
import bgImg from '../asset/bgImg.png'
import bgImg1 from '../asset/bgImg1.png'

const Home = () => {


    return (
        <Layout>
            <section className={styles.sec1}>
                <h2 className="inner">
                    <NavLink to="/community"><strong><span>CO</span><em>
                        &#123;<img src={main1} alt="Baseball Glove" className={styles.glove} />&#125;</em><b><span>MUN</span><img src={main2} alt="Baseball Bat" className={styles.bat} /><span>TY</span></b></strong><img src={main3} alt="Arrow" /><img src={main4} alt="Baseball" className={styles.ball} /></NavLink>
                </h2>
            </section>
            <section className={`${styles.sec2} inner`}>
                <h2>NEWS</h2>
                <Swiper
                    className={styles.swiperStyle}
                    // centeredSlides={true}
                    // loop={true}
                    // slidesPerView={'auto'}
                    wrapperTag="ul"
                    spaceBetween={200}
                >
                    <SwiperSlide
                        tag="li"
                        className={styles.swiperSlideStyle}
                    >
                        <a href="#">
                            <div className={styles.img}>
                                <img src={img1} alt="설명 1" />
                            </div>
                            <div className={styles.txt}>
                                <strong>‘홈런-홈런-홈런’ 메가트윈스포 터졌다!</strong>
                                <p>
                                    삼성 라이온즈가 24일 KIA 타이거즈를 상대로 8-4 역전승을 거두며 짜릿한 드라마를 연출했다. 류지혁과 김성윤의 활약, 이성규의 역전 득점...
                                </p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="li"
                        className={styles.swiperSlideStyle}
                    >
                        <a href="#">
                            <div className={styles.img}>
                                <img src={img2} alt="설명 2" />
                            </div>
                            <div className={styles.txt}>
                                <strong>한화위닝 시리즈 - 또 2위 탈환!</strong>
                                <p>
                                    한화 이글스가 25일 롯데 자이언츠를 상대로 연장 10회 끝내기 밀어내기 볼넷으로 8-7 승리를 거두며 위닝시리즈와 함께 다시 2위로 올라섰다...
                                </p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="li"
                        className={styles.swiperSlideStyle}
                    >
                        <a href="#">
                            <div className={styles.img}>
                                <img src={img3} alt="설명 3" />
                            </div>
                            <div className={styles.txt}>
                                <strong>약속의 8회 NC, KIA에 짜릿한 역전 드라마</strong>
                                <p>
                                    NC 다이노스가 24일 KIA 타이거즈를 상대로 8-4 역전승을 거두며 짜릿한 드라마를 연출했다...
                                </p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="li"
                        className={styles.swiperSlideStyle}
                    >
                        <a href="#">
                            <div className={styles.img}>
                                <img src={img4} alt="설명 4" />
                            </div>
                            <div className={styles.txt}>
                                <strong>’임종성 공수 맹활약’ 시즌 첫 승</strong>
                                <p>
                                    두산 베어스는 임종성의 결승 희생플라이와 호수비 활약에 힘입어 NC 다이노스를 5-3으로 꺾고 시즌 21승째를 기록했다...
                                </p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide
                        tag="li"
                        className={styles.swiperSlideStyle}
                    >
                        <a href="#">
                            <div className={styles.img}>
                                <img src={img5} alt="설명 5" />
                            </div>
                            <div className={styles.txt}>
                                <strong>황재균 고척 지배 7연패!</strong>
                                <p>
                                    KT 위즈는 황재균의 결승타와 소형준의 7이닝 무실점 호투에 힘입어 키움 히어로즈를 2-0으로 꺾고 시리즈 스윕을 달성했다...
                                </p>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className={`${styles.sec3} inner`}>
                <h2>LIVE SCORE</h2>
                <MatchList />
                <img src={bgImg1} alt="배경 이미지" className={styles.bgImg1} />
                <img src={bgImg} alt="배경 이미지" />
            </section>
        </Layout>
    );
}

export default Home;