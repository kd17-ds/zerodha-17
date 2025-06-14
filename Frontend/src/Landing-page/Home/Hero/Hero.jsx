import React from "react";
import styles from "./Hero.module.css";
import SignUpButton from "./SignUpButton";
import MainHeading from "./MainHeading";

export default function Hero() {
  return (
    <div className={`${styles.Container}`}>
      <div className="text-center">
        <img
          src="media/images/homeHero.png"
          alt="HeroImg"
          className={`mb-5 ${styles.HeroImg}`}
        />
        <MainHeading headingTxt={"Invest in everything"} />
        <p className={styles.HeroPara}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <SignUpButton btnText={"Sign up for free"} />
      </div>
    </div>
  );
}
