import "./SupportFooter.css";

export default function SupportFooter() {
    return (
        <div className="Support-Footer">
            <div className="container  px-5">
                <div className="row px-5 mb-4">
                    <div className="col-4 Support-Footer-introBox">
                        <img
                            src="media/images/logo.svg"
                            alt="Logo"
                            width="150"
                            height="20"
                            className="mb-3"
                        />
                        <h5><i class="fa-solid fa-phone"></i> &nbsp;6367248171</h5>
                        <p className="Support-Footer-rights">
                            © 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
                        </p>
                        <div className="Support-Footer-socials flex">
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
                    </div>
                    <div className="col-4 Support-Footer-linkBox">
                        <h3 className="mb-4">Company</h3>
                        <a>About</a> <br />
                        <a>Products</a> <br />
                        <a>Pricing</a> <br />
                        <a>Referral programme</a> <br />
                        <a>Careers</a> <br />
                        <a>Press & media</a> <br />
                        <a>Zerodha Cares (CSR)</a> <br />
                    </div>
                    <div className="col-4 Support-Footer-linkBox">
                        <h3 className="mb-4">Support</h3>
                        <a>Contact us</a> <br />
                        <a>Support Portal</a> <br />
                        <a>Z-Connect blog</a> <br />
                        <a>List of charges</a> <br />
                        <a>Downloads & resources</a> <br />
                    </div>
                    <div className="col-4 Support-Footer-linkBox">
                        <h3 className="mb-4">Account</h3>
                        <a>Open an account</a> <br />
                        <a>Fund transfer</a> <br />
                    </div>
                </div>
            </div>
        </div>
    );
}
