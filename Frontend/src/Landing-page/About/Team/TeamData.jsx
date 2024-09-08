import "./TeamData.css";
import Links from "../../Home/Assurance/Links";

export default function TeamData() {
    return (
        <div className="about-team-para">
            <p>
                D.S bootstrapped and founded Zerodha in 2010 to overcome the <br />hurdles he
                faced during his decade long stint as a trader. Today, <br /> Zerodha has
                changed the landscape of the Indian broking industry.
            </p>
            <p>
                He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
                and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
                Connect on <Links linkTxt={"Homepage"} /> /{" "}
                <Links linkTxt={"TradingQnA"} /> / <Links linkTxt={"Twitter"} />
            </p>
        </div>
    );
}
