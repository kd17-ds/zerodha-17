import styles from "./Hero.module.css";
import MainHeading from "../../Home/Hero/MainHeading";
import Links from "../../Home/Assurance/Links";

export default function Hero() {
    return (
        <div className={styles.HeroHeadBox}>
            <div className={`row  text-center ${styles.HeroInBox}`}>
                <MainHeading headingTxt={"Zerodha Products"} />
                <p className={styles.HeadboxPara}>
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
