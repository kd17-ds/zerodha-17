import "./DetailBox.css";

export default function DetailBox({ detBoxHead, detBoxPara }) {
    return (
        <div>
            <h4 className="boxHead">{detBoxHead}</h4>
            <p className="mb-4 boxPara">{detBoxPara}</p>
        </div>
    );
}
