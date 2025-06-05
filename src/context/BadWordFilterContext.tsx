import React, { createContext, useContext, useState } from 'react';

// 욕설 단어 리스트
const badWords = [
    // 일반 욕설
    "씨발", "ㅅㅂ", "ㅂㅅ", "병신", "개새", "좆", "ㅄ", "fuck", "shit", "닥쳐", "꺼져",

    // 자주 쓰이는 순화된 욕설
    "ㅄ같", "ㅅㄲ", "ㅈㄴ", "ㅈ같", "ㅆㅂ", "ㄲㅈ", "개노답", "정신병", "패드립", "말종", "등신",

    // 특정 팀/선수 조롱
    "기아좆", "엘지똥", "두산빠따", "한화꼴찌", "롯데못해", "삼성눈물", "키움없애", "쓱망", "kt탈락", "NC찌질",
    "엘지폭망", "한화한숨", "두산꼴", "기아역전패", "롯데영혼없", "쓱이탈", "삼성무기력", "NC실책왕",

    // 경기 내용에 대한 조롱
    "물방망이", "똥피칭", "덜떨어진", "실책왕", "병살기계", "먹튀", "구멍타자", "헛스윙쟁이", "이닝이터기계", "와일드피치쟁이", "포수불안",
    "주루사", "주루미스", "오주루", "빠던충", "깝치네", "왜불러", "지뢰타자", "퇴출감", "못해먹겠", "말아먹", "망했네", "하위권감성",

    // 감정 표현 및 조롱 반응
    "졌잘싸", "존망", "바보같은", "개답답", "돌아이", "우승감없", "도대체 왜", "차라리 은퇴", "그냥 지길", "양심없", "하는 짓봐", "야구 그만", "유니폼 벗어",

    // 기타 커뮤니티 표현
    "노잼팀", "감독탓", "감독하차", "어그로", "실드치지마", "빠가", "XX놈", "부끄러운줄", "답도없", "한심"
];

// 욕설 포함 여부 체크 함수
function containsBadWords(text: string): boolean {
    if (!text) return false;
    const lowerText = text.toLowerCase();
    return badWords.some(bw => lowerText.includes(bw));
}

// Context 타입 정의
interface BadWordFilterContextType {
    badWordFilterOn: boolean;
    toggleBadWordFilter: () => void;
    containsBadWords: (text: string) => boolean;
}

const BadWordFilterContext = createContext<BadWordFilterContextType | undefined>(undefined);

export const BadWordFilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [badWordFilterOn, setBadWordFilterOn] = useState(false);

    const toggleBadWordFilter = () => setBadWordFilterOn(prev => !prev);

    return (
        <BadWordFilterContext.Provider value={{ badWordFilterOn, toggleBadWordFilter, containsBadWords }}>
            {children}
        </BadWordFilterContext.Provider>
    );
};

export function useBadWordFilter() {
    const context = useContext(BadWordFilterContext);
    if (!context) {
        throw new Error('useBadWordFilter must be used within a BadWordFilterProvider');
    }
    return context;
}
