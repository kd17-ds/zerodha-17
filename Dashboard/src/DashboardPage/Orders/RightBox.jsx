import styles from "./RightBox.module.css";
import Navbar from "../Navbar/Navbar";

export default function RightBox() {
    return (
        <div className={styles.RightBox}>
            <Navbar />
            <div className={styles.hero}>
                <i class="fa-solid fa-book-open"></i>
                <p>You Haven't placed any orders today</p>
                <button className={styles.btn}> Get Started </button>
            </div>
        </div>
    );
}
