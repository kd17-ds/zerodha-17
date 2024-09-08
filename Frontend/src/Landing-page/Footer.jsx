import "./Footer.css";
import Links from "./Home/Assurance/Links"

export default function Footer() {
    return (
        <div className="Footer">
            <div className="container  px-5">
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
                <div className="row px-5 Footer-data">
                    <p>
                        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
                        no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
                        Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
                        Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
                        – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
                        Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
                        Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
                        India. For any complaints pertaining to securities broking please
                        write to <Links linkTxt={"complaints@zerodha.com"} />, for DP related to{" "}
                        <Links linkTxt={"dp@zerodha.com"} />. Please ensure you carefully read the
                        Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>
                    <p>
                        Procedure to file a complaint on <Links linkTxt={"SEBI SCORES"} />:
                        Register on SCORES portal. Mandatory details for filing complaints
                        on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
                        Effective Communication, Speedy redressal of the grievances
                    </p>
                    <p>
                        <Links linkTxt={"Smart Online Dispute Resolution"} /> |{" "}
                        <Links linkTxt={"Grievances Redressal Mechanism"} />
                    </p>
                    <p>
                        Investments in securities market are subject to market risks; read
                        all the related documents carefully before investing.
                    </p>
                    <p>
                        Attention investors: 1) Stock brokers can accept securities as
                        margins from clients only by way of pledge in the depository system
                        w.e.f September 01, 2020. 2) Update your e-mail and phone number
                        with your stock broker / depository participant and receive OTP
                        directly from depository on your e-mail and/or mobile number to
                        create pledge. 3) Check your securities / MF / bonds in the
                        consolidated account statement issued by NSDL/CDSL every month.
                    </p>
                    <p>
                        "Prevent unauthorised transactions in your account. Update your
                        mobile numbers/email IDs with your stock brokers. Receive
                        information of your transactions directly from Exchange on your
                        mobile/email at the end of the day. Issued in the interest of
                        investors. KYC is one time exercise while dealing in securities
                        markets - once KYC is done through a SEBI registered intermediary
                        (broker, DP, Mutual Fund etc.), you need not undergo the same
                        process again when you approach another intermediary." Dear
                        Investor, if you are subscribing to an IPO, there is no need to
                        issue a cheque. Please write the Bank account number and sign the
                        IPO application form to authorize your bank to make payment in case
                        of allotment. In case of non allotment the funds will remain in your
                        bank account. As a business we don't give stock tips, and have not
                        authorized anyone to trade on behalf of others. If you find anyone
                        claiming to be part of Zerodha and offering such services, please
                        <Links linkTxt={" create a ticket here"} />.
                    </p>
                    <div className="Footer-para-linkbox text-center">
                        <a href="">NSE</a>
                        <a href="">BSE</a>
                        <a href="">MCX</a>
                        <a href="">Terms & conditions</a>
                        <a href="">Policies & procedures</a>
                        <a href="">Privacy policy</a>
                        <a href="">Disclosure</a>
                        <a href="">For investor's attention</a>
                        <a href="">Investor charter</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
