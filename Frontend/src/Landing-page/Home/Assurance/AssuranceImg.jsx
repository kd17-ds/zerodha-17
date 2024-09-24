import "./AssuranceImg.css";
import Links from "./Links";
import { Link } from "react-router-dom";

export default function AssuranceImg() {
    return (
        <div className="text-center mt-1">
            <Link to="/product">
                <img
                    src="media/images/ecosystem.png"
                    alt=""
                    className="home-assurance-img mt-4"
                />
            </Link>
            <div className="home-assurance-linkBox mt-3">
                <Links
                    linkTxt={
                        <span className="mx-4">
                            Explore our Products <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    }
                    linkAdd={"/product"}
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
