import { AlertCircle } from "lucide-react";
import styles from "./Message.module.css";

function Message({ message = "Something went wrong!" }) {
  return (
    <div className={styles.errorContainer}>
      <AlertCircle className={styles.icon} />
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default Message;
