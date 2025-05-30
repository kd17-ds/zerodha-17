import LeftBox from "../LeftBox/LeftBox";
import RightBox from "./RightBox";

export default function Positions() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 p-0">
                    <LeftBox />
                </div>
                <div className="col-8 p-0">
                    <RightBox />
                </div>
            </div>
        </div>
    );
}
