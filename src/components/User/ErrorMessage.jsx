import styles from "../Message.module.css";
import { AlertCircle } from "lucide-react";

function ErrorMessage({ message = "Something went wrong!" }) {
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
    </div>
  );
}

export default ErrorMessage;
