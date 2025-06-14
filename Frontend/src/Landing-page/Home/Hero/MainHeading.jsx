import React from "react";
import styles from "./MainHeading.module.css";

export default function MainHeading({ headingTxt }) {
    return <h1 className={`mt-3 mb-3 ${styles.Mainheading}`}>{headingTxt}</h1>;
}
