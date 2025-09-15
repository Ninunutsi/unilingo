import { Link } from "react-router-dom";
import styles from "./404Page.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.number}>404</h1>
        <p className={styles.message}>Oops! Page not found.</p>
        <p className={styles.subMessage}>
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link className={styles.link} to={"/analytics"}>
          Analytics
        </Link>
        <Link className={styles.link} to={"/overview"}>
          Overview
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
