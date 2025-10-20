import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";
import Spinner from "./Spinner";
import { useSearch } from "../contexts/SearchContext";

function SearchBar() {
  const { fetchUserRepos, search, setSearch } = useSearch();
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        className={styles.search}
        placeholder="enter usename"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        spellCheck="false"
        autoCorrect="off"
        autoComplete="off"
        autoCapitalize="none"
      />

      <button
        className={styles.btn}
        onClick={fetchUserRepos}
        disabled={!search.trim()}
      >
        <Search size="2rem" color="white" />
        Search
      </button>
    </div>
  );
}

export default SearchBar;
