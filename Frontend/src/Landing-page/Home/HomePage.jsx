import Hero from "./Hero/Hero";
import Awards from "./Awards/Awards";
import Assurance from "./Assurance/Assurance";
import Pricing from "./Pricing/Princing";
import Education from "./Education/Education";
import OpenAccount from "../OpenAccount";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Awards />
            <Assurance />
            <Pricing />
            {    /* <Education />
            <OpenAccount /> */}
        </>
    );
}
