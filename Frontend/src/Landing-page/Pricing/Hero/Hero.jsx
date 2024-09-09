import "./Hero.css";
import MainHeading from "../../Home/Hero/MainHeading";

export default function Hero() {
    return (
        <div className="container px-5">
            <div className="row px-5 text-center Pricing-hero-headBox">
                <MainHeading headingTxt={"Pricing"} />
                <p>Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>
            <div className="row px-5 text-center Pricing-hero-Imgbox">
                <div className="col-4">
                    <img
                        src="media/images/pricing0.svg"
                        alt=""
                        className="pricing-hero-images"
                    />
                    <h2 className="Pricing-hero-Imgtitle mt-3 mb-4">
                        Free equity delivery
                    </h2>
                    <p>
                        All equity delivery investments (NSE, BSE), <br /> are absolutely
                        free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="col-4">
                    <img
                        src="media/images/intradayTrades.svg"
                        alt=""
                        className="pricing-hero-images"
                    />
                    <h2 className="Pricing-hero-Imgtitle mt-3 mb-4">
                        Intraday and F&O trades
                    </h2>
                    <p>
                        Flat ₹ 20 or 0.03% (whichever is lower) <br /> per executed order on
                        intraday trades <br /> across equity, currency, and commodity <br />{" "}
                        trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className="col-4">
                    <img
                        src="media/images/pricingMF.svg"
                        alt=""
                        className="pricing-hero-images"
                    />
                    <h2 className="Pricing-hero-Imgtitle mt-3 mb-4">Free direct MF</h2>
                    <p>
                        All direct mutual fund investments are absolutely free — ₹ 0
                        commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}
