import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./RenderSearchedObject.module.css";

function DetailsRenderButton({ setIsOpen, isOpen }) {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const username = search.get("name");
  const handleClick = async (e) => {
    e.preventDefault();
    setIsOpen((c) => !c);
    if (isOpen) navigate(`/details?name=${username}`);
    else navigate(`/details?name=${username}&tab=repos`);
  };

  return (
    <button onClick={handleClick} className={styles.btn}>
      {isOpen ? "Hide" : "Show"} repositories
    </button>
  );
}

export default DetailsRenderButton;
