import styles from "./EducationData.module.css";
import SubHeading from "../Awards/SubHeading";
import Links from "../Assurance/Links";

export default function EducationData() {
    return (
        <div className={`${styles.Educationtxt}`}>
            <SubHeading subHeadTxt={"Free and open market education"} />
            <p className={`${styles.Educationtxt}`}>
                Varsity, the largest online stock market education book in the world
                covering everything from the basics to advanced trading.
            </p>
            <Links
                linkTxt={
                    <>
                        Varsity <i className="fa-solid fa-arrow-right"></i>
                    </>
                }
            />
            <p className={`${styles.Educationtxt} mt-4`}>
                TradingQ&A, the most active trading and investment community in India
                for all your market related queries.
            </p>
            <Links
                linkTxt={
                    <>
                        TradingQ&A <i className="fa-solid fa-arrow-right"></i>
                    </>
                }
            />
        </div>
    );
}
