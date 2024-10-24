import styles from "./SignUpButton.module.css";

export default function SignUpButton({ btnText }) {
    return <button className={styles.btn}>{btnText}</button>;
}
