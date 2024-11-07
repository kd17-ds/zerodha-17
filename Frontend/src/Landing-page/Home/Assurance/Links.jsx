import styles from "./Links.module.css";

export default function Links({ linkTxt, linkAdd }) {
    return (
        <a className={styles.links} href={linkAdd}>
            {linkTxt}
        </a>
    );
}
