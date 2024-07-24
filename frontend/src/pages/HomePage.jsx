import Navbar from "../components/Navbar";
import ProductNav from "../components/ProductNav";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div className="flex flex-col bg-gray-200 w-full h-screen">
            {/* navbar section */}
            <div className="flex flex-col ">
                <div>
                <Navbar />
                </div>
                <div className="pb-3">
                <ProductNav />
                </div>
            </div>

            {/* main content */}
            <div></div>

            {/* footer */}
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;