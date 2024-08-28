import Navbar from "../Navbar"
import Hero from "./Hero"
import Awards from "./Awards"
import Assurance from "./Assurance"
import Pricing from "./Princing"
import Education from "./Education"
import OpenAccount from "../OpenAccount"
import Footer from "../Footer"

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Awards />
            <Assurance />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </>
    )
}