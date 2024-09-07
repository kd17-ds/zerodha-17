import "./Hero.css";
import SignUpButton from "./SignUpButton";
import MainHeading from "./MainHeading";

export default function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="HeroImg"
          className="mb-5 home-hero-img"
        />
        <MainHeading headingTxt={"Invest in everything"} />
        <p className="home-hero-para">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <SignUpButton btnText={"Sign up for free"} />
      </div>
    </div>
  );
}
