import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload"; // 업로드
import Edit from "./pages/Edit"; // 수정
import Detail from "./pages/Detail"; // 상세
import Liked from "./pages/Liked"; // 찜한굿즈보기
import Trending from "./pages/Trending"; // 인기굿즈보기
import Teams from "./pages/Teams"; // 소개
import Community from "./pages/Community";
import News from "./pages/News";
import { GoodsProvider } from "./context/GoodsContext";
import { BadWordFilterProvider } from "./context/BadWordFilterContext";
import { TeamInfoProvider } from "./context/TeamInfoContext";
import './reset.css';

function App() {
  return (
    <BadWordFilterProvider>
      <GoodsProvider>
        <TeamInfoProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/community" element={<Community />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </TeamInfoProvider>
      </GoodsProvider>
    </BadWordFilterProvider>
  );
}

export default App;
