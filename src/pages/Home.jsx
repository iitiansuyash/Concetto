import NavigationBar from "../Components/NavigationBar"
import Hero from "../Components/Hero"
import AboutUs from "../Components/AboutUs"
import Events from "../Components/Events"
import Footer from "../Components/Footer"



export default function Home() {
    return (
        <div>
            <NavigationBar />
            <Hero />
            <AboutUs />
            <Events />
            <Footer />
        </div>
    )
}