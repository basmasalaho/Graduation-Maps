import { Routes, Route } from 'react-router-dom';
import MainContent from "./components/layout/MainContent";
import GameDetailsPage from "./components/layout/GameDetailsPage";
import NavBar from "./components/layout/NavBar";
import SideBar from "./components/layout/SideBar";
import { GameProvider } from './context/GameContext';
import "../src/assets/styles/styles.css";

function App() {
  return (
    <GameProvider>
      <NavBar />
      <div>
        <SideBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/games/:id" element={<GameDetailsPage />} />
        </Routes>
      </div>
    </GameProvider>
  );
}

export default App;
