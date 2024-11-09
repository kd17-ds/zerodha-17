import styles from "./Right-Img.module.css";
import ImageBox from "./ImageBox";
import DataBox from "./DataBox";

export default function RightImg({
    imageUrl,
    productName,
    productDescr,
    link,
}) {
    return (
        <div className={styles.RightBox}>
            <div className={`row ${styles.ReverseBox}`}>
                <div className={`col-md-6 col-12 ${styles.RightTxtBox}`}>
                    <DataBox
                        productName={productName}
                        productDescr={productDescr}
                        link={link}
                    />
                </div>
                <div className={`col-md-6 col-12 ${styles.RightImgBox}`}>
                    <ImageBox imageUrl={imageUrl} />
                </div>
            </div>
        </div>
    );
}
