import { FaGithub } from "react-icons/fa";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <div className={styles.logoBox}>
      <FaGithub size="5rem" color="white" />
      <span className={styles.logoName}>GitFinder</span>
    </div>
  );
}

export default Logo;
