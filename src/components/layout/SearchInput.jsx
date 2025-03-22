import { useRef } from "react";
import styles from "../../../src/assets/styles/SearchInput.module.css"
import useSearchStore from "../../store/searchStore";

const SearchInput = () => {
    const ref = useRef(null);
    const setSearchText = useSearchStore(state => state.setSearchText);

    return (
        <form
            className={styles.searchForm}
            onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) setSearchText(ref.current.value); 
            }}
        >
            <label htmlFor="default-search" className="sr-only">
                Search
            </label>
            <div className={styles.searchContainer}>
                <div className={styles.searchIcon}>
                    <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    ref={ref}
                    type="search"
                    id="default-search"
                    className={styles.searchInput}
                    placeholder="Search ..."
                    required
                />
            </div>
        </form>
    );
};

export default SearchInput;