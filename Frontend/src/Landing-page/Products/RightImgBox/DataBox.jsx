import SubHeading from "../../Home/Awards/SubHeading";
import Links from "../../Home/Assurance/Links";

export default function RightImg({ productName, productDescr, link }) {
    return (
        <>
            <SubHeading subHeadTxt={productName} />
            <p>{productDescr}</p>
            <Links
                linkTxt={
                    <>
                        {link} <i className="fa-solid fa-arrow-right"></i>
                    </>
                }
            />
        </>
    );
}
