import styles from "./Buypopup.module.css";
import { Link } from "react-router-dom";
import { GeneralContext } from "../GeneralContext/GeneralContext";
import { useContext, useState } from "react";
import axios from "axios";

export default function Buypopup({ uid }) {
    const [stockQty, setStockQty] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    const { closeBuyWindow } = useContext(GeneralContext);
    const [successMessage, setSuccessMessage] = useState('');
    const [alertMsg, setAlertMsg] = useState('alert alert-success');

    const handleCancelClick = () => {
        closeBuyWindow();
    };

    const handleBuyClick = () => {
        axios.post('http://localhost:3002/newOrder', {
            name: uid,
            qty: stockQty,
            price: stockPrice,
            mode: "Buy",
        })
            .then(() => {
                setSuccessMessage('Stock Purchased Successfully');
                setAlertMsg('alert alert-success');
                setTimeout(() => {
                    closeBuyWindow();
                }, 3000);
            })
            .catch((error) => {
                console.error("Error purchasing stock:", error);
                setSuccessMessage('An error occurred. Please try again.');
                setAlertMsg('alert alert-danger');
            });
    };

    return (
        <div className={styles.PopupBox}>
            <h4 style={{ fontWeight: "200" }}>Stock Name : {uid}</h4>
            <div className={styles.input}>
                <fieldset>
                    <legend>Qty.</legend>
                    <input
                        type="number"
                        name="qty"
                        id="qty"
                        onChange={(e) => setStockQty(e.target.value)}
                        value={stockQty}
                    />
                </fieldset>
                <fieldset>
                    <legend>Price.</legend>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        step="0.05"
                        onChange={(e) => setStockPrice(e.target.value)}
                        value={stockPrice}
                    />
                </fieldset>
            </div>
            {successMessage && (
                <div className={alertMsg} role="alert">
                    {successMessage}
                </div>
            )}
            <div className={styles.Buttons}>
                <div>
                    <span>Margin Required &nbsp; ₹140.65 </span>
                </div>
                <div>
                    <Link className="mx-2 btn btn-primary" onClick={handleBuyClick}>Buy</Link>
                    <Link className="mx-2 btn btn-dark" onClick={handleCancelClick}>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
}
