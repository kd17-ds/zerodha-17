import "./Education.css";
import EducationImg from "./EducationImg"
import EducationData from "./EducationData";

export default function Education() {
    return (
        <div className="container home-education-box px-5">
            <div className="row px-5">
                <div className="col-6">
                    <EducationImg />
                </div>
                <div className="col-6 home-education-txtbox">
                    <EducationData />
                </div>
            </div>
        </div>
    );
}
