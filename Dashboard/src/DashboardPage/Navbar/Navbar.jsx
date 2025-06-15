import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import ToggleNavbar from "./ToggleNavbar";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { ToastContainer, toast } from "react-toastify";

export default function Navbar() {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");

    const Logout = () => {
        removeCookie("token");
        navigate("/signup");
    };

    let [displayNavRightBox, setdisplayNavRightBox] = useState(false);

    function displayNavRight(event) {
        event.stopPropagation();
        setdisplayNavRightBox((visible) => !visible);
    }
    useEffect(() => {
        if (displayNavRightBox) {
            window.addEventListener("click", hideNavRight);
        }
        return () => {
            window.removeEventListener("click", hideNavRight);
        };
    }, [displayNavRightBox]);

    function hideNavRight() {
        setdisplayNavRightBox(false);
    }

    return (
        <div>
            <div className={styles.navbar}>
                <div>
                    <img
                        src="media/images/kite-logo.png"
                        alt=""
                        className={styles.NavbarImg}
                    />
                </div>
                <div className={styles.NavbarRightBox}>
                    <div className={styles.NavbarLinks}>
                        <Link to="/dashboard" className={styles.navLinks}>
                            Dashboard
                        </Link>
                        <Link to="/orders" className={styles.navLinks}>
                            Orders
                        </Link>
                        <Link to="/holdings" className={styles.navLinks}>
                            Holdings
                        </Link>
                        <Link to="/positions" className={styles.navLinks}>
                            Positions
                        </Link>
                        <Link to="/funds" className={styles.navLinks}>
                            Funds
                        </Link>
                        <Link to="/apps" className={styles.navLinks}>
                            Apps
                        </Link>
                    </div>
                    <div onClick={displayNavRight} className={styles.Userinfo}>
                        <span
                            style={{
                                borderRadius: "100%",
                                backgroundColor: "pink",
                                textAlign: "center",
                                padding: "6px 12px",
                            }}
                        >
                            {username[0]}
                        </span>
                        <span>{username}</span>
                    </div>
                </div>
            </div>
            {displayNavRightBox && (
                <ToggleNavbar username={username} Logout={Logout} />
            )}
            <ToastContainer />
        </div>
    );
}
