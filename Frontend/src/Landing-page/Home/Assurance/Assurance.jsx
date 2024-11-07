import styles from "./Assurance.module.css";
import AssuranceData from "./AssuranceData";
import AssuranceImg from "./AssuranceImg";

export default function Assurance() {
    return (
        <div className={`${styles.AssuranceBox}`}>
            <div className="row">
                <div className={`col-md-6 col-12 ${styles.AssuranceTxtBox}`}>
                    <AssuranceData />
                </div>
                <div className={`col-md-6 col-12  ${styles.AssuranceRightBox}`}>
                    <AssuranceImg />
                </div>
            </div>
        </div>
    );
}
