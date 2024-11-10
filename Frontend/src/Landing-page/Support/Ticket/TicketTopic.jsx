import styles from "./TicketTopic.module.css";

export default function TicketTopic({ headLinkTxt, linksArr }) {
    return (
        <>
            <h4 className={`${styles.TicketHeading} mb-3`}>
                <a href="">{headLinkTxt}</a>{" "}
            </h4>
            {linksArr.map((link, index) => (
                <div className={styles.TicketLinkBox} key={index}>
                    <a href="">{link}</a>
                </div>
            ))}
        </>
    );
}
