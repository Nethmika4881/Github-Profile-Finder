import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import RenderSearchedObject from "../components/User/RenderSearchedObject";
import { useSearch } from "../contexts/SearchContext";
import { useEffect, useState } from "react";
import MoreDetails from "../components/User/MoreDetails";

function DetailsDisplay() {
  const { fetchUserRepos } = useSearch();
  const [isOpen, setIsOpen] = useState(false);

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
      <RenderSearchedObject isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default DetailsDisplay;
