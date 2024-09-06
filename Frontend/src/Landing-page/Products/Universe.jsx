import "./Universe.css";
export default function Universe() {
    return (
        <div className="container px-5 products-universe-box">
            <div className="row px-5 text-center products-universe-Innerbox">
                <h5 className="mb-5">
                    Want to know more about our technology stack? Check out the{" "}
                    <a href="">Zerodha.tech</a> blog.
                </h5>
                <h2 className="mt-5 mb-4">The Zerodha Universe</h2>
                <p className="mb-5">
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>
                <div className="row d-flex justify-content-evenly mb-5">
                    <div className="col-4 d-flex flex-column align-items-center product-universe-images">
                        <img src="media/images/zerodhaFundhouse.png" alt="" className="mb-4" style={{ width: "200px" }} />
                        <p >
                            Our asset management venture <br /> that is creating simple and
                            transparent index funds to help you save for your goals.
                        </p>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center product-universe-images">
                        <img src="media/images/sensibullLogo.svg" alt="" className="mb-4 mt-3" style={{ width: "230px" }} />
                        <p>
                            Options trading platform that lets you <br />
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center product-universe-images">
                        <img src="media/images/tijori.svg" alt="" className="mb-4" style={{ width: "150px" }} />
                        <p>
                            Investment research platform <br />
                            that offers detailed insights on stocks, <br />
                            sectors, supply chains, and more.
                        </p>
                    </div>
                </div>
                <div className="row d-flex justify-content-evenly mb-5">
                    <div className="col-4 d-flex flex-column align-items-center product-universe-images">
                        <img src="media/images/streakLogo.png" alt="" className="mb-4" style={{ width: "170px" }} />
                        <p>
                            Systematic trading platform <br />
                            that allows you to create and backtest <br />
                            strategies without coding.
                        </p>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center product-universe-images">
                        <img src="media/images/smallcaseLogo.png" alt="" className="mb-4" style={{ width: "210px" }} />
                        <p>
                            Thematic investing platform <br />
                            that helps you invest in diversified <br />
                            baskets of stocks on ETFs.
                        </p>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center product-universe-images">
                        <img src="media/images/dittoLogo.png" alt="" className="mb-4" style={{ width: "150px" }} />
                        <p>
                            Personalized advice on life <br />
                            and health insurance. No spam <br />
                            and no mis-selling.
                        </p>
                    </div>
                </div>
                <button className="home-hero-btn">Sign up for free</button>
            </div>
        </div>
    );
}
