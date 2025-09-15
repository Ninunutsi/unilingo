import { useNavigate } from "react-router-dom";
import { Button, Loader, Modal } from "../../components";
import styles from "./overview.module.css";
import { OverviewContent } from "../../UI";
import { useAppData } from "../../hooks/useAppData";
import ArrowRight from "../../assets/ArrowRight";
import XMark from "../../assets/XMark";
import avatar from "../../assets/Avatar profile photo.png";

const Overview = () => {
  const navigate = useNavigate();
  const { data, loading } = useAppData();
  const handleNext = () => {
    navigate("/analytics");
  };
  if (loading) return <Loader />;
  return (
    <Modal>
      <div className={styles.container}>
        <XMark className={`${styles.xmark}`} onClick={handleNext} />
        <h3 className={styles.heading}>Your Channel Overview</h3>
        <img src={avatar} alt="" className={styles.avatar} />

        {/* modals middle-main- content */}
        <OverviewContent data={data} />

        <Button onClick={handleNext} className={styles.btn}>
          Next <ArrowRight fill="red" />
        </Button>
      </div>
    </Modal>
  );
};

export default Overview;
