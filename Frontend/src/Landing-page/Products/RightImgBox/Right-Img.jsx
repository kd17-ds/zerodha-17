import "./Right-Img.css";
import ImageBox from "./ImageBox";
import DataBox from "./DataBox";

export default function RightImg({
    imageUrl,
    productName,
    productDescr,
    link,
}) {
    return (
        <div className="container px-5">
            <div className="row px-5 product-rightside-box">
                <div className="col-6 product-rightside-textBox">
                    <DataBox
                        productName={productName}
                        productDescr={productDescr}
                        link={link}
                    />
                </div>
                <div className="col-6">
                    <ImageBox imageUrl={imageUrl} />
                </div>
            </div>
        </div>
    );
}
