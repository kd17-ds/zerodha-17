import "./Hero.css";

export default function Hero() {
    return (
        <div className="px-5 support-HeroBox">
            <div className="container px-5">
                <div className="row">
                    <div className="row support-HeroBox-topPart">
                        <div className="col-10 support-HeroBox-topPart-heading">
                            <h3>
                                <a href="">Support Portal</a>
                            </h3>
                        </div>
                        <div className="col-2 text-center support-HeroBox-topPart-link">
                            <a href="">Track tickets</a>
                        </div>
                    </div>
                    <div className="row support-HeroBox-bottomPart">
                        <div className="col-6 support-HeroBox-bottomPart-left mt-5">
                            <h4>
                                Search for an answer or browse help topics to create a ticket
                            </h4>
                            <form>
                                <div class="mb-3 mt-4 support-HeroBox-bottomPart-left-inputBox d-flex align-items-center">
                                    <input
                                        style={{ border: "none", boxShadow: "none" }}
                                        type="text"
                                        class="form-control"
                                        placeholder="Eg: how do i activate F & O, why is my order getting rejected ... "
                                    />
                                    <i
                                        style={{ width: "25px", fontSize: "17px" }}
                                        class="fa-solid fa-magnifying-glass"
                                    ></i>
                                </div>
                            </form>
                            <div className="support-HeroBox-bottomPart-link">
                                <a href="">Track account opening</a>
                                <a href=""> Track segment activation</a>
                                <a href=""> Intraday margins</a>
                                <div className="mt-3">
                                    {" "}
                                    <a href="">Kite user manual</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 p-0 support-HeroBox-bottomPart-right mt-2">
                            <h3>Featured</h3>
                            <p className="mt-3">
                                Due to the settlement holiday on Monday, your account balance
                                will not include the following credits on 16 September, 2024:
                            </p>
                            <ul className="px-2">
                                <li>
                                    Intraday profits made in the Equity segment on Sept 13, 2024.
                                </li>
                                <li>
                                    Credits from trades made in NFO, Currency, and Commodity
                                    derivatives on Sept 13, 2024. This will include options
                                    premium credits, futures M2M profits, etc.{" "}
                                    <a href="">Read more</a>.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
