import BackButton from "../BackButton";
import UserStats from "./UserStats";
import DetailsRenderButton from "./DetailsRenderButton";
import styles from "./RenderSearchedObject.module.css";
import MoreDetails from "./MoreDetails";
import { useSearchParams } from "react-router-dom";

const UserCard = function ({
  imgPath,
  bio,
  numOfPublicRepos,
  followers,
  following,
  getPlanType,
  name,
  setIsOpen,
  isOpen,
}) {
  const [search] = useSearchParams();
  if (search.get("tab")) setIsOpen(true);

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

        <DetailsRenderButton setIsOpen={setIsOpen} isOpen={isOpen} />

        {isOpen && <MoreDetails />}
      </div>
    </>
  );
};

export default UserCard;
