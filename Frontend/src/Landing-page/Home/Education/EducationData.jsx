import "./EducationData.css";
import SubHeading from "../Awards/SubHeading";
import Links from "../Assurance/Links";

export default function EducationData() {
    return (
        <div className="home-education-txtbox mt-5">
            <SubHeading subHeadTxt={"Free and open market education"} />
            <p className="mt-4 home-education-txt">
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
            <p className="mt-4 home-education-txt">
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
