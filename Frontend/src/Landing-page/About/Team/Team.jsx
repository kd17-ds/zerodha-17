import styles from "./Team.module.css";
import TeamImg from "./TeamImg";
import TeamData from "./TeamData";

export default function Team() {
    return (
        <div className={`${styles.TeamBox} mb-5`}>
            <div className="row text-center ">
                <h2 className="mb-5" style={{ fontSize: "34px" }}>
                    People
                </h2>
                <div className={`col-md-6 col-12 ${styles.TeamIntroBox} mt-3`}>
                    <TeamImg />
                </div>
                <div className="col-md-6 col-12  mt-5">
                    <TeamData />
                </div>
            </div>
        </div>
    );
}
