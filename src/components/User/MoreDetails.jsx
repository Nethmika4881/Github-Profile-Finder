import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import { Link, useSearchParams } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import styles from "./MoreDetails.module.css";

function MoreDetails() {
  const [errorMessage, setErrorMessage] = useState();
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [search] = useSearchParams();
  const username = search.get("name");

  useEffect(() => {
    async function fetchDetails() {
      try {
        setDetailsLoading(true);
        const res = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!res.ok) throw new Error("Couldn't fetch data");

        const data = await res.json();
        if (data.length === 0) throw new Error("No repositories found!");
        setRepos(data);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setDetailsLoading(false);
      }
    }

    if (username) fetchDetails();
  }, [username]);

  if (detailsLoading) return <Spinner />;
  if (errorMessage) return <ErrorMessage message={errorMessage} />;

  return (
    <div className={styles["details-container"]}>
      <h2 className={styles["details-title"]}>Repositories</h2>
      <div className={styles["repo-grid"]}>
        {repos.map((repo) => (
          <div className={styles["repo-card"]} key={repo.id}>
            <h3 className={styles["repo-name"]}>
              <Link
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {repo.name}
              </Link>
            </h3>
            <p className={styles["repo-description"]}>
              {repo.description ? repo.description : "No description provided."}
            </p>
            <div className={styles["repo-info"]}>
              <span>⭐ {repo.stargazers_count}</span>
              <span>💻 {repo.language || "N/A"}</span>
              <span>📅 {new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoreDetails;
