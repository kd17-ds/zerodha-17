import styles from "./SignUp.module.css";
import Links from "../Home/Assurance/Links";
import MainHeading from "../Home/Hero/MainHeading";

export default function Signup() {
    return (
        <div className={styles.HeroHeadBox}>
            <div className={`row  text-center ${styles.HeroInBox}`}>
                <MainHeading headingTxt={"Zerodha Dashboard"} />
                <p className={styles.HeadboxPara}>
                    Sleek, modern, and intutive tading platform
                </p>
                <p1>
                    Check out our{" "}
                    <Links
                        linkTxt={
                            <a href="https://zerodha-17-dashboard.onrender.com/">
                                Dashboard <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        }
                    />
                </p1>
            </div>
        </div>
    )
}
