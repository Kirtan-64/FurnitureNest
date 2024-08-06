import Navbar from "../components/Navbar";
import ProductNav from "../components/ProductNav";
import Footer from "../components/Footer";
import { Carousel } from 'react-responsive-carousel';
import ProductCard from "../components/ProductCard";

const HomePage = () => {

    const data = [1,2,3,4,5,6,7,8]

    return (
        <div className="flex flex-col bg-gray-200 w-full h-screen">
            {/* navbar section */}
            <div className="flex flex-col ">
                <div>
                <Navbar />
                </div>
                <div className="pb-3 ">
                <ProductNav />
                </div>
            </div>

            {/* main content */}

            <div>
                {/* carousel */}
                <Carousel>
                <div>
                    <img src="https://res.cloudinary.com/deyfwd4ge/image/upload/v1716010711/enhancing-privacy-in-ai-driven-environments_r8kce9.webp" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/deyfwd4ge/image/upload/v1715939887/cld-sample-4.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/deyfwd4ge/image/upload/v1715939866/samples/landscapes/landscape-panorama.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
                

            </div>
            /* product cards */
            <div className="grid grid-cols-3 gap-4">
                {data.map((item) => {
                    return <ProductCard key={item} />;
                })}
            </div>

            {/* footer */}}
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;