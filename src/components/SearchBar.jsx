import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";
import { useSearch } from "../contexts/SearchContext";
import { Link, useNavigate } from "react-router-dom";

function SearchBar() {
  const { fetchUserRepos, search, setSearch } = useSearch();

  const navigate = useNavigate();
  async function handleSearch() {
    if (!search.trim()) return;
    await fetchUserRepos(); // Wait for data to load
    navigate(`/details?name=${search}`);
  }

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
        onClick={handleSearch}
        disabled={!search.trim()}
      >
        <Search size="2rem" color="white" />
        Search
      </button>
    </div>
  );
}

export default SearchBar;
