/* eslint-disable react/prop-types */
import { GameHeading } from "../Games/GameHeading";
import GameList from "../Games/GameList";
import PlatformSelector from "../Platform/PlatformSelector";
import SortSelector from "../SortSelector";
import { useGameContext } from "../../context/GameContext";
import "../../assets/styles/styles.css";
const MainContent = () => {
  const { gameQuery } = useGameContext();

  return (
    <>
      <div className="content col-span-5 MainContent">
        <GameHeading
          selectGenre={gameQuery.genre}
          selectPlatform={gameQuery.platform}
        />
        <div className="filter my-3 flex gap-[10px]">
          <PlatformSelector />
          <SortSelector />
        </div>
        <div className="cover-card">
          <GameList
            selectPlatform={gameQuery.platform}
            selectGenre={gameQuery.genre}
            selectSortOrder={gameQuery.sortOrder}
            searchText={gameQuery.searchText}
          />
        </div>
      </div>
    </>
  );
};

export default MainContent;
