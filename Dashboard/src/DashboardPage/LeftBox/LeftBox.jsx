import styles from "./LeftBox.module.css";
import { Tooltip, Grow } from "@mui/material";
import { useState } from "react";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import { stockData } from "../data.js";
import { GeneralContext } from "../GeneralContext/GeneralContext.jsx";
import { useContext } from "react";
import { DoghnutChart } from "../Graph/DoghnutChart.jsx";

function StockRow({ name, change, price }) {
    const [showWatchListActions, setshowWatchListActions] = useState(false);
    const isPositive = parseFloat(change) > 0;
    const changeColor = isPositive ? "green" : "red";
    const arrow = isPositive ? "up" : "down";

    const handleMouseOver = (e) => {
        setshowWatchListActions(true);
    };
    const handleMouseLeave = (e) => {
        setshowWatchListActions(false);
    };
    return (
        <div
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className="container p-0 m-0 position-relative"
        >
            <div className={`row flex align-items-center ${styles.LeftBoxes}`}>
                <div className={`px-0 col-6 ${styles.leftboxtxt}`}>
                    <strong>&nbsp; {name}</strong>
                </div>
                <div className={`col-6 text-end ${styles.leftboxdigit}`}>
                    <span>
                        {change}% &nbsp;
                        <i
                            style={{ color: changeColor }}
                            className={`fa-solid fa-angle-${arrow}`}
                        ></i>
                        &nbsp;
                        <span className={styles.reddish}>{price}</span>
                    </span>
                </div>
            </div>

            {showWatchListActions && (
                <div className={styles.actionWrapper}>
                    <WatchListActions uid={name} />
                </div>
            )}
        </div>
    );
}

const labels = stockData.map((subArr) => subArr["name"]);
const data = {
    labels,
    datasets: [
        {
            label: "Price",
            data: stockData.map((stock) => stock.price),
            backgroundColor: [
                "rgba(255, 99, 132,0.5)",
                "rgba(54, 162, 235,0.5)",
                "rgba(255, 206, 86,0.5)",
                "rgba(75, 192, 192,0.5)",
                "rgba(153, 102, 255,0.5)",
                "rgba(255, 159, 64,0.5)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

export default function LeftBox() {
    return (
        <div className={`container p-0 m-0 ${styles.LeftBox}`}>
            <div className={`flex row align-items-center ${styles.LeftTopBox}`}>
                <div className="col-6 text-center">
                    <span className={styles.NifSen}>
                        <b>NIFTY 50</b>
                    </span>
                    <span className={styles.CentDig}>
                        <b>0.00</b>
                    </span>
                    <span className={styles.RightDig}>
                        <b>0</b>
                    </span>
                </div>
                <div className="col-6 text-center">
                    <span className={styles.NifSen}>
                        <b>SENSEX</b>
                    </span>
                    <span className={styles.CentDig}>
                        <b>0.00</b>
                    </span>
                    <span className={styles.RightDig}>
                        <b>0</b>
                    </span>
                </div>
            </div>
            <div className="container p-0 m-0">
                <div className={`row flex align-items-center ${styles.LeftBoxes}`}>
                    <div className={`px-0 col-9 ${styles.left1boxtxt}`}>
                        <strong>
                            &nbsp;&nbsp; Search eg: infy, bse, nifty fut weekly, gold mcx
                        </strong>
                    </div>
                    <div className={`col-3 text-end ${styles.leftboxdigit}`}>
                        <span>{stockData.length}</span>
                    </div>
                </div>
            </div>

            {stockData.map((stock, index) => (
                <StockRow key={index} {...stock} />
            ))}

            <DoghnutChart data={data} />

            <div className={styles.LeftBoxFooter}>
                <div className={styles.Pagechange}>
                    <div className={styles.PageNum}>1</div>
                    <div className={styles.PageNum}>2</div>
                    <div className={styles.PageNum}>3</div>
                    <div className={styles.PageNum}>4</div>
                    <div className={styles.PageNum}>5</div>
                </div>
                <div className={styles.Settings}>
                    <i class="fa-solid fa-gear"></i>
                </div>
            </div>
        </div>
    );
}

const WatchListActions = ({ uid }) => {
    const { openBuyWindow } = useContext(GeneralContext);
    const { openSellWindow } = useContext(GeneralContext);
    const handleOpenClick = () => {
        console.log("Clicked Buy", uid);
        openBuyWindow(uid);
    };
    const handleSellClick = () => {
        console.log("Clicked Sell", uid);
        openSellWindow(uid);
    };
    return (
        <span className={styles.actions}>
            <Tooltip title="Buy (B)" arrow TransitionComponent={Grow}>
                <button onClick={handleOpenClick} className={styles.buy}>
                    Buy
                </button>
            </Tooltip>
            <Tooltip title="Sell (S)" arrow TransitionComponent={Grow}>
                <button onClick={handleSellClick} className={styles.sell}>
                    Sell
                </button>
            </Tooltip>
            <Tooltip title="Analytics (A)" arrow TransitionComponent={Grow}>
                <button className={styles.action}>
                    <BarChartOutlined className={styles.icon} />
                </button>
            </Tooltip>
            <Tooltip title="More" arrow TransitionComponent={Grow}>
                <button className={styles.action}>
                    <MoreHoriz className={styles.icon} />
                </button>
            </Tooltip>
        </span>
    );
};
