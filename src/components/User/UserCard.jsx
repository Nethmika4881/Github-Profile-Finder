import BackButton from "../BackButton";
import UserStats from "./UserStats";
import DetailsRenderButton from "./DetailsRenderButton";
import styles from "./RenderSearchedObject.module.css";

function UserCard({
  imgPath,
  bio,
  numOfPublicRepos,
  followers,
  following,
  getPlanType,
  name,
  handleRepoButton,
  setIsOpen,
  isOpen,
}) {
  return (
    <>
      <div className={styles["card-header"]}>
        <BackButton />
        <img src={imgPath} className={styles.avatar} alt={`${name}'s image`} />
        <p className={styles.name}>{name}</p>
        <p className={styles["plan-badge"]}>{getPlanType()}</p>
      </div>

      <div className={styles["card-body"]}>
        {bio && <p className={styles.bio}>{bio}</p>}

        <UserStats
          numOfPublicRepos={numOfPublicRepos}
          followers={followers}
          following={following}
        />

        <DetailsRenderButton
          onShow={handleRepoButton}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </div>
    </>
  );
}

export default UserCard;
