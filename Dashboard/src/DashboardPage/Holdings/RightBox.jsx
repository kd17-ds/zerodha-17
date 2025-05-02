import styles from "./RightBox.module.css";
import Navbar from "../Navbar/Navbar";
import HoldingTable from "./HoldingTable";

export default function RightBox() {
    return (
        <div className={styles.RightBox}>
            <Navbar />
            <div className={styles.heading}>
                <p >
                    Holdings (13)
                </p>
            </div>
            <HoldingTable />
        </div>
    );
}
