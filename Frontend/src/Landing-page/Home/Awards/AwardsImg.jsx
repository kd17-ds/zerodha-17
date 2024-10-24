import styles from "./AwardsImg.module.css";

export default function AwardsImg() {
    return (
        <div className={styles.AwardsImgBox}>
            <img
                src="media/images/largestBroker.svg"
                alt=""
                className={styles.AwardsImg}
            />
        </div>
    );
}
