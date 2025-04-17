import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

export default function Base() {
    return (
        <div className="row">
            <div className="col-4">
                <LeftBox />
            </div>
            <div className="col-8">
                <RightBox />
            </div>
        </div>
    );
}