import React, { createContext, useContext, useEffect, useState } from "react";

type TeamData = {
    name: string;
    engName: string;
    description: string;
    founded: string;
    location: string;
    wins: string;
    stadium: string;
    stadiumName: string;
    stadiumNameInfo: string;
    mascot: string;
    mascotSubTitle: string;
    mascotInfo: string;
    symbol: string;
    word: string;
    cheerInfo: string;
    images: {
        logo: string;
        mascot: string;
        stadium: string;
    };
};

type TeamInfoContextType = {
    teamDetails: Record<string, TeamData>;
};

const TeamInfoContext = createContext<TeamInfoContextType | undefined>(undefined);

export const TeamInfoProvider = ({ children }: { children: React.ReactNode }) => {
    const [teamDetails, setTeamDetails] = useState<Record<string, TeamData>>({});

    useEffect(() => {
        fetch("/data/teamInfo.json")
            .then((res) => res.json())
            .then((data) => setTeamDetails(data))
            .catch((err) => console.error("팀 정보 로드 실패:", err));
    }, []);

    return (
        <TeamInfoContext.Provider value={{ teamDetails }}>
            {children}
        </TeamInfoContext.Provider>
    );
};

export const useTeamInfo = () => {
    const context = useContext(TeamInfoContext);
    if (!context) throw new Error("useTeamInfo must be used within TeamInfoProvider");
    return context;
};
