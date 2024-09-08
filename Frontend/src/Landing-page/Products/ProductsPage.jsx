import Hero from "./Hero/Hero";
import LeftImg from "./LeftImgBox/Left-Img";
import RightImg from "./RightImgBox/Right-Img";
import Universe from "./Universe/Universe";

export default function HomePage() {
    return (
        <>
            <Hero />
            <LeftImg
                imageUrl={"media//images/kite.png"}
                productName={"Kite"}
                productDescr={
                    "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                }
                tryDemo={"Try Demo"}
                learnMore={"Learn more"}
                googlePlay={"media/images/googlePlayBadge.svg"}
                appStore={"media/images/appstoreBadge.svg"}
            />

            <RightImg
                imageUrl={"media//images/console.png"}
                productName={"Console"}
                productDescr={
                    "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                }
                link={"Learn more"}
            />

            <LeftImg
                imageUrl={"media//images/coin.png"}
                productName={"Coin"}
                productDescr={
                    "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                }
                tryDemo={"Coin"}
                googlePlay={"media/images/googlePlayBadge.svg"}
                appStore={"media/images/appstoreBadge.svg"}
            />

            <RightImg
                imageUrl={"media//images/kiteconnect.png"}
                productName={"Kite Connect API"}
                productDescr={
                    "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                }
                link={"Kite Connect"}
            />

            <LeftImg
                imageUrl={"media//images/varsity.png"}
                productName={"Varsity mobile"}
                productDescr={
                    "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                }
                googlePlay={"media/images/googlePlayBadge.svg"}
                appStore={"media/images/appstoreBadge.svg"}
            />
            <Universe />
        </>
    );
}
