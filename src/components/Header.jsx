import styles from "./Header.module.css";
// import { useEffect } from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import Logo from "./Logo";
function Header() {
  return (
    <header>
      <div className={styles.header}>
        <Logo />
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
