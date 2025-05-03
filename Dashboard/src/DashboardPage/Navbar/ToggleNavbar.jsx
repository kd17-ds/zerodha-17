import styles from "./ToggleNavbar.module.css";

export default function ToggleNavbar() {
    return (
        <div className={styles.ToggledBox}>
            <div className={styles.box}>
                <h4 >Zerodha User</h4>
                <p>hello@zerodha.com</p>
            </div>
            <div className={styles.box}>
                <p>
                    <i class="fa-solid fa-user"> &nbsp;</i> My Profile / Settings
                </p>
            </div>
            <div className={styles.box}>
                <p>
                    <i class="fa-solid fa-circle-dot"></i> &nbsp; Console
                </p>
                <p>
                    <i class="fa-solid fa-circle-dot"></i>&nbsp; Coin
                </p>
                <p>
                    <i class="fa-solid fa-thumbs-up"></i>&nbsp; Support
                </p>
                <p>
                    <i class="fa-solid fa-user-plus"></i> &nbsp;Invite friends
                </p>
            </div>
            <div style={{ border: "none" }} className={styles.box}>
                <p>
                    <i class="fa-solid fa-user-plus"></i>&nbsp; Tour Kite
                </p>
                <p>
                    <i class="fa-solid fa-keyboard"></i> &nbsp;Keyboard Shortcuts
                </p>
                <p>
                    <i class="fa-solid fa-question"></i> &nbsp;Help
                </p>
                <p>
                    <i class="fa-solid fa-right-from-bracket"></i>&nbsp; Logout
                </p>
            </div>
        </div>
    );
}
