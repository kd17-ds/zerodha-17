import styles from "./SubHeading.module.css";

export default function SubHeading({ subHeadTxt }) {
    return (
        <h2 className={`mt-5 mb-4 ${styles.subHeading}`}>{subHeadTxt}</h2>
    );
}
