import "./Pricing.css";
import PricingData from "./PricingData";
import PricingImg from "./PricingImg";

export default function Pricing() {
    return (
        <div className="container home-pricing-box px-5">
            <div className="row px-5">
                <div className="col-6 " style={{ width: "480px" }}>
                    <PricingData />
                </div>
                <div className="col-6 mt-5">
                    <PricingImg />
                </div>
            </div>
        </div>
    );
}
