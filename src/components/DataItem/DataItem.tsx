import type { PlatformItem } from "../../types/RequestI";
import styles from "./dataItem.module.css";

const DataItem = ({ item }: { item: PlatformItem }) => {
  const { name, logo, videos, watchTime } = item;
  return (
    <div className={styles.headingCont}>
      <div className="headingFlex">
        <img className={styles.img} src={logo} alt={`${name}'s logo`} />
        <p className={styles.name}>{name}</p>
      </div>
      <div className={`headingFlex ${styles.itemDes}`}>
        <p>
          <span>{watchTime.toLocaleString()}</span> WTime
        </p>
        <p>
          <span>{videos.toLocaleString()}/145</span> Videos
        </p>
      </div>
    </div>
  );
};

export default DataItem;
