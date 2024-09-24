import styles from "./ToggledNavBar.module.css";

export default function ToggledNavBar({ toggleNav }) {
    return (
        <div className={styles.NavBarContainer}>

            <div className={styles.NavBar} onClick={(e) => e.stopPropagation()}>
                <i className="fa-solid fa-xmark" style={{ float: "right", fontSize: "32px" }} onClick={toggleNav}></i>
            </div>
        </div >
    );
}
