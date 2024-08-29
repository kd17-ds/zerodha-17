import "./Education.css";

export default function Education() {
    return (
        <div className="container home-education-box px-5">
            <div className="row px-5">
                <div className="col-6">
                    <img
                        src="/media/images/education.svg"
                        alt=""
                        className="home-education-img"
                    />
                </div>

                <div className="col-6 home-education-txtbox mt-5">
                    <h2>Free and open market education</h2>
                    <p className="mt-4 home-education-txt">
                        Varsity, the largest online stock market education book in the world
                        covering everything from the basics to advanced trading.
                    </p>
                    <a href="">
                        Varsity <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <p className="mt-4 home-education-txt">
                        TradingQ&A, the most active trading and investment community in
                        India for all your market related queries.
                    </p>
                    <a href="">
                        TradingQ&A <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
