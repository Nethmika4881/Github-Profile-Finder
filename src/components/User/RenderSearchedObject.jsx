import { useState } from "react";
import { useSearch } from "../../contexts/SearchContext";
import { useSearchParams } from "react-router-dom";
import Spinner from "../Spinner";
import Message from "../Message";
import UserCard from "./UserCard";
import styles from "./RenderSearchedObject.module.css";

function RenderSearchedObject() {
  const { searchLoading, searchedObject, setSearchLoading, setMessage } =
    useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const username = searchParams.get("name");

  const handleRepoButton = async function () {
    try {
      setSearchLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!res.ok) throw new Error("Couldn't fetch data");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSearchLoading(false);
    }
  };

  if (searchLoading)
    return (
      <div className={styles.spinnerContainer}>
        <Spinner />
      </div>
    );

  if (!searchedObject || Object.keys(searchedObject).length === 0)
    return <Message message="No user found." />;

  const {
    avatar_url: imgPath,
    bio,
    followers,
    following,
    name,
    public_repos: numOfPublicRepos,
    plan,
    type,
  } = searchedObject;

  const getPlanType = () =>
    plan?.name
      ? `${plan.name.toUpperCase()} PLAN`
      : type?.toUpperCase() || "USER";

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <UserCard
          imgPath={imgPath}
          bio={bio}
          followers={followers}
          following={following}
          numOfPublicRepos={numOfPublicRepos}
          getPlanType={getPlanType}
          name={name}
          handleRepoButton={handleRepoButton}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
}

export default RenderSearchedObject;
