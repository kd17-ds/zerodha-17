import styles from "./LeftBox.module.css";
import { Link } from "react-router-dom";

export default function LeftBox() {
    return (
        <div className={styles.LeftBox}>
            <div className={`flex row align-items-center ${styles.LeftTopBox}`}>
                <div className="col-6 text-center">
                    <span className={styles.NifSen}>
                        <b>NIFTY 50</b>
                    </span>
                    <span className={styles.CentDig}>
                        <b>0.00</b>
                    </span>
                    <span className={styles.RightDig}>
                        <b>0</b>
                    </span>
                </div>
                <div className="col-6 text-center">
                    <span className={styles.NifSen}>
                        <b>SENSEX</b>
                    </span>
                    <span className={styles.CentDig}>
                        <b>0.00</b>
                    </span>
                    <span className={styles.RightDig}>
                        <b>0</b>
                    </span>
                </div>
            </div>
            <div className={`row flex align-items-center ${styles.LeftBoxes}`}>
                <div className={`col-9 ${styles.left1boxtxt}`}>
                    <b>&nbsp; &nbsp; Search eg:infy, bse, nifty fut weekly, gold mcx</b>
                </div>
                <div className={`col-3 text-end ${styles.leftboxdigit}`}>
                    <span>9 / 50</span>
                </div>
            </div>
            <div className={`row flex align-items-center ${styles.LeftBoxes}`}>
                <div className={`col-6  ${styles.leftboxtxt}`}>
                    <b> &nbsp; INFY</b>
                </div>
                <div className={`col-6 text-end ${styles.leftboxdigit}`}>
                    <span>
                        -1.60% &nbsp;
                        <i style={{ color: "red" }} class="fa-solid fa-angle-down"></i>
                        &nbsp; <span className={styles.reddish}>1555.45</span>
                    </span>
                </div>
            </div>
            <div className={`row flex align-items-center ${styles.LeftBoxes}`}>
                <div className={`col-6 ${styles.leftboxtxt}`}>
                    <b> &nbsp;ONGC</b>
                </div>
                <div className={`col-6 text-end ${styles.leftboxdigit}`}>
                    <span>
                        -0.09% &nbsp;
                        <i style={{ color: "red" }} class="fa-solid fa-angle-down"></i>{" "}
                        &nbsp; <span className={styles.reddish}>116.8</span>
                    </span>
                </div>
            </div>
            <div className={`row flex align-items-center ${styles.LeftBoxes}`}>
                <div className={`col-6  ${styles.leftboxtxt}`}>
                    <b> &nbsp; TCS</b>
                </div>
                <div className={`col-6 text-end ${styles.leftboxdigit}`}>
                    <span>
                        -0.25% &nbsp;
                        <i style={{ color: "red" }} class="fa-solid fa-angle-down"></i>{" "}
                        &nbsp; <span className={styles.reddish}>3194.8</span>
                    </span>
                </div>
            </div>
            <div className={`row flex align-items-center ${styles.LeftBoxes}`}>
                <div className={`col-6  ${styles.leftboxtxt}`}>
                    <b> &nbsp; KPITTECH</b>
                </div>
                <div className={`col-6 text-end ${styles.leftboxdigit}`}>
                    <span>
                        3.54% &nbsp;
                        <i style={{ color: "green" }} class="fa-solid fa-angle-up"></i>{" "}
                        <span className={styles.reddish}>&nbsp; 266.45</span>
                    </span>
                </div>
            </div>
            <div className={`row flex align-items-center ${styles.LeftBoxes}`}>
                <div className={`col-6  ${styles.leftboxtxt}`}>
                    <b> &nbsp; QUICKHEAL</b>
                </div>
                <div className={`col-6 text-end ${styles.leftboxdigit}`}>
                    <span>
                        -0.15% &nbsp;
                        <i style={{ color: "red" }} class="fa-solid fa-angle-down"></i>
                        <span className={styles.reddish}> &nbsp; 308.55</span>
                    </span>
                </div>
            </div>
            <div className={`row flex align-items-center ${styles.LeftBoxes}`}>
                <div className={`col-6  ${styles.leftboxtxt}`}>
                    <b> &nbsp; WIPRO</b>
                </div>
                <div className={`col-6 text-end ${styles.leftboxdigit}`}>
                    <span>
                        0.32% &nbsp;{" "}
                        <i style={{ color: "green" }} class="fa-solid fa-angle-up"></i>{" "}
                        &nbsp; <span className={styles.reddish}>577.75</span>
                    </span>
                </div>
            </div>
            <div className={`row flex align-items-center ${styles.LeftBoxes}`}>
                <div className={`col-6  ${styles.leftboxtxt}`}>
                    <b> &nbsp;M&M</b>
                </div>
                <div className={`col-6 text-end ${styles.leftboxdigit}`}>
                    <span>
                        -0.01% &nbsp;
                        <i style={{ color: "red" }} class="fa-solid fa-angle-down"></i>{" "}
                        &nbsp; <span className={styles.reddish}>779.8</span>
                    </span>
                </div>
            </div>
            <div className={`row flex align-items-center ${styles.LeftBoxes}`}>
                <div className={`col-6  ${styles.leftboxtxt}`}>
                    <b> &nbsp;RELIANCE</b>
                </div>
                <div className={`col-6 text-end ${styles.leftboxdigit}`}>
                    <span>
                        1.44% &nbsp;{" "}
                        <i style={{ color: "green" }} class="fa-solid fa-angle-up"></i>{" "}
                        &nbsp; <span className={styles.reddish}>2112.4</span>
                    </span>
                </div>
            </div>
            <div className={`row flex align-items-center ${styles.LeftBoxes}`}>
                <div className={`col-6  ${styles.leftboxtxt}`}>
                    <b> &nbsp; HUL</b>
                </div>
                <div className={`col-6 text-end ${styles.leftboxdigit}`}>
                    <span>
                        1.04% &nbsp;{" "}
                        <i style={{ color: "green" }} class="fa-solid fa-angle-up"></i>{" "}
                        &nbsp; <span className={styles.reddish}>514.4</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
