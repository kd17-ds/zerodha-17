import styles from "./Sellpopup.module.css";
import { Link } from "react-router-dom";
import { GeneralContext } from "../GeneralContext/GeneralContext";
import { useContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from '../constants/constants';
import { useNavigate } from "react-router-dom";

export default function Sellpopup({ uid }) {
    const navigate = useNavigate();
    const { closeSellWindow } = useContext(GeneralContext);
    const [successMessage, setSuccessMessage] = useState('');
    const [alertMsg, setAlertMsg] = useState('alert alert-success');

    const handleCancelClick = () => {
        closeSellWindow();
    };
    const handleSellClick = () => {
        axios.delete(`${BASE_URL}/sellOrder`, {
            data: {
                name: uid,
                mode: "SELL"
            }
        })
            .then(() => {
                setSuccessMessage('Stock Sold Successfully');
                setAlertMsg('alert alert-success');
                setTimeout(() => {
                    closeSellWindow();
                }, 3000);
                navigate("/holdings");
            })
            .catch((error) => {
                console.error("Error Selling stock:", error);
                setSuccessMessage('An error occurred. Please try again.');
                setAlertMsg('alert alert-danger');
            });
    };

    return (
        <div className={styles.PopupBox}>
            <h4 style={{ fontWeight: "200", marginBottom: "30px" }}>Stock Name : {uid}</h4>
            {successMessage && (
                <div className={alertMsg} role="alert">
                    {successMessage}
                </div>
            )}
            <div className={styles.Buttons}>
                <Link className="mx-2 btn btn-primary" onClick={handleSellClick}>Sell</Link>
                <Link className="mx-2 btn btn-dark" onClick={handleCancelClick}>
                    Cancel
                </Link>
            </div>
        </div>
    );
}
