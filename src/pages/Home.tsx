import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GoodsCard from "../components/GoodsCard";
import Layout from "../components/Layout";
import MatchList from "../components/MatchList";
import NewsItemList from "../components/NewsItemList";
import { useGoods } from "../context/GoodsContext";
import styles from './home.module.css'

const Home = () => {


    return (
        <Layout>
            <section className={styles.sec1}>
                <h2>LIVE SCORE</h2>
                <MatchList />
            </section>
            <section className={styles.sec2}>
                <h2>NEWS</h2>
                <NewsItemList />
            </section>
            <section className={styles.sec3}>
                <h2>
                    <NavLink to="/community">COMMUNITY</NavLink>
                </h2>
            </section>
        </Layout>
    );
}

export default Home;