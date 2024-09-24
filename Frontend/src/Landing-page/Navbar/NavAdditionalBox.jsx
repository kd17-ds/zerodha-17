import styles from "./NavAdditionalBox.module.css";

export default function NavAdditionalBox() {
    return (
        <div onClick={(e) => e.stopPropagation()} className={styles.NavAdditionals}>
            {/* NavAdditional TopBox  */}
            <div className={` row  ${styles.topBox} text-center`}>
                <div className="col-3 mt-3">
                    <img src="media/images/kite-logo.svg" alt="" />
                    <p className={styles.topBoxlinkHead}>Kite</p>
                    <p className={styles.topBoxlinkDesc}>Trading platform</p>
                </div>
                <div className="col-3 mt-3">
                    <img src="media/images/console.svg" alt="" />
                    <p className={styles.topBoxlinkHead}>Console</p>
                    <p className={styles.topBoxlinkDesc}>Backoffice</p>
                </div>
                <div className="col-3 mt-3">
                    <img src="media/images/kite-connect.svg" alt="" />
                    <p className={styles.topBoxlinkHead}>Kite Connect</p>
                    <p className={styles.topBoxlinkDesc}>Trading APIs</p>
                </div>
                <div className="col-3 mt-3">
                    <img src="media/images/coin.svg" alt="" />
                    <p className={styles.topBoxlinkHead}>Coin</p>
                    <p className={styles.topBoxlinkDesc}>Mutual Funds</p>
                </div>
            </div>

            {/* NavAdditional BottomBox  */}
            <div className={`row ${styles.bottomBox}`}>
                <div className="col-3 mt-4" style={{ marginRight: "20px" }}>
                    <h3 className={`${styles.bottomBoxLinkHead} mt-3  mb-3`}>
                        Utilities
                    </h3>
                    <a className={`${styles.bottomBoxLinks} mt-5`}>
                        Brokerage calculator
                    </a>
                    <br />
                    <a className={styles.bottomBoxLinks}> Margin calculator </a> <br />
                    <a className={styles.bottomBoxLinks}> Holiday calendar </a> <br />
                    <a className={styles.bottomBoxLinks}> Markets </a> <br />
                </div>
                <div className="col-3 mt-4">
                    <h3 className={`${styles.bottomBoxLinkHead} mt-3  mb-3`}>Updates</h3>
                    <a className={`${styles.bottomBoxLinks} mt-5`}>Z-Connect blog</a>
                    <br />
                    <a className={styles.bottomBoxLinks}> Pulse News </a> <br />
                    <a className={styles.bottomBoxLinks}> Circulars / Bulletin </a> <br />
                    <a className={styles.bottomBoxLinks}> IPOs </a> <br />
                </div>
                <div
                    className="col-6 mt-4"
                    style={{ width: "250px", marginLeft: "20px" }}
                >
                    <h3 className={`${styles.bottomBoxLinkHead} mt-3  mb-3`}>
                        Education
                    </h3>
                    <div className="row text-center">
                        <div className="col-4 text-center">
                            <img
                                src="media/images/varsitynav.png"
                                alt=""
                                className="mb-3 mt-1"
                            />
                            <br />
                            <a className={styles.bottomBoxLinks}>Varsity</a>
                        </div>
                        <div className="col-8">
                            <img src="media/images/tqna.png" alt="" className="mb-3 mt-2" />
                            <br />
                            <a className={styles.bottomBoxLinks}>Trading Q&A</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
