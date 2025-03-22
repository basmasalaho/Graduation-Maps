import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "../../../src/assets/styles/ThemeToggle.module.css";
import { useThemeStore } from '../../store/themeStore';

const ThemeToggle = () => {
    const { theme, setTheme } = useThemeStore();
    const [rotating, setRotating] = useState(false);

    const toggleTheme = () => {
        setRotating(true); // بدء دوران الأيقونة
        setTimeout(() => {
            setTheme(theme === "dark" ? "light" : "dark"); // تبديل الوضع بين الليلي والنهاري
            setRotating(false); // إيقاف دوران الأيقونة
        }, 500);
    };

    return (
        <div className={styles.toggleContainer} onClick={toggleTheme}>
            <div className={`${styles.toggleThumb} ${rotating ? styles.rotating : ""}`}>
                {theme === "light" ? <FaSun className={styles.sunIcon} /> : <FaMoon className={styles.moonIcon} />} 
            </div>
        </div>
    );
};

export default ThemeToggle;