import styles from "./LeftBox.module.css";
import { Link } from "react-router-dom";

export default function LeftBox() {
    return (
        <div className={styles.LeftBox}>
            <div className={`row flex align-items-center ${styles.LeftTopBox}`}>
                <div className="col-6 text-center">
                    <span className={styles.NifSen}><b>NIFTY 50</b></span>
                    <span className={styles.CentDig}><b>0.00</b></span>
                    <span className={styles.RightDig}><b>0</b></span>
                </div>
                <div className="col-6 text-center">
                    <span className={styles.NifSen}><b>SENSEX</b></span>
                    <span className={styles.CentDig}><b>0.00</b></span>
                    <span className={styles.RightDig}><b>0</b></span>
                </div>
                <div className="col-12">

                </div>
            </div>
        </div>
    );
}
