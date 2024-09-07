import DetailBox from "./DetailBox";
import Links from "./Links";

export default function AssuranceData() {
    return (
        <div className="mt-3">
            <h2 className="mb-5" style={{ fontSize: "34px" }}>Trust with confidence</h2>
            <DetailBox
                detBoxHead={"Customer-first always"}
                detBoxPara={
                    "That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India."
                }
            />
            <DetailBox
                detBoxHead={"No spam or gimmicks"}
                detBoxPara={
                    'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.'
                }
            />
            <DetailBox
                detBoxHead={"The Zerodha universe"}
                detBoxPara={
                    "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs."
                }
            />
            <DetailBox
                detBoxHead={"Do better with money"}
                detBoxPara={
                    <>
                        With initiatives like <Links linkTxt={"Nudge"} /> and{" "}
                        <Links linkTxt={"Kill Switch"} />, we don't just facilitate
                        transactions, but actively help you do better with your money.
                    </>
                }
            />
        </div>
    );
}
