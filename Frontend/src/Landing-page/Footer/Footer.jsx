import styles from "./Footer.module.css";
import FooterUpperBox from "./FooterUpperBox";
import FooterLowerBox from "./FooterLowerBox";

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.FooterBox}>
                <FooterUpperBox />
                <FooterLowerBox />
            </div>
        </div>
    );
}
