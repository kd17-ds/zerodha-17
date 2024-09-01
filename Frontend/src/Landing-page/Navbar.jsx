import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="Nav-Box container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="media/images/logo.svg" alt="Logo" width="130" height="18" />
                </a>
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
                    <a>Signup</a>
                    <a>About</a>
                    <a>Products</a>
                    <a>Pricing</a>
                    <a>Support</a>
                    <a>
                        <i class="fa-solid fa-bars"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
}
