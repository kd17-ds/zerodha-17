import styles from "./TeamImg.module.css";

export default function TeamImg() {
    return (
        <div>
            <img
                src="media/images/D.S.png"
                alt=""
                className={`mb-4 rounded-circle ${styles.TeamImg}`}
            />
            <h5 className={`${styles.TeamName} mb-3`}>Divyansh Sharma</h5>
            <p className={styles.TeamDesignation}>Founder, CEO</p>
        </div>
    );
}
