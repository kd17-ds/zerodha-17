import "./AwardsData.css";
import SubHeading from "./SubHeading";

export default function AwardsData() {
    return (
        <div className="home-awards-textBox">
            <SubHeading subHeadTxt={"Largest stock broker in India"} />
            <p className="mb-5">
                2+ million Zerodha clients contribute over 15% of all retail order
                volumes in India daiy bt trading and investing in:{" "}
            </p>
            <div className="row mb-4">
                <div className="col-6 p-0">
                    <ul>
                        <li>Futures and Options</li>
                        <li>Commodity Derivatives</li>
                        <li>Currency Derivatives</li>
                    </ul>
                </div>
                <div className="col-6  p-0">
                    <ul>
                        <li>Stocks & IPOs</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and Govt. Sequrities</li>
                    </ul>
                </div>
            </div>
            <img
                src="media/images/pressLogos.png"
                alt=""
                className="home-awards-textBox-img"
            />
        </div>
    );
}
