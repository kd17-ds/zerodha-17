import styles from './HoldingTable.module.css';
import { Holdingsdata } from "../data.js";



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
                    {Holdingsdata.map((row, idx) => {
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