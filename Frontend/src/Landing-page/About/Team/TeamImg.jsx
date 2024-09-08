import "./TeamImg.css";

export default function TeamImg() {
    return (
        <div>
            <img
                src="media/images/D.S.png"
                alt=""
                className="mb-4 rounded-circle about-team-image"
            />
            <h5 className="about-team-name mb-3">Divyansh Sharma</h5>
            <p className="about-team-designation">Founder, CEO</p>
        </div>
    );
}
