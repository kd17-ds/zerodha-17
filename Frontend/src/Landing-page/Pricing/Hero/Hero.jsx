import styles from "./Hero.module.css";
import MainHeading from "../../Home/Hero/MainHeading";

export default function Hero() {
    return (
        <div className={styles.HeroBox}>
            <div className={`row text-center ${styles.HeroHeadBox}`}>
                <MainHeading headingTxt={"Pricing"} />
                <p>Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>
            <div className={`row text-center ${styles.HeroImgBox}`}>
                <div className="col-md-4 col-12">
                    <img
                        src="media/images/pricing0.svg"
                        alt=""
                        className={styles.HeroImages}
                    />
                    <h2 className={`${styles.HeroImgTitle} mt-3 mb-4`}>
                        Free equity delivery
                    </h2>
                    <p>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹
                        0 brokerage.
                    </p>
                </div>
                <div className="col-md-4 col-12">
                    <img
                        src="media/images/intradayTrades.svg"
                        alt=""
                        className={styles.HeroImages}
                    />
                    <h2 className={`${styles.HeroImgTitle} mt-3 mb-4`}>
                        Intraday and F&O trades
                    </h2>
                    <p>
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                        intraday trades across equity, currency, and commodity trades. Flat
                        ₹20 on all option trades.
                    </p>
                </div>
                <div className="col-md-4 col-12">
                    <img
                        src="media/images/pricingMF.svg"
                        alt=""
                        className={styles.HeroImages}
                    />
                    <h2 className={`${styles.HeroImgTitle} mt-3 mb-4`}>Free direct MF</h2>
                    <p>
                        All direct mutual fund investments are absolutely free — ₹ 0
                        commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}
