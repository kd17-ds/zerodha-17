import { Link } from "react-router-dom";
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
                    <Link to="/dashboard" className={styles.navLinks}>Dashboard</Link>
                    <Link to="/orders" className={styles.navLinks}>Orders</Link>
                    <Link to="/holdings" className={styles.navLinks}>Holdings</Link>
                    <Link to="/positions" className={styles.navLinks}>Positions</Link>
                    <Link to="/funds" className={styles.navLinks}>Funds</Link>
                    <Link to="/apps" className={styles.navLinks}>Apps</Link>
                </div>
                <div className={styles.Userinfo}>
                    <span style={{ borderRadius: "100%", backgroundColor: "pink", textAlign: "center", padding: "3px 6px" }}>UI</span>
                    <span>USERID</span>
                </div>
            </div>
        </div>
    );
}
