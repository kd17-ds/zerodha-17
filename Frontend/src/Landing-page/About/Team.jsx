import "./Team.css";
export default function Team() {
    return (
        <div className="container px-5 mb-5">
            <div className="row px-5 text-center ">
                <h2 className="mb-5">People</h2>
                <div className="col-6 about-team-introBox">
                    <img
                        src="media/images/nithinKamath.jpg"
                        alt=""
                        className="mb-4 rounded-circle about-team-image"
                    />
                    <h5 className="about-team-name mb-3">Nithin Kamath</h5>
                    <p className="about-team-designation">Founder, CEO</p>
                </div>
                <div className="col-6 about-team-para ">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                        hurdles he faced during his decade long stint as a trader. Today,
                        Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on <a href="">Homepage</a> / <a href="">TradingQnAs</a> /{" "}
                        <a href="">Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
