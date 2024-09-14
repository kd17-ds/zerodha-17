import "./TicketTopic.css";

export default function TicketTopic({ headLinkTxt, linksArr }) {
    return (
        <>
            <h4 className="support-ticket-heading mb-3">
                <a href="">
                    {headLinkTxt}
                </a>{" "}
            </h4>
            {linksArr.map((link, index) => (
                <div className="support-ticket-linkBox" key={index} >
                    <a href="">{link}</a>
                </div>
            ))}
        </>
    );
}
