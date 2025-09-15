import { SadFace } from "../../assets";
import styles from "./nodata.module.css";
const NoData = ({ msg }: { msg: string }) => {
  return (
    <div className={styles.noData}>
      <SadFace />
      <p>{msg}</p>
    </div>
  );
};

export default NoData;
