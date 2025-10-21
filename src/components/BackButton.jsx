import styles from "./BackButton.module.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className={`${styles.btn} ${styles["back-btn"]}`}
      onClick={() => navigate(-1)}
    >
      <ArrowLeft size={24} color="white" />
      <span>Back</span>
    </button>
  );
}

export default BackButton;
