import { Check } from "lucide-react";
import styles from "./Features.module.css";

function Features() {
  return (
    <div className={styles.container}>
      <h3>Features</h3>
      <ul>
        <li>
          <span>
            <Check size="2rem" />
          </span>
          Search GitHub users by username
        </li>

        <li>
          <span>
            <Check size="2rem" />
          </span>
          View detailed profile information
        </li>

        <li>
          <span>
            <Check size="2rem" />
          </span>
          Explore top repositories
        </li>

        <li>
          <span>
            <Check size="2rem" />
          </span>
          See statistics and activity
        </li>
      </ul>
    </div>
  );
}

export default Features;
