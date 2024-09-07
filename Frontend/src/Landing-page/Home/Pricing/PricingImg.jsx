import "./PricingImg.css";

export default function PricingImg() {
    return (
        <div className="home-pricing-imgBox mt-5">
            <div className="row">
                <div className="col-4 d-flex align-items-end  px-0">
                    <img
                        src="media/images/pricing0.svg"
                        alt=""
                        className="home-pricing-priceImg"
                    />
                    <p className="home-pricing-imgtxt">Free account opening</p>
                </div>
                <div className="col-5 d-flex align-items-end img-center px-0">
                    <img
                        src="media/images/pricingMF.svg"
                        alt=""
                        className="home-pricing-priceImg"
                    />
                    <p className="home-pricing-imgtxt">
                        Free equity delivery and direct mutual funds
                    </p>
                </div>
                <div className="col-3 d-flex align-items-end  px-0">
                    <img
                        src="media/images/intradayTrades.svg"
                        alt=""
                        className="home-pricing-priceImg"
                    />
                    <p className="home-pricing-imgtxt">Intraday and F&O</p>
                </div>
            </div>
        </div>
    );
}
