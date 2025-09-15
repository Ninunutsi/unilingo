import type { AppData } from "../../types/RequestI";
import styles from "./overviewcontent.module.css";
import { OverviewItem } from "../../components";
import img from "../../assets/Image container.png";
import UK from "../../assets/UK";
import Spain from "../../assets/Spain";
import France from "../../assets/France";
import { formatLanguages } from "../../utils/helpers";

const OverviewContent = ({ data }: { data: AppData | null }) => {
  const flags = [
    <UK className={styles.flag} />,
    <Spain className={styles.flag} />,
    <France className={styles.flag} />,
  ];
  //combines languages and flags
  const languages = [...flags, ...(formatLanguages(data?.languages) ?? [])];

  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        {/* overview item takes dynamic positions of items in modal to adjust them based on different screen sizes */}
        <OverviewItem className={styles.languages}>
          <div>
            {languages?.map((item, index) => (
              <span className={styles.span} key={index}>
                <strong>{item}</strong>
              </span>
            ))}
          </div>
        </OverviewItem>

        <OverviewItem className={styles.minutes}>
          <p className={styles.span}>
            <strong>{data?.minutesPublished.toLocaleString()}</strong> mins of
            published content
          </p>
        </OverviewItem>

        <OverviewItem className={styles.themes}>
          <p className={styles.span}>
            Top Themes: <strong>{data?.themes.join(", ")}</strong>
          </p>
        </OverviewItem>

        <OverviewItem className={styles.shorts}>
          <div className={styles.box}>
            <img src={img} alt="" />
            <p className={styles.span}>
              <strong>{data?.shortsExtractable.toLocaleString()}</strong> shorts
              can be extracted
            </p>
          </div>
        </OverviewItem>
      </div>
    </div>
  );
};

export default OverviewContent;
