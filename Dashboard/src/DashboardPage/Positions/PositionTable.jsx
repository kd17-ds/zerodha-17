import styles from './PositionTable.module.css';

export default function PositionTable({ allPositions }) {

    const totalPnL = allPositions.reduce((sum, item) => sum + item.pnl, 0).toFixed(2);

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th style={{ textAlign: "left" }}>Product</th>
                    <th>Instrument</th>
                    <th>Qty.</th>
                    <th>Avg.</th>
                    <th>LTP</th>
                    <th>P&L</th>
                    <th>Chg.</th>
                </tr>
            </thead>
            <tbody>
                {allPositions.map((item, idx) => {
                    const currValue = item.ltp * item.qty;
                    const isProfit = currValue - item.avg * item.qty;
                    return (<tr key={idx}>
                        <td style={{ textAlign: "left" }}>
                            <span className={styles.productTag}>{item.product}</span>
                        </td>
                        <td>{item.instrument}</td>
                        <td>{item.qty}</td>
                        <td>{item.avg.toFixed(2)}</td>
                        <td>{item.ltp.toFixed(2)}</td>
                        <td className={styles.negative}>{isProfit.toFixed(2)}</td>
                        <td className={styles.negative}>{item.chg}</td>
                    </tr>
                    );
                })}
                <tr className={styles.totalRow}>
                    <td colSpan={5}></td>
                    <td><strong>Total</strong></td>
                    <td className={styles.negative}><strong>{totalPnL}</strong></td>
                </tr>
            </tbody>
        </table>
    );
}