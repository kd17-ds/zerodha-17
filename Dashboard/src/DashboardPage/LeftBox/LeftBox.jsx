import styles from "./LeftBox.module.css";
import { Link } from "react-router-dom";

function StockRow({ name, change, price }) {
    const isPositive = parseFloat(change) > 0;
    const changeColor = isPositive ? "green" : "red";
    const arrow = isPositive ? "up" : "down";

    return (
        <div className={`row flex align-items-center ${styles.LeftBoxes}`}>
            <div className={`col-6 ${styles.leftboxtxt}`}>
                <strong>&nbsp; {name}</strong>
            </div>
            <div className={`col-6 text-end ${styles.leftboxdigit}`}>
                <span>
                    {change}% &nbsp;
                    <i
                        style={{ color: changeColor }}
                        className={`fa-solid fa-angle-${arrow}`}
                        aria-label={isPositive ? "Up" : "Down"}
                    ></i>
                    &nbsp; <span className={styles.reddish}>{price}</span>
                </span>
            </div>
        </div>
    );
}

export default function LeftBox() {
    const stockData = [
        { name: "INFY", change: "-1.60", price: "1555.45" },
        { name: "ONGC", change: "-0.09", price: "116.8" },
        { name: "TCS", change: "-0.25", price: "3194.8" },
        { name: "KPITTECH", change: "3.54", price: "266.45" },
        { name: "QUICKHEAL", change: "-0.15", price: "308.55" },
        { name: "WIPRO", change: "0.32", price: "577.75" },
        { name: "M&M", change: "-0.01", price: "779.8" },
        { name: "RELIANCE", change: "1.44", price: "2112.4" },
        { name: "HUL", change: "1.04", price: "514.4" },
    ];

    return (
        <div className={styles.LeftBox}>
            <div className={`flex row align-items-center ${styles.LeftTopBox}`}>
                <div className="col-6 text-center">
                    <span className={styles.NifSen}>
                        <b>NIFTY 50</b>
                    </span>
                    <span className={styles.CentDig}>
                        <b>0.00</b>
                    </span>
                    <span className={styles.RightDig}>
                        <b>0</b>
                    </span>
                </div>
                <div className="col-6 text-center">
                    <span className={styles.NifSen}>
                        <b>SENSEX</b>
                    </span>
                    <span className={styles.CentDig}>
                        <b>0.00</b>
                    </span>
                    <span className={styles.RightDig}>
                        <b>0</b>
                    </span>
                </div>
            </div>

            <div className={`row flex align-items-center ${styles.LeftBoxes}`}>
                <div className={`col-9 ${styles.left1boxtxt}`}>
                    <strong>
                        &nbsp;&nbsp; Search eg: infy, bse, nifty fut weekly, gold mcx
                    </strong>
                </div>
                <div className={`col-3 text-end ${styles.leftboxdigit}`}>
                    <span>9 / 50</span>
                </div>
            </div>

            {stockData.map((stock, index) => (
                <StockRow key={index} {...stock} />
            ))}

            <div className={styles.LeftBoxFooter}>
                <div className={styles.Pagechange}>
                    <div className={styles.PageNum}>1</div>
                    <div className={styles.PageNum}>2</div>
                    <div className={styles.PageNum}>3</div>
                    <div className={styles.PageNum}>4</div>
                    <div className={styles.PageNum}>5</div>
                </div>
                <div className={styles.Settings}><i class="fa-solid fa-gear"></i></div>
            </div>
        </div>
    );
}
