import SearchBar from "./SearchBar";
import styles from "./Main.module.css";

import Spinner from "./Spinner";
import RenderSearchedObject from "./RenderSearchedObject";
import Message from "./Message";
function Main() {
  return (
    <div className={styles.main}>
      <HeroText />
      <SearchBox />
    </div>
  );
}

export default Main;

function HeroText() {
  return (
    <div className={styles.herotext}>
      <h1>GitHub Profile Finder</h1>
      <h4>Search for GitHub users and explore their profiles</h4>
    </div>
  );
}

function SearchBox() {
  return (
    <div className={styles.searchbox}>
      <SearchBar />
    </div>
  );
}
