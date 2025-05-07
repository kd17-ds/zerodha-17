import styles from "./RightBox.module.css";
import Navbar from "../Navbar/Navbar";
import PositionTable from "./PositionTable";
import { positionsData } from "../data.js";

export default function RightBox() {
    return (
        <div className={styles.RightBox}>
            <Navbar />
            <div className={styles.heading}>
                <p>Positions ({positionsData.length})</p>
            </div>
            <PositionTable />
        </div>
    );
}
