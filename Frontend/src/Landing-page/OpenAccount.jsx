import styles from "./OpenAccount.module.css";
import SignUpButton from "./Home/Hero/SignUpButton";
import SubHeading from "./Home/Awards/SubHeading";

export default function OpenAccount() {
    return (
        <div className="container  p-5">
            <div className="row text-center">
                <SubHeading subHeadTxt={"Open a Zerodha account"} />
                <p>
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
                    F&O trades.
                </p>
                <SignUpButton btnText={"Sign up for free"} />
            </div>
        </div>
    );
}
