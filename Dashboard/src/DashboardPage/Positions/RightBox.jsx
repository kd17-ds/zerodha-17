import styles from "./RightBox.module.css";
import Navbar from "../Navbar/Navbar";
import PositionTable from "./PositionTable";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from '../constants/constants';

export default function RightBox() {
    const [allPositions, setAllPositions] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/allPositions`).then((res) => {
            console.log(res.data);
            setAllPositions(res.data);
        })
            .catch((error) => console.error("Error fetching Positions:", error));
    }, []);

    return (
        <div className={styles.RightBox}>
            <Navbar />
            <div className={styles.heading}>
                <p>Positions ({allPositions.length})</p>
            </div>
            <PositionTable allPositions={allPositions} />
        </div>
    );
}
