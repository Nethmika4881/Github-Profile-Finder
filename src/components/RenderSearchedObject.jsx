import { useNavigate } from "react-router-dom";
import { useSearch } from "../contexts/SearchContext";
import styles from "./RenderSearchedObject.module.css";
import { ArrowLeft } from "lucide-react";
import Message from "../components/Message";

function RenderSearchedObject() {
  const { searchLoading, message } = useSearch();
  const { searchedObject } = useSearch();
  const navigate = useNavigate();
  if (!searchedObject || Object.keys(searchedObject).length === 0) {
    return null;
  }

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

  if (searchLoading)
    return (
      <div className={styles.spinnerContainer}>
        {searchLoading && <Spinner />}
      </div>
    );

  if (message) return <div>{message && <Message />}</div>;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
        margin: "3rem 0",
        position: "relative",
      }}
    >
      {!message && !searchLoading && (
        <div className={styles.card}>
          <div className={styles["card-header"]}>
            <button
              className={`${styles.btn} ${styles["back-btn"]}`}
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={24} color="white" />

              <span>Back</span>
            </button>
            <img
              src={imgPath}
              className={styles.avatar}
              alt={`${name}'s image`}
            />
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
      )}
    </div>
  );
}

export default RenderSearchedObject;
