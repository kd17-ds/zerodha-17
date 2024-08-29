import "./Awards.css";

export default function Awards() {
  return (
    <div className="container home-awards-box px-5">
      <div className="row px-5">
        <div className="col-6">
          <img src="media/images/largestBroker.svg" alt="" />
        </div>

        <div className="col-6 home-awards-textBox">
          <h2 className="mt-5 mb-4">Largest stock broker in India</h2>
          <p className="mb-5">
            2+ million Zerodha clients contribute over 15% of all retail order
            volumes in India daiy bt trading and investing in:{" "}
          </p>
          <div className="row mb-4">
            <div className="col-6 p-0">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity Derivatives</li>
                <li>Currency Derivatives</li>
              </ul>
            </div>
            <div className="col-6  p-0">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Sequrities</li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/pressLogos.png"
            alt=""
            className="home-awards-textBox-img"
          />
        </div>
      </div>
    </div>
  );
}
