import GenreList from "../Genres/GenreList";
import sidbar from "../../assets/styles/SideBar.module.css";
import { useGameContext } from "../../context/GameContext";
import { IoClose, IoAdd } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";

const SideBar = () => {
  const { isSidebarOpen, toggleSidebar, setGenre } = useGameContext();

  return (
    <div className={`${sidbar.list} ${isSidebarOpen ? sidbar.open : sidbar.closed}`}>
      <button onClick={toggleSidebar} className={sidbar.closeButton}>
        {isSidebarOpen ? <IoClose size={32} /> : <IoAdd size={32} />}
      </button>
      <div className={sidbar.listButten}>
        <GenreList onSelectGenre={(genre) => {
          setGenre(genre);
          toggleSidebar();
        }} />
      </div>
    </div>
  );
};

export default SideBar;
