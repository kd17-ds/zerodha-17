import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="Nav-Box container-fluid">
                <Link class="navbar-brand" to="/">
                    <img src="media/images/logo.svg" alt="Logo" width="130" height="18" />
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
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
                    <a>
                        <i class="fa-solid fa-bars"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
}
