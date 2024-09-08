import "./Hero.css";
import MainHeading from "../../Home/Hero/MainHeading";
import Links from "../../Home/Assurance/Links";

export default function Hero() {
    return (
        <div className="container products-hero-headbox px-5">
            <div className="row px-5 text-center products-hero-innerbox">
                <MainHeading headingTxt={"Technology"} />
                <p className="products-hero-headbox-para">
                    Sleek, modern, and intutive tading platforms
                </p>
                <p1>
                    Check out our{" "}
                    <Links
                        linkTxt={
                            <>
                                investment offerings <i className="fa-solid fa-arrow-right"></i>
                            </>
                        }
                    />
                </p1>
            </div>
        </div>
    );
}
