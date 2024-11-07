import styles from "./Pricing.module.css";
import PricingData from "./PricingData";
import PricingImg from "./PricingImg";

export default function Pricing() {
    return (
        <div className={styles.PricingBox}>
            <div className="row">
                <div className={`col-md-6 col-12 ${styles.PricingTxtBox}`}>
                    <PricingData />
                </div>
                <div className={`col-md-6 col-12 ${styles.PricingImgBox}`}>
                    <PricingImg />
                </div>
            </div>
        </div>
    );
}
