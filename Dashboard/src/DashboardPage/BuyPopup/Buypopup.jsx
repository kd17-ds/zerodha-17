import styles from "./Buypopup.module.css";
import { Link } from "react-router-dom";
import { GeneralContext } from "../GeneralContext/GeneralContext";
import { useContext } from "react";

export default function Buypopup({ uid }) {
    const { closeBuyWindow } = useContext(GeneralContext);
    const handleCancelClick = () => {
        closeBuyWindow();
    };

    return (
        <div className={styles.PopupBox}>
            <div className={styles.input}>
                <fieldset>
                    <legend>Qty.</legend>
                    <input type="number" name="qty" id="qty" />
                </fieldset>
                <fieldset>
                    <legend>Price.</legend>
                    <input type="number" name="price" id="price" step="0.05" />
                </fieldset>
            </div>
            <div className={styles.Buttons}>
                <div>
                    <span>Margin Required  &nbsp; ₹140.65 </span>
                </div>
                <div>
                    <Link className=" mx-2 btn btn-primary">Buy</Link>
                    <Link className="mx-2 btn btn-dark" onClick={handleCancelClick}>Cancel</Link>
                </div >
            </div>
        </div>
    );
}