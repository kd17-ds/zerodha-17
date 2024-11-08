import styles from "./Education.module.css";
import EducationImg from "./EducationImg";
import EducationData from "./EducationData";

export default function Education() {
    return (
        <div className={styles.EducationBox}>
            <div className="row ">
                <div className="col-md-6 col-12">
                    <EducationImg />
                </div>
                <div className={`col-md-6 col-12 ${styles.EducationTxtBox}`}>
                    <EducationData />
                </div>
            </div>
        </div>
    );
}
