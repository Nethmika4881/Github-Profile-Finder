import { useSearch } from "../contexts/SearchContext";
import styles from "./RenderSearchedObject.module.css";
function RenderSearchedObject() {
  const { searchedObject } = useSearch();
  if (!searchedObject || Object.keys(searchedObject).length === 0) {
    return null;
  }
  console.log(searchedObject, "hiwefowuevbowuvboweuvbwoeuvboweuvbo");
  const {
    avatar_url: imgPath,
    bio = null,
    followers,
    following,
    name,
    public_repos: numOfPublicRepos,
  } = searchedObject;
  // Safely determine plan type
  const getPlanType = () => {
    if (searchedObject.plan?.name) {
      return `${searchedObject.plan.name.toUpperCase()} PLAN`;
    }
    return searchedObject.type ? searchedObject.type.toUpperCase() : "USER";
  };
  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>
        <img src={imgPath} className={styles.avatar} alt={`${name}'s image`} />
        <p className={styles.name}>{name}</p>
        <p className={styles["plan-badge"]}>{getPlanType()}</p>
      </div>
      <div className={styles["card-body"]}>
        {bio && <p className={styles.bio}>{bio}</p>}
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
      </div>
    </div>
  );
}

export default RenderSearchedObject;
