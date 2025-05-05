import styles from './HoldingTable.module.css';

export const data = [
    { instrument: "BHARTIARTL", qty: 2, avgCost: 538.05, ltp: 541.15, netChg: "+0.58%", dayChg: "+2.99%" },
    { instrument: "HDFCBANK", qty: 2, avgCost: 1383.4, ltp: 1522.35, netChg: "+10.04%", dayChg: "+0.11%" },
    { instrument: "HINDUNILVR", qty: 1, avgCost: 2335.85, ltp: 2417.4, netChg: "+3.49%", dayChg: "+0.21%" },
    { instrument: "INFY", qty: 1, avgCost: 1350.5, ltp: 1555.45, netChg: "+15.18%", dayChg: "-1.60%" },
    { instrument: "ITC", qty: 5, avgCost: 202.0, ltp: 207.9, netChg: "+2.92%", dayChg: "+0.80%" },
    { instrument: "KPITTECH", qty: 5, avgCost: 250.3, ltp: 266.45, netChg: "+6.45%", dayChg: "+3.54%" },
    { instrument: "M&M", qty: 2, avgCost: 809.9, ltp: 779.8, netChg: "-3.72%", dayChg: "-0.01%" },
    { instrument: "RELIANCE", qty: 1, avgCost: 2193.7, ltp: 2112.4, netChg: "-3.71%", dayChg: "-" },
    { instrument: "SBIN", qty: 4, avgCost: 324.35, ltp: 430.2, netChg: "-", dayChg: "-0.34%" },
    { instrument: "SGBMAY29", qty: 2, avgCost: 4727, ltp: 4719, netChg: "-", dayChg: "+0.15%" },
    { instrument: "TATAPOWER", qty: 5, avgCost: 104.2, ltp: 124.15, netChg: "-", dayChg: "-0.24%" },
    { instrument: "TCS", qty: 1, avgCost: 3041.7, ltp: 3194.8, netChg: "-", dayChg: "-" },
    { instrument: "WIPRO", qty: 4, avgCost: 489.3, ltp: 577.75, netChg: "-", dayChg: "+0.32%" },
];
export default function HoldingTable() {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "left" }}>Instrument</th>
                        <th>Qty.</th>
                        <th>Avg. cost</th>
                        <th>LTP</th>
                        <th>Cur. val</th>
                        <th>P&L</th>
                        <th>Net chg.</th>
                        <th>Day chg.</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => {
                        const currValue = row.ltp * row.qty;
                        const isProfit = currValue - row.avgCost * row.qty;
                        return (
                            <tr key={idx}>
                                <td style={{ textAlign: "left" }}>{row.instrument}</td>
                                <td>{row.qty}</td>
                                <td>{row.avgCost.toFixed(2)}</td>
                                <td>{row.ltp.toFixed(2)}</td>
                                <td>{currValue.toFixed(2)}</td>
                                <td className={isProfit > 0 ? styles.positive : isProfit < 0 ? styles.negative : ""}>{isProfit.toFixed(2)}</td>
                                <td className={row.netChg?.includes("-") ? styles.negative : styles.positive}>{row.netChg}</td>
                                <td className={row.dayChg?.includes("-") ? styles.negative : styles.positive}>{row.dayChg}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}