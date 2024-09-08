import "./AssuranceImg.css";
import Links from "./Links";

export default function AssuranceImg() {
    return (
        <div className="text-center mt-1">
            <img
                src="media/images/ecosystem.png"
                alt=""
                className="home-assurance-img mt-4"
            />
            <div className="home-assurance-linkBox mt-3">
                <Links
                    linkTxt={
                        <span className="mx-4">
                            Explore our Products <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    }
                />
                <Links
                    linkTxt={
                        <span className="mx-4">
                            Try Kite demo <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    }
                />
            </div>
        </div>
    );
}
