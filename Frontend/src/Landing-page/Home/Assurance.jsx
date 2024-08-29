import "./Assurance.css";

export default function Assurance() {
    return (
        <div className="container home-assurance-box px-5">
            <div className="row px-5">
                <div className="col-6 home-assurance-txtBox mt-3">
                    <h2 className="mb-5">Trust with confidence</h2>
                    <h4>Customer first always</h4>
                    <p className="mb-4 home-assurance-boxPara">
                        That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
                        of equity investments and contribute to 15% of daily retail exchange
                        volumes in India.
                    </p>
                    <h4>No spam or gimmicks</h4>
                    <p className="mb-4 home-assurance-boxPara">
                        No gimmicks, spam, "gamification", or annoying push notifications.
                        High quality apps that you use at your pace, the way you like.
                    </p>
                    <h4>The Zerodha universe</h4>
                    <p className="mb-4 home-assurance-boxPara">
                        Not just an app, but a whole ecosystem. Our investments in 30+
                        fintech startups offer you tailored services specific to your needs.
                    </p>
                    <h4>Do better with money</h4>
                    <p className="mb-4 home-assurance-boxPara">
                        With initiatives like <a href="">Nudge </a> and{" "}
                        <a href="">Kill Switch </a> , we don't just facilitate transactions,
                        but actively help you do better with your money.
                    </p>
                </div>

                <div className="col-6 text-center home-assurance-rightBox ">
                    <img
                        src="media/images/ecosystem.png"
                        alt=""
                        className="home-assurance-img mt-4"
                    />
                    <div className="home-assurance-linkBox mt-3">
                        <a href="" className="mx-4">
                            Explore our Products <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="" className="mx-4">
                            Try Kite Demo <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
