import "./Left-Img.css";

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
                <div className="col-6 d-flex justify-content-center">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="col-6 product-leftside-textBox">
                    <h2 className="mb-4">{productName}</h2>
                    <p>{productDescr}</p>
                    <div className="product-leftside-linkBox1 mb-4">
                        {tryDemo ? (
                            <a href="">
                                {tryDemo} <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        ) : null}
                        {learnMore ? (
                            <a href="">
                                {learnMore} <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        ) : null}
                    </div>
                    <div className="product-leftside-linkBox2">
                        <a href="">
                            <img src={googlePlay} alt="" />
                        </a>
                        <a href="">
                            <img src={appStore} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
