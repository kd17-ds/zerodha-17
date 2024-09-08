import "./Team.css";
import TeamImg from "./TeamImg";
import TeamData from "./TeamData";

export default function Team() {
    return (
        <div className="container px-5 mb-5">
            <div className="row px-5 text-center ">
                <h2 className="mb-5" style={{ fontSize: "34px" }}>
                    People
                </h2>
                <div className="col-6 about-team-introBox mt-3">
                    <TeamImg />
                </div>
                <div className="col-6  mt-5">
                    <TeamData />
                </div>
            </div>
        </div>
    );
}
