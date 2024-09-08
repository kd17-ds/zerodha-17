import "./Left-Img.css";
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
        <div className="container px-5">
            <div className="row px-5 product-leftside-box">
                <div className="col-6">
                    <ImageBox imageUrl={imageUrl} />
                </div>
                <div className="col-6 product-leftside-textBox">
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
