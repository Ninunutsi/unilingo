import { useTheme } from "../../hooks/useTheme";
import styles from "./themeSwitcher.module.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ThemeSwitcher;
