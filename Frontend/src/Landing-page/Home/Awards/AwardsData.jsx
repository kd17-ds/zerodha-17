import styles from "./AwardsData.module.css";
import SubHeading from "./SubHeading";

export default function AwardsData() {
    return (
        <div className={styles.AwardsTxtBox}>
            <SubHeading subHeadTxt={"Largest stock broker in India"} />
            <p className="mb-5">
                2+ million Zerodha clients contribute over 15% of all retail order
                volumes in India daiy by trading and investing in:{" "}
            </p>
            <div className="row mb-4">
                <div className="col-7 col-md-6 p-0">
                    <ul className={styles.List1}>
                        <li>Futures and Options</li>
                        <li>Commodity Derivatives</li>
                        <li>Currency Derivatives</li>
                    </ul>
                </div>
                <div className="col-5 col-md-6 p-0">
                    <ul className={styles.List2}>
                        <li>Stocks & IPOs</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and Govt. Sequrities</li>
                    </ul>
                </div>
            </div>
            <img
                src="media/images/pressLogos.png"
                alt=""
                className={styles.AwardsTxtBoxImg}
            />
        </div>
    );
}
