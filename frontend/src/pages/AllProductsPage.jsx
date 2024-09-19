import Navbar from "../components/Navbar";
import ProductNav from "../components/ProductNav";
import Footer from "../components/Footer";
import { Carousel } from 'react-responsive-carousel';
import ProductCard from "../components/ProductCard";

const AllProductsPage = () => {

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

            {/* product cards */}
            <div className="">
            <div className="text-3xl font-bold py-2 px-4 text-center bg-white shadow-xl">
                    All Products
                </div>
                <div className='p-2 grid grid-cols-1 sm:grid-cols-5'>
                        {data.map((item) => {
                            return (
                                <div className="p-2">
                                <ProductCard key={item}/>
                                </div>
                            )
                        })}
                </div>
            </div>

            {/* footer */}
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default AllProductsPage;