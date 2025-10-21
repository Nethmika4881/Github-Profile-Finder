import { AlertCircle, ArrowLeft } from "lucide-react";
import styles from "./Message.module.css";
import { useNavigate } from "react-router-dom";

function Message({ message = "Something went wrong!" }) {
  const navigate = useNavigate();
  const handleButton = function () {
    navigate(-1);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.errorContainer}>
        <AlertCircle className={styles.icon} />
        <p className={styles.message}>{message}</p>
      </div>
      <button className={styles.btn} onClick={handleButton}>
        <ArrowLeft /> Back to Search
      </button>
    </div>
  );
}

export default Message;
