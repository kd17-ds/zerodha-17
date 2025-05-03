import styles from "./RightBox.module.css";
import Navbar from "../Navbar/Navbar";

export default function RightBox() {
    return (
        <div className={styles.RightBox}>
            <Navbar />
            <div className={styles.heading}>
                <h3 className="mb-4">
                    Hi, User!
                </h3>
            </div>
            <div className={`mb-5 ${styles.Equity}`}>
                <h4>
                    <i style={{ fontSize: "14px" }} class="fa-solid fa-clock"></i> Equity
                </h4>
                <div className="container p-0 m-0">
                    <div className={`row ${styles.EquityBox}`}>
                        <div className={`p-3 col-2 ${styles.EquityBoxLeft}`}>
                            <h1>3.74k</h1>
                            <p>Margin available</p>
                        </div>
                        <div className=" p-3 px-5 col-10">
                            <p>Margins used &nbsp; 0</p>
                            <p>Opening Balance &nbsp; 3.74k</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Holdings}>
                <h4>
                    <i style={{ fontSize: "14px" }} class="fa-solid fa-briefcase"></i>{" "}
                    Holdings (13)
                </h4>
                <div className={`row ${styles.HoldingBox}`}>
                    <div className={`p-3 col-3 ${styles.HoldingBoxLeft}`}>
                        <h1 style={{ color: "green" }}>
                            1.55k <sub>+5.20%</sub>
                        </h1>
                        <p>P&L</p>
                    </div>
                    <div className=" p-3 px-5 col-9">
                        <p>Current Value &nbsp; 31.43k</p>
                        <p>Investment &nbsp; 29.88k</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
