import styles from './OrderTable.module.css';

export default function OrderTable({ allOrders }) {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "left" }}>Instrument</th>
                        <th>Qty.</th>
                        <th>LTP</th>
                        <th>Mode</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.map((row, idx) => {
                        return (
                            <tr key={idx}>
                                <td style={{ textAlign: "left" }}>{row.name}</td>
                                <td>{row.qty}</td>
                                <td>{row.price.toFixed(2)}</td>
                                <td>{row.mode}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}