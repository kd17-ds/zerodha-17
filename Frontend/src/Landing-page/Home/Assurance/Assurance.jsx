import "./Assurance.css";
import AssuranceData from "./AssuranceData";
import AssuranceImg from "./AssuranceImg";

export default function Assurance() {
    return (
        <div className="container home-assurance-box px-5">
            <div className="row px-5">
                <div className="col-6 mt-3 home-assurance-txtBox">
                    <AssuranceData />
                </div>
                <div className="col-6 home-assurance-rightBox">
                    <AssuranceImg />
                </div>
            </div>
        </div>
    );
}
