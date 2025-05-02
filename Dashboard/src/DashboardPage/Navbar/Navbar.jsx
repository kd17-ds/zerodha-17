import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div>
                <img
                    src="media/images/kite-logo.png"
                    alt=""
                    className={styles.NavbarImg}
                />
            </div>
            <div className={styles.NavbarRightBox} >
                <div className={styles.NavbarLinks}>
                    <a href="" className={styles.navLinks}>Dashboard</a>
                    <a href="" className={styles.navLinks}>Orders</a>
                    <a href="" className={styles.navLinks}>Holdings</a>
                    <a href="" className={styles.navLinks}>Positions</a>
                    <a href="" className={styles.navLinks}>Funds</a>
                    <a href="" className={styles.navLinks}>Apps</a>
                </div>
                <div className={styles.Userinfo}>
                    <span style={{ borderRadius: "100%", backgroundColor: "pink", textAlign: "center", padding: "3px 6px" }}>UI</span>
                    <span>USERID</span>
                </div>
            </div>
        </div>
    );
}
