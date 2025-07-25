import styles from "./RightBox.module.css";
import Navbar from "../Navbar/Navbar";
import OrdersTable from "./OrdersTable";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/constants';

export default function RightBox() {
    const [allOrders, setallOrders] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/allOrders`).then((res) => {
            console.log(res.data);
            setallOrders(res.data);
        })
            .catch((error) => console.error("Error fetching Orders:", error));
    }, []);

    return (
        <div className={styles.RightBox}>
            <Navbar />
            <div className={styles.heading}>
                <p>Orders ({allOrders.length})</p>
            </div>
            <OrdersTable allOrders={allOrders} />
        </div>
    );
}
