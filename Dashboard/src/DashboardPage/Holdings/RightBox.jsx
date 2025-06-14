import styles from "./RightBox.module.css";
import Navbar from "../Navbar/Navbar";
import HoldingTable from "./HoldingTable";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { VerticalChart } from "../Graph/VerticalChart";
import { BASE_URL } from '../constants/constants';

export default function RightBox() {
    const [allHoldings, setAllHoldings] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/allHoldings`).then((res) => {
            console.log(res.data);
            setAllHoldings(res.data);
        })
            .catch((error) => console.error("Error fetching holdings:", error));
    }, []);

    const labels = allHoldings.map((subArr) => subArr["instrument"]);

    const data = {
        labels,
        datasets: [
            {
                label: 'Stock Price',
                data: allHoldings.map((stock) => stock.ltp),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <div className={styles.RightBox}>
            <Navbar />
            <div className={styles.heading}>
                <p>Holdings ({allHoldings.length})</p>
            </div>
            <HoldingTable allHoldings={allHoldings} />
            <div className="container p-0 m-0">
                <div className="row mx-3">
                    <div className={`p-3 col-4 ${styles.HoldingBoxLeft}`}>
                        <h1>
                            29,875.<sub>55</sub>
                        </h1>
                        <p>Total Investment</p>
                    </div>
                    <div className={`p-3 col-5 ${styles.HoldingBoxLeft}`}>
                        <h1>
                            31,428.<sub>95</sub>
                        </h1>
                        <p>Current Value</p>
                    </div>
                </div>
            </div>
            <VerticalChart data={data} />
        </div>
    );
}
