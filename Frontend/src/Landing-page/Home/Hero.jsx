import "./Hero.css";

export default function Hero() {
  return (
    <div className="container  p-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="HeroImg"
          className="mb-5 home-hero-img"
        />
        <h1 className="mt-4 mb-3 home-hero-heading">Invest in everything</h1>
        <p className="home-hero-para">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="home-hero-btn">Sign up for free</button>
      </div>
    </div>
  );
}
