import TicketTopic from "./TicketTopic";
import "./CreateTicket.css"

export default function CreateTicket() {
    return (
        <div className="container px-5 support-TicketBox">
            <div className="row px-5">
                <h3 className="mb-4">To create a ticket, select a relevant topic</h3>
                <div className="row mt-2 mb-4">
                    <div className="col-4">
                        <TicketTopic
                            headLinkTxt={
                                <>
                                    <i class="fa-regular fa-square-plus"></i> Account Opening
                                </>
                            }
                            linksArr={[
                                "Getting started",
                                "Online",
                                "Offline",
                                "Charges",
                                "Company, Partnership and HUF",
                                "Non Resident Indian (NRI)",
                            ]}
                        />
                    </div>
                    <div className="col-4">
                        <TicketTopic
                            headLinkTxt={
                                <>
                                    <i class="fa-regular fa-user"></i> Your Zerodha Account
                                </>
                            }
                            linksArr={[
                                "Login credentials",
                                "Your Profile ",
                                "Account modification and segment addition ",
                                "CMR & DP ID",
                                "Nomination",
                                "Transfer and conversion of shares",
                            ]}
                        />
                    </div>
                    <div className="col-4">
                        <TicketTopic
                            headLinkTxt={
                                <>
                                    <i class="fa-solid fa-chart-simple"></i> Trading and Markets
                                </>
                            }
                            linksArr={[
                                "Trading FAQs",
                                "Kite",
                                "Margins ",
                                "Product and order types",
                                "Corporate actions",
                                "Kite features",
                            ]}
                        />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-4">
                        <TicketTopic
                            headLinkTxt={
                                <>
                                    <i class="fa-regular fa-credit-card"></i> Funds
                                </>
                            }
                            linksArr={[
                                "Fund withdrawal",
                                "Adding funds",
                                "Adding bank accounts ",
                                "eMandates",
                            ]}
                        />
                    </div>
                    <div className="col-4">
                        <TicketTopic
                            headLinkTxt={
                                <>
                                    <i class="fa-solid fa-at"></i> Console
                                </>
                            }
                            linksArr={[
                                "IPO",
                                "Portfolio",
                                "Funds statement ",
                                "Profile",
                                "Reports",
                                "Referral program",
                            ]}
                        />
                    </div>
                    <div className="col-4">
                        <TicketTopic
                            headLinkTxt={
                                <>
                                    <i class="fa-solid fa-coins"></i> Coin
                                </>
                            }
                            linksArr={[
                                "Understanding mutual funds and Coin",
                                "Coin app",
                                "Coin web ",
                                "Transactions and reports",
                                "National Pension Scheme (NPS)",
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
