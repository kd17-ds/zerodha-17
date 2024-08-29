import "./Pricing.css";

export default function Pricing() {
    return (
        <div className="container home-pricing-box px-5">
            <div className="row px-5">
                <div className="col-6 home-pricing-txtBox">
                    <h2>Unbeatable pricing</h2>
                    <p className="mt-4 home-pricing-para">
                        We pioneered the concept of discount broking and price transparency
                        in India. Flat fees and no hidden charges.
                    </p>
                    <a href="">
                        See pricing <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <div className="col-6 home-pricing-imgBox mt-5">
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
            </div>
        </div>
    );
}
