import { createContext, useContext, useState } from "react";
import { Goods } from "../types";

interface GoodsContextType {
    goodsList: Goods[]; // 굿즈들이 들어있는 리스트
    setGoodsList: React.Dispatch<React.SetStateAction<Goods[]>>; // 굿즈를 바꾸는 함수
}

// 처음에는 내용이 없음
export const GoodsContext = createContext<GoodsContextType | null>(null);

export const useGoods = () => {
    const context = useContext(GoodsContext);
    if (!context) {
        // 만약 GoodsProvider 안에서 사용하지 않으면 에러를 보여줘요
        throw new Error('useGoods must be used within GoodsProvider');
    }
    return context;
}

// 전체 앱을 감싸서 굿즈 정보를 모두에게 나눠주는 컴포넌트
export const GoodsProvider = ({ children }: { children: React.ReactNode }) => {
    const [goodsList, setGoodsList] = useState<Goods[]>([]);

    return (
        // Context Provider로 children 안의 모든 컴포넌트에게 데이터를 나눠줌
        <GoodsContext.Provider value={{ goodsList, setGoodsList }}>
            {children}
        </GoodsContext.Provider>
    )
}