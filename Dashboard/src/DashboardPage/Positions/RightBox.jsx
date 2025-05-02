import styles from "./RightBox.module.css";
import Navbar from "../Navbar/Navbar";
import PositionTable from "./PositionTable";

export default function RightBox() {
    return (
        <div className={styles.RightBox}>
            <Navbar />
            <div className={styles.heading}>
                <p>Positions (2)</p>
            </div>
            <PositionTable />
        </div>
    );
}
