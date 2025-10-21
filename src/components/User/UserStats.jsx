import styles from "./RenderSearchedObject.module.css";

function UserStats({ numOfPublicRepos, followers, following }) {
  return (
    <div className={styles.stats}>
      <div className={styles["stat-item"]}>
        <p className={styles["stat-number"]}>{numOfPublicRepos}</p>
        <p className={styles["stat-label"]}>REPOSITORIES</p>
      </div>
      <div className={styles["stat-item"]}>
        <p className={styles["stat-number"]}>{followers}</p>
        <p className={styles["stat-label"]}>FOLLOWERS</p>
      </div>
      <div className={styles["stat-item"]}>
        <p className={styles["stat-number"]}>{following}</p>
        <p className={styles["stat-label"]}>FOLLOWING</p>
      </div>
    </div>
  );
}

export default UserStats;
