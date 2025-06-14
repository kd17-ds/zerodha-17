import styles from "./SignUpButton.module.css";
import React from "react";

export default function SignUpButton({ btnText }) {
    return <button className={styles.btn}>{btnText}</button>;
}
