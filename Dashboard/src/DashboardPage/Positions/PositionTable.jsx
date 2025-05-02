import styles from './PositionTable.module.css';

export default function PositionTable() {
    const positionsData = [
        {
            product: 'CNC',
            instrument: 'EVEREADY',
            qty: 2,
            avg: 316.27,
            ltp: 312.35,
            pnl: -7.84,
            chg: '-1.24%',
        },
        {
            product: 'CNC',
            instrument: 'JUBLFOOD',
            qty: 1,
            avg: 3124.75,
            ltp: 3082.65,
            pnl: -42.10,
            chg: '-1.35%',
        },
    ];

    const totalPnL = positionsData.reduce((sum, item) => sum + item.pnl, 0).toFixed(2);

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
                {positionsData.map((item, idx) => (
                    <tr key={idx}>
                        <td style={{ textAlign: "left" }}>
                            <span className={styles.productTag}>{item.product}</span>
                        </td>
                        <td>{item.instrument}</td>
                        <td>{item.qty}</td>
                        <td>{item.avg}</td>
                        <td>{item.ltp}</td>
                        <td className={styles.negative}>{item.pnl}</td>
                        <td className={styles.negative}>{item.chg}</td>
                    </tr>
                ))}
                <tr className={styles.totalRow}>
                    <td colSpan={5}></td>
                    <td><strong>Total</strong></td>
                    <td className={styles.negative}><strong>{totalPnL}</strong></td>
                </tr>
            </tbody>
        </table>
    );
}