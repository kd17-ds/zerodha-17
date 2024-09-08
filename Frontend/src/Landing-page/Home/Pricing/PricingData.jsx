import "./PricingData.css";
import SubHeading from "../Awards/SubHeading";
import Links from "../Assurance/Links";

export default function PricingData() {
    return (
        <div className="home-pricing-txtBox">
            <SubHeading subHeadTxt={"Unbeatable pricing"} />
            <p className="mt-4 home-pricing-para">
                We pioneered the concept of discount broking and price transparency in
                India. Flat fees and no hidden charges.
            </p>
            <Links
                linkTxt={
                    <>
                        See pricing <i className="fa-solid fa-arrow-right"></i>
                    </>
                }
            />
        </div>
    );
}
