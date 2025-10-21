import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import RenderSearchedObject from "../components/RenderSearchedObject";
import { useSearch } from "../contexts/SearchContext";
import { useEffect } from "react";

function DetailsDisplay() {
  const { fetchUserRepos } = useSearch();

  const [searchParams] = useSearchParams();
  const username = searchParams.get("name");
  console.log(username);
  useEffect(() => {
    if (username) {
      fetchUserRepos(username);
    }
  }, [username]);
  return (
    <div>
      <Header />
      <RenderSearchedObject />
    </div>
  );
}

export default DetailsDisplay;
