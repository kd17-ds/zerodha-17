import styles from "./ToggledNavBar.module.css";
import { Link } from "react-router-dom";

export default function ToggledNavBar({ toggleNav }) {
    return (
        <div className={styles.NavBarContainer}>
            <div className={styles.NavBar} onClick={(e) => e.stopPropagation()}>
                <i
                    className="fa-solid fa-xmark"
                    style={{ float: "right", fontSize: "32px" }}
                    onClick={toggleNav}
                ></i>

                {/* TopLink Box  */}
                <div className={`row p-3 ${styles.TopLinkBox}`}>
                    <div className="col-6">
                        <Link to="/signup">Signup</Link>
                        <br />
                        <Link to="/product">Products</Link>
                        <br />
                        <Link to="/support">Support</Link>
                    </div>
                    <div className="col-6">
                        <Link to="/about">About</Link>
                        <br />
                        <Link to="/pricing">Pricing</Link>
                    </div>
                </div>

                {/* Middle Link Box  */}
                <div className={`row p-3 ${styles.MiddleLinkBox}`}>
                    <div className="col-6">
                        <div className={styles.InnerMiddleLinkBox}>
                            <img
                                src="media/images/kite-logo.svg"
                                alt=""
                                className={styles.MiddleLinkImg}
                            />
                            <p className={styles.MiddleLinkHead}>Kite</p>
                        </div>
                        <div className={styles.InnerMiddleLinkBox}>
                            <img
                                src="media/images/kite-connect.svg"
                                alt=""
                                className={styles.MiddleLinkImg}
                            />
                            <p className={styles.MiddleLinkHead}>Kite Connect</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={styles.InnerMiddleLinkBox}>
                            <img
                                src="media/images/console.svg"
                                alt=""
                                className={styles.MiddleLinkImg}
                            />
                            <p className={styles.MiddleLinkHead}>Console</p>
                        </div>
                        <div className={styles.InnerMiddleLinkBox}>
                            <img
                                src="media/images/coin.svg"
                                alt=""
                                className={styles.MiddleLinkImg}
                            />
                            <p className={styles.MiddleLinkHead}>Coin</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Link Box  */}
                <div className={`row p-3 ${styles.BottomLinkBox}`}>
                    <div className={`col-3 ${styles.InnerBottomLinkBox}`}>
                        <div >
                            <h3 className={`${styles.BottomLinkBoxHead} mt-2 mb-3`}>
                                Utilities
                            </h3>
                            <a className={`${styles.BottomLinks} mt-5`}>
                                Brokerage calculator
                            </a>
                            <br />
                            <a className={styles.BottomLinks}> Margin calculator </a> <br />
                            <a className={styles.BottomLinks}> Holiday calendar </a> <br />
                            <a className={styles.BottomLinks}> Markets </a> <br />
                        </div>
                    </div>
                    <div className={`col-3 ${styles.InnerBottomLinkBox2}`}>
                        <h3 className={`${styles.BottomLinkBoxHead} mt-2 mb-3`}>Updates</h3>
                        <a className={`${styles.BottomLinks} mt-5`}>Z-Connect blog</a>
                        <br />
                        <a className={styles.BottomLinks}> Pulse News </a> <br />
                        <a className={styles.BottomLinks}> Circulars / Bulletin </a> <br />
                        <a className={styles.BottomLinks}> IPOs </a> <br />
                    </div>
                </div>
            </div>
        </div>
    );
}
