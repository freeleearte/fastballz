import React from 'react';
import styles from './NewsItem.module.css';

type NewsItemProps = {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
    reverse?: boolean; // 텍스트와 이미지 순서 반전
};

const NewsItem: React.FC<NewsItemProps> = ({
    imgSrc,
    imgAlt,
    title,
    description,
    reverse = false,
}) => {
    return (
        <div className={`${styles.newsItem} ${reverse ? styles.reverse : ''}`}>
            <div className={styles.img}>
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <div className={styles.txt}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default NewsItem;
