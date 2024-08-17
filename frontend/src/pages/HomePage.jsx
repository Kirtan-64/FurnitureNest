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
                <Carousel showArrows="true" showIndicators="true" useKeyboardArrows="true" autoPlay="true" stopOnHover="true" swipeable="true" infiniteLoop="true" interval={2500} transitionTime={500} swipeScrollTolerance={5}>
                <div>
                    <img src="https://res.cloudinary.com/deyfwd4ge/image/upload/v1723180116/minimalist-black-interior-with-black-sofa_2_qmkedl.jpg" />
                    <p className="legend">Black Sofaset</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/deyfwd4ge/image/upload/v1723180116/gray-sofa-brown-living-room-with-copy-space_1_wckhmf.jpg" />
                    <p className="legend">Grey Sofaset</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/deyfwd4ge/image/upload/v1723180117/home-entryway-with-modern-furnishing-design_1_hksich.jpg" />
                    <p className="legend">Wooden Cabinet</p>
                </div>
            </Carousel>
                

            </div>
            /* product cards */
            <div className="flex felx-col">
                <div className="text-xl p-2">Chairs</div>
                <div className='p-2'>
                    <Carousel>
                        {data.map((item) => {
                            return (
                                <ProductCard key={item}/>
                            )
                        })}
                    </Carousel>
                </div>
            </div>

            {/* footer */}
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;