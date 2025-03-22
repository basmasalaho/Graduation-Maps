/* eslint-disable react/prop-types */
import { useState } from "react";
import usePlatform from "../../hooks/usePlatform";
import styles from "../../../src/assets/styles/PlatformSelector.module.css";
import { useGameContext } from "../../context/GameContext";

const PlatformSelector = () => {
  const { data, error } = usePlatform();
  const [isOpen, setIsOpen] = useState(false);
  const { gameQuery, setPlatform } = useGameContext();

  if (error) return <div>Error loading platforms.</div>;

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {gameQuery.platform?.name || "Platforms"}
        <svg
          className={styles.icon}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <ul>
            {Array.isArray(data?.results) && data?.results.length > 0 ? (
              data.results.map((platform) => (
                <li
                  className={styles.item}
                  key={platform.id}
                  onClick={() => {
                    setPlatform(platform);
                    setIsOpen(false);
                  }}
                >
                  {platform.slug}
                </li>
              ))
            ) : (
              <li>No platforms available.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlatformSelector;
