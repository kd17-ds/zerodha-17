import styles from "./RightBox.module.css";
import Navbar from "../Navbar/Navbar";
import HoldingTable from "./HoldingTable";
import { Holdingsdata } from "../data.js";


export default function RightBox() {
    return (
        <div className={styles.RightBox}>
            <Navbar />
            <div className={styles.heading}>
                <p>Holdings ({Holdingsdata.length})</p>
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
