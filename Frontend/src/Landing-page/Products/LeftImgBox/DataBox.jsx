import styles from "./DataBox.module.css";
import SubHeading from "../../Home/Awards/SubHeading";
import Links from "../../Home/Assurance/Links";

export default function DataBox({
    productName,
    productDescr,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <>
            <SubHeading subHeadTxt={productName} />
            <p>{productDescr}</p>
            <div className="mb-4">
                {tryDemo ? (
                    <Links
                        linkTxt={
                            <span>
                                {tryDemo} <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        }
                    />
                ) : null}
                {learnMore ? (
                    <Links
                        linkTxt={
                            <span className="mx-5">
                                {learnMore} <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        }
                    />
                ) : null}
            </div>
            <div className={styles.LeftSideLinkBox2}>
                <a href="">
                    <img src={googlePlay} alt="" />
                </a>
                <a href="">
                    <img src={appStore} alt="" />
                </a>
            </div>
        </>
    );
}
