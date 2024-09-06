import "./Right-Img.css";

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
                    <h2 className="mb-4">{productName}</h2>
                    <p>{productDescr}</p>
                    <a href="">{link} <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <img src={imageUrl} alt="" />
                </div>
            </div>
        </div>
    );
}
