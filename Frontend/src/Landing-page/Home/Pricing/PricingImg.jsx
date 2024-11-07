import styles from "./PricingImg.module.css";

export default function PricingImg() {
    return (
        <div className={`${styles.PricingImgCont}`}>
            <div className="row ">
                <div
                    className={`${styles.PricingImg1} col-4  d-flex align-items-end  px-0`}
                >
                    <img
                        src="media/images/pricing0.svg"
                        alt=""
                        className={styles.PricingImg}
                    />
                    <p className={styles.PricingImgTxt}>Free account opening</p>
                </div>
                <div
                    className={`col-5 d-flex align-items-end ${styles.ImgCenter} px-0`}
                >
                    <img
                        src="media/images/pricingMF.svg"
                        alt=""
                        className={styles.PricingImg}
                    />
                    <p className={styles.PricingImgTxt}>
                        Free equity delivery and direct mutual funds
                    </p>
                </div>
                <div
                    className={`${styles.PricingImg1} col-3 d-flex align-items-end  px-0`}
                >
                    <img
                        src="media/images/intradayTrades.svg"
                        alt=""
                        className={styles.PricingImg}
                    />
                    <p className={styles.PricingImgTxt}>Intraday and F&O</p>
                </div>
            </div>
        </div>
    );
}
