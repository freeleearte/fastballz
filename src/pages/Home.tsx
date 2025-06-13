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

const Home = () => {


    return (
        <Layout>
            <section className={styles.sec1}>
                <h2 className="inner">
                    <NavLink to="/community"><strong><span>CO</span><em>
                        &#123;<img src={main1} alt="Baseball Glove" className={styles.glove} />&#125;</em><b><span>MUN</span><img src={main2} alt="Baseball Bat" className={styles.bat} /><span>TY</span></b></strong><img src={main3} alt="Arrow" /><img src={main4} alt="Baseball" className={styles.ball} /></NavLink>
                </h2>
            </section>
            <section className={styles.sec2}>
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
                                <img src="" alt="" />
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
                                <img src="" alt="" />
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
                                <img src="" alt="" />
                            </div>
                            <div className={styles.txt}>
                                <strong>‘홈런-홈런-홈런’ 메가트윈스포 터졌다!</strong>
                                <p>
                                    삼성 라이온즈가 24일 KIA 타이거즈를 상대로 8-4 역전승을 거두며 짜릿한 드라마를 연출했다. 류지혁과 김성윤의 활약, 이성규의 역전 득점...
                                </p>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className={styles.sec3}>
                <h2>LIVE SCORE</h2>
                <MatchList />
            </section>
        </Layout>
    );
}

export default Home;