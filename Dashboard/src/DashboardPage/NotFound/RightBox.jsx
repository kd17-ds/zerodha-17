import styles from "./RightBox.module.css";
import Navbar from "../Navbar/Navbar";

export default function RightBox() {
    return (
        <div className={styles.RightBox}>
            <Navbar />
            <div className={styles.heading}>
                <h3 style={{ overflowY: "hidden" }} className="mb-4">
                    This Page Does Not Exist
                </h3>
            </div>
        </div>
    );
}
