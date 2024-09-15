import "./Footer.css";
import FooterUpperBox from "./FooterUpperBox";
import FooterLowerBox from "./FooterLowerBox";

export default function Footer() {
    return (
        <div className="Footer">
            <div className="container  px-5">
                <FooterUpperBox />
                <FooterLowerBox />
            </div>
        </div>
    );
}
