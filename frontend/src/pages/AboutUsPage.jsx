import AboutUsTop from "../components/AboutUsTop";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OurValues from "../components/OurValues";
import Testimonial from "../components/Testimonial";

const AboutUsPage = () => {
    return (
        <div className="flex flex-col">
            <div>
                <Navbar />
            </div>
            <div>
                <AboutUsTop />
            </div>
            <div>
                <OurValues />
            </div>
            <div>
                <Testimonial />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default AboutUsPage;