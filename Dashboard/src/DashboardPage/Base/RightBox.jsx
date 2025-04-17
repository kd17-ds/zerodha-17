import styles from "./RightBox.module.css";
import { Link } from "react-router-dom";

export default function RightBox() {
    return (
        <div className={styles.RightBox}>
            <div className={styles.heading}>
                <h3 style={{ overflowY: "hidden" }} className="mb-4">Hi, User!</h3>
            </div>
            <div className="Equity">
                <h4><i class="fa-solid fa-clock"></i> Equity</h4>
                <div className="row">
                    <div className="col-6">
                        <h1>3.74k</h1>
                        <p>Margin available</p>
                    </div>
                    <div className="col-6">
                        <p>Margins used &nbsp; 0</p>
                        <p>Opening Balance &nbsp; 3.74k</p>
                    </div>
                </div>
            </div>
            <div className="Holdings">
                <h4><i class="fa-solid fa-briefcase"></i> Holdings</h4>
                <div className="row">
                    <div className="col-6">
                        <h1>1.55k + 5.20%</h1>
                        <p>P&L</p>
                    </div>
                    <div className="col-6">
                        <p>Current Value &nbsp; 31.43k</p>
                        <p>Investment &nbsp; 29.88k</p>
                    </div>
                </div>
            </div>
        </div>
    );
}