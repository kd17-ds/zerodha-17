import styles from "./Awards.module.css";
import AwardsData from "./AwardsData";
import AwardsImg from "./AwardsImg";

export default function Awards() {
  return (
    <div className={styles.Awards}>
      <div className={`row ${styles.AwardsRowBox} text-center`}>
        <div className="col-12 col-md-6">
          <AwardsImg />
        </div>
        <div className="col-12 col-md-6  ">
          <AwardsData />
        </div>
      </div>
    </div>
  );
}
