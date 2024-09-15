import "./FooterUpperBox.css";

export default function FooterUpperBox() {
    return (
        <div className="row px-5 mb-5">
            <div className="col-4 Footer-introBox">
                <img
                    src="media/images/logo.svg"
                    alt="Logo"
                    width="150"
                    height="20"
                    className="mb-3"
                />
                <p className="Footer-rights">
                    © 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
                </p>
                <div className="Footer-socials flex">
                    <a>
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a>
                        <i class="fa-brands fa-square-facebook"></i>
                    </a>
                    <a>
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
                <div className="Footer-socials2 flex">
                    <a>
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a>
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                    <a>
                        <i class="fa-brands fa-telegram"></i>
                    </a>
                </div>
            </div>
            <div className="col-4 Footer-linkBox">
                <h3 className="mb-4">Company</h3>
                <a>About</a> <br />
                <a>Products</a> <br />
                <a>Pricing</a> <br />
                <a>Referral programme</a> <br />
                <a>Careers</a> <br />
                <a>Zerodha.tech</a> <br />
                <a>Press & media</a> <br />
                <a>Zerodha Cares (CSR)</a> <br />
            </div>
            <div className="col-4 Footer-linkBox">
                <h3 className="mb-4">Support</h3>
                <a>Contact us</a> <br />
                <a>Support Portal</a> <br />
                <a>Z-Connect blog</a> <br />
                <a>List of charges</a> <br />
                <a>Downloads & resources</a> <br />
                <a>Videos</a> <br />
                <a>Market overview</a> <br />
                <a>How to file a complaint?</a> <br />
                <a>Status of your complaints</a> <br />
            </div>
            <div className="col-4 Footer-linkBox">
                <h3 className="mb-4">Account</h3>
                <a>Open an account</a> <br />
                <a>Fund transfer</a> <br />
            </div>
        </div>
    );
}
