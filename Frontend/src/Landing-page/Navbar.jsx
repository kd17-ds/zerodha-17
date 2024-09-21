import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
    const NavAdditionalContent = (
        <div className="Nav-Additionals">
            <div className="row Nav-Additional_topBox text-center">
                <div className="col-3  mt-3">
                    <img src="media/images/kite-logo.svg" alt="" />
                    <p className="linkHead ">Kite</p>
                    <p className="linkDesc">Trading platform</p>
                </div>
                <div className="col-3  mt-3">
                    <img src="media/images/console.svg" alt="" />
                    <p className="linkHead ">Console</p>
                    <p className="linkDesc">Backoffice</p>
                </div>
                <div className="col-3  mt-3">
                    <img src="media/images/kite-connect.svg" alt="" />
                    <p className="linkHead ">Kite Connect</p>
                    <p className="linkDesc">Trading APIs</p>
                </div>
                <div className="col-3  mt-3">
                    <img src="media/images/coin.svg" alt="" />
                    <p className="linkHead ">Coin</p>
                    <p className="linkDesc">Mutual Funds</p>
                </div>
            </div>
            <div className="row Nav-Additional_bottomBox">
                <div className="col-3 mt-4" style={{ marginRight: "20px" }}>
                    <h3 className="OtherlinksHead mt-3  mb-3">Utilities</h3>
                    <a className="OtherlinkDesc mt-5"> Brokerage calculator </a> <br />
                    <a className="OtherlinkDesc"> Margin calculator </a> <br />
                    <a className="OtherlinkDesc"> Holiday calendar </a> <br />
                    <a className="OtherlinkDesc"> Markets </a> <br />
                </div>
                <div className="col-3 mt-4">
                    <h3 className="OtherlinksHead mt-3  mb-3">Updates</h3>
                    <a className="OtherlinkDesc mt-5"> Z-Connect blog </a> <br />
                    <a className="OtherlinkDesc"> Pulse News </a> <br />
                    <a className="OtherlinkDesc"> Circulars / Bulletin </a> <br />
                    <a className="OtherlinkDesc"> IPOs </a> <br />
                </div>
                <div
                    className="col-6 mt-4"
                    style={{ width: "250px", marginLeft: "20px" }}
                >
                    <h3 className="OtherlinksHead mt-3  mb-3">Education</h3>
                    <div className="row text-center">
                        <div className="col-4 text-center">
                            <img
                                src="media/images/varsitynav.png"
                                alt=""
                                className="mb-3 mt-1"
                            />
                            <br />
                            <a className="OtherlinkDesc">Varsity</a>
                        </div>
                        <div className="col-8">
                            <img src="media/images/tqna.png" alt="" className="mb-3 mt-2" />
                            <br />
                            <a className="OtherlinkDesc">Trading Q&A</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    let [displayNavAdditionals, setdisplayNavAdditionals] = useState(null);

    function displayEffect(event) {
        event.stopPropagation();
        setdisplayNavAdditionals((currNavAdditional) => {
            if (currNavAdditional === null) {
                return NavAdditionalContent;
            } else {
                return null;
            }
        });
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
        setdisplayNavAdditionals(null);
    }

    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="Nav-Box container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="media/images/logo.svg" alt="Logo" width="130" height="18" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="Nav-links collapse navbar-collapse"
                    id="navbarSupportedContent"
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
            <div>{displayNavAdditionals}</div>
        </nav>
    );
}
