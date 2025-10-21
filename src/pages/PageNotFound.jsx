import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <div className={styles["notfound-container"]}>
      <h1 className={styles["notfound-code"]}>404</h1>
      <h2 className={styles["notfound-title"]}>Page Not Found</h2>
      <p className={styles["notfound-text"]}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className={styles["home-button"]}>
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;
