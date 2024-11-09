import styles from "./Left-Img.module.css";
import ImageBox from "./ImageBox";
import DataBox from "./DataBox";

export default function LeftImg({
    imageUrl,
    productName,
    productDescr,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className={styles.LeftBox}>
            <div className={`row`}>
                <div className={`col-md-6 ${styles.LeftSideImgBox}`}>
                    <ImageBox imageUrl={imageUrl} />
                </div>
                <div className={`col-md-6 ${styles.LeftSideTxtBox}`}>
                    <DataBox
                        productName={productName}
                        productDescr={productDescr}
                        tryDemo={tryDemo}
                        learnMore={learnMore}
                        googlePlay={googlePlay}
                        appStore={appStore}
                    />
                </div>
            </div>
        </div>
    );
}
