import React from 'react';
import NewsItem from './NewsItem';

const NewsItemData = [
    {
        imgSrc: '/images/img1.jpg',
        imgAlt: '설명 1',
        title: '‘홈런-홈런-홈런’ 메가트윈스포 터졌다!',
        description: 'LG 트윈스가 25일 SSG 랜더스를 9-3으로 꺾고 위닝 시리즈를 거뒀다. 오스틴은 4경기 연속 홈런, 문보경은 백투백 홈런을 터뜨렸고, 송승기는 9탈삼진 무실점 호투로 시즌 5승을 기록했다. LG는 7회와 8회 대포 3방으로 승부를 갈랐고, SSG는 9회 홈런 2방으로 영패를 면했다.',
    },
    {
        imgSrc: '/images/img2.jpg',
        imgAlt: '설명 2',
        title: '한화위닝 시리즈 - 또 2위 탈환!',
        description: '한화 이글스가 25일 롯데 자이언츠를 상대로 연장 10회 끝내기 밀어내기 볼넷으로 8-7 승리를 거두며 위닝시리즈와 함께 다시 2위로 올라섰다. 경기 초반 6-0 리드를 지키지 못하고 9회 동점을 허용했지만, 문현빈의 끝내기가 팀을 구했다. 한화는 이날 대전 홈경기 전석 매진으로 KBO 최다 연속 홈경기 매진 기록(21경기)을 경신했다.',
        reverse: true,
    },
    {
        imgSrc: '/images/img3.jpg',
        imgAlt: '설명 3',
        title: '약속의 8회 삼성,KIA에 짜릿한 역전 드라마',
        description: '삼성 라이온즈가 24일 KIA 타이거즈를 상대로 8-4 역전승을 거두며 짜릿한 드라마를 연출했다. 류지혁과 김성윤의 활약, 이성규의 역전 득점, 밀어내기 볼넷과 2타점 2루타 등으로 8회 대거 5득점하며 승부를 뒤집었다. 선발 이승현은 4이닝 3실점, 승리는 이호성이 챙겼다.',
    },
    {
        imgSrc: '/images/img4.jpg',
        imgAlt: '설명 4',
        title: '’임종성 공수 맹활약’ 시즌 첫 승',
        description: '두산 베어스는 임종성의 결승 희생플라이와 호수비 활약에 힘입어 NC 다이노스를 5-3으로 꺾고 시즌 21승째를 기록했다. 잭로그가 6이닝 3실점 퀄리티스타트를 기록하며 승리투수가 됐고, 타선에서는 케이브와 임종성이 2안타씩 활약했다. 두산은 NC전 첫 승을 거두며 시리즈를 1승 1무 1패로 마무리했고, 다음 경기에서 KT 위즈와 맞붙는다.',
        reverse: true,
    },
    {
        imgSrc: '/images/img5.jpg',
        imgAlt: '설명 5',
        title: '황재균 고척 지배 7연패!',
        description: 'KT 위즈는 황재균의 결승타와 소형준의 7이닝 무실점 호투에 힘입어 키움 히어로즈를 2-0으로 꺾고 시리즈 스윕을 달성했다. 황재균은 시리즈 3경기에서 타율 0.692(13타수 9안타)의 맹활약으로 팀 승리에 크게 기여했다. KT는 시즌 26승을 기록하며 상승세를 이어갔고, 다음 경기는 두산과의 주중 3연전이다.',
    },
];

const NewsItemList: React.FC = () => {
    return (
        <div>
            {NewsItemData.map((item, index) => (
                <NewsItem key={index} {...item} />
            ))}
        </div>
    );
};

export default NewsItemList;
