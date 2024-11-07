import styles from "./DetailBox.module.css";

export default function DetailBox({ detBoxHead, detBoxPara }) {
    return (
        <div>
            <h4 className={styles.boxHead}>{detBoxHead}</h4>
            <p className={`mb-4 ${styles.boxPara}`}>{detBoxPara}</p>
        </div>
    );
}
