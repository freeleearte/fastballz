import Layout from "../components/Layout";
import NewsItemList from "../components/NewsItemList";
import styles from './home.module.css';


const News = () => {


    return (
        <Layout>
            <section className={`${styles.sec2} inner`}>
                <h2>NEWS</h2>
                <NewsItemList />
            </section>
        </Layout>
    );
}

export default News;