import styles from "./Brokrage.module.css";
import Links from "../../Home/Assurance/Links";

export default function Brokrage() {
    return (
        <div className={styles.BrokrageBox}>
            <div className="row ">
                <div className="col-5  text-center mb-4">
                    <Links
                        linkTxt={
                            <span style={{ fontSize: "21px", fontFamily: "Arial" }}>
                                Brokerage calculator
                            </span>
                        }
                    />
                </div>
                <div className="col-2  "></div>
                <div className="col-5  text-center mb-4">
                    <Links
                        linkTxt={
                            <span style={{ fontSize: "21px", fontFamily: "Arial" }}>
                                List of charges
                            </span>
                        }
                    />
                </div>
                <div className={`row  mt-3  ${styles.BrokragePoints}`}>
                    <ul>
                        <li>
                            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                            GST per order.
                        </li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>
                            For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                            equity (whichever is lower).
                        </li>
                        <li>
                            For NRI account (PIS), 0.5% or ₹200 per executed order for equity
                            (whichever is lower).
                        </li>
                        <li>
                            If the account is in debit balance, any order placed will be
                            charged ₹40 per executed order instead of ₹20 per executed order.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
