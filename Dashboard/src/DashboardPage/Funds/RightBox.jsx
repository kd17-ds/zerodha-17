import styles from "./RightBox.module.css";
import Navbar from "../Navbar/Navbar";

export default function RightBox() {
    return (
        <div className={styles.RightBox}>
            <Navbar />
            <div className={styles.fundBtns}>
                <span>Instant, zero-cost fund transfers with upi</span>
                <button style={{ backgroundColor: "green" }} className={styles.btn}>
                    Add funds
                </button>
                <button style={{ backgroundColor: "blue" }} className={styles.btn}>
                    Withdraw
                </button>
            </div>
            <div className={styles.EquityBox}>
                <p>
                    <i class="fa-solid fa-circle-info"></i> &nbsp; Equity
                </p>
                <div className={styles.InnerEquity}>
                    <div className={styles.paraBox}>
                        <div className={styles.textBox}>
                            <p>Available margin</p>
                            <p>Used margin</p>
                            <p>Available cash</p>
                        </div>
                        <div style={{ fontSize: "17px" }} className={styles.Numbox}>
                            <p style={{ color: "blue" }}>4,043.10</p>
                            <p>3.757.30</p>
                            <p>4,043.10</p>
                        </div>
                    </div>
                    <div className={styles.paraBox}>
                        <div className={styles.textBox}>
                            <p>Opening Balance</p>
                            <p>Opening Balance</p>
                            <p>Payin</p>
                            <p>SPAN</p>
                            <p>Delivery Margin</p>
                            <p>Exposure</p>
                            <p>Options Preimium</p>
                        </div>
                        <div className={styles.Numbox}>
                            <p>4,043.10</p>
                            <p>3.736.40</p>
                            <p>4,064.00</p>
                            <p>0.00</p>
                            <p>0.00</p>
                            <p>0.00</p>
                            <p>0.00</p>
                        </div>
                    </div>
                    <div style={{ border: "None" }} className={styles.paraBox}>
                        <div className={styles.textBox}>
                            <p>Collateral (Liquid funds)</p>
                            <p>Collateral (Equity)</p>
                            <p>Total Collateral</p>
                        </div>
                        <div className={styles.Numbox}>
                            <p>0.00</p>
                            <p>0.00</p>
                            <p>0.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
