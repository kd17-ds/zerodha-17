import styles from "./RightBox.module.css";
import Navbar from "../Navbar/Navbar";
import HoldingTable, { data } from "./HoldingTable";

export default function RightBox() {
    return (
        <div className={styles.RightBox}>
            <Navbar />
            <div className={styles.heading}>
                <p>Holdings ({data.length})</p>
            </div>
            <HoldingTable />
            <div className="container p-0 m-0">
                <div className="row mx-3">
                    <div className={`p-3 col-4 ${styles.HoldingBoxLeft}`}>
                        <h1>
                            29,875.<sub>55</sub>
                        </h1>
                        <p>Total Investment</p>
                    </div>
                    <div className={`p-3 col-5 ${styles.HoldingBoxLeft}`}>
                        <h1>
                            31,428.<sub>95</sub>
                        </h1>
                        <p>Current Value</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
