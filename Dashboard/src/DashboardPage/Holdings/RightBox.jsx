import styles from "./RightBox.module.css";
import Navbar from "../Navbar/Navbar";
import HoldingTable from "./HoldingTable";

export default function RightBox() {
    return (
        <div className={styles.RightBox}>
            <Navbar />
            <div className={styles.heading}>
                <p>Holdings (13)</p>
            </div>
            <HoldingTable />
            <div className="row mx-3">
                <div className={`p-3 col-4 ${styles.HoldingBoxLeft}`}>
                    <h1 style={{ overflow: "hidden" }}>
                        29,875.<sub>55</sub>
                    </h1>
                    <p>Total Investment</p>
                </div>
                <div className={`p-3 col-5 ${styles.HoldingBoxLeft}`}>
                    <h1 style={{ overflow: "hidden" }}>
                        31,428.<sub>95</sub>
                    </h1>
                    <p>Current Value</p>
                </div>
            </div>
        </div>
    );
}
