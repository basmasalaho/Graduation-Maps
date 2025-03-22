import { useState } from "react";
import Logo from "./Logo";
import LogoImage from "../../assets/images/logo (1).png";
import SearchInput from "./SearchInput";
import ThemeToggle from "../Theme/ThemeToggle";
import navBarStyles from "../../assets/styles/NaveBar.module.css";
import { useGameContext } from "../../context/GameContext";
import { useThemeStore } from "../../store/themeStore";

const NavBar = () => {
  const { isSidebarOpen, toggleSidebar } = useGameContext();
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={navBarStyles.navbar}>
      <div className="flex gap-10">
        <label className={`${navBarStyles.menuButton} ${navBarStyles.hamburger}`}>
          <input type="checkbox" checked={isSidebarOpen} onChange={toggleSidebar} />
          <svg viewBox="0 0 32 32">
            <path className={`${navBarStyles.line} ${navBarStyles.lineTopBottom}`} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className={navBarStyles.line} d="M7 16 27 16"></path>
          </svg>
        </label>

        <div className={navBarStyles.themeToggle}>
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        </div>
      </div>

      <div className={navBarStyles.searchSection}>
        <SearchInput  />
      </div>

      <div className={navBarStyles.logoSection}>
        <Logo image={LogoImage} text="Game App Header" className="logo-header" />
      </div>
    </div>
  );
};

export default NavBar;
