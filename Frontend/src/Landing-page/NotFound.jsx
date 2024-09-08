import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container notFoundBox p-5">
            <div className="row px-5">
                <h2 className="mb-2">404</h2>
                <h1 className="mt-2 mb-4 openAcc-heading">Couldn't Find that page</h1>
                <p>
                    We couldn’t find the page you were looking <br /> for.{" "}
                    <Link to="/">Visit Zerodha’s home page</Link>
                </p>
            </div>
        </div>
    );
}
