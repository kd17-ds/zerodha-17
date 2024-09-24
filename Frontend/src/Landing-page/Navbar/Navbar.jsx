import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavAdditionalBox from "./NavAdditionalBox";
import ToggledNavBar from "./ToggledNavBar";

export default function Navbar() {
    let [displayNavAdditionals, setdisplayNavAdditionals] = useState(false);
    let [toggleNavbar, settoggleNavbar] = useState(false);

    // For NavAdditionalBox
    function displayEffect(event) {
        event.stopPropagation();
        setdisplayNavAdditionals((prev) => !prev);
    }

    useEffect(() => {
        if (displayNavAdditionals) {
            window.addEventListener("click", hideNavAdditionalBox);
        }
        return () => {
            window.removeEventListener("click", hideNavAdditionalBox);
        };
    }, [displayNavAdditionals]);

    function hideNavAdditionalBox() {
        setdisplayNavAdditionals(false);
    }

    // For Toggled Navbar
    function toggleNav(event) {
        event.stopPropagation();
        settoggleNavbar((prev) => !prev);
    }

    useEffect(() => {
        if (toggleNavbar) {
            window.addEventListener("click", hideToggledNavBar);
        }
        return () => {
            window.removeEventListener("click", hideToggledNavBar);
        };
    }, [toggleNavbar]);

    function hideToggledNavBar() {
        settoggleNavbar(false);
    }

    return (
        <>
            <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
                <div className={`${styles.NavBox} container-fluid`}>
                    <Link className="navbar-brand" to="/">
                        <img
                            src="media/images/logo.svg"
                            alt="Logo"
                            width="130"
                            height="18"
                            className={styles.ZerodhaLogo}
                        />
                    </Link>
                    <button
                        className={`navbar-toggler ${styles.NavToggler}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={toggleNav}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={styles.hide}>
                        <div
                            className={`${styles.NavLinks} collapse navbar-collapse `}
                            id="navbarNavAltMarkup"
                        >
                            <Link to="/signup">Signup</Link>
                            <Link to="/about">About</Link>
                            <Link to="/product">Products</Link>
                            <Link to="/pricing">Pricing</Link>
                            <Link to="/support">Support</Link>
                            <a onClick={displayEffect}>
                                <i className="fa-solid fa-bars"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Display NavAdditionalBox conditionally */}
                {displayNavAdditionals && <NavAdditionalBox />}
            </nav>
            {/* Display ToggledNavBar conditionally */}
            {toggleNavbar && <ToggledNavBar toggleNav={toggleNav} />}
        </>
    );
}
