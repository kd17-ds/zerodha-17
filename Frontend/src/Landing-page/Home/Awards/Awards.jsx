import "./Awards.css";
import AwardsData from "./AwardsData";
import AwardsImg from "./AwardsImg";

export default function Awards() {
  return (
    <div className="container home-awards-box px-5">
      <div className="row px-5">
        <div className="col-6">
          <AwardsImg />
        </div>
        <div className="col-6 mt-2">
          <AwardsData />
        </div>
      </div>
    </div>
  );
}
