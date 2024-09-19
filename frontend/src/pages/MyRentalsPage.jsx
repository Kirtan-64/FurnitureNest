import Navbar from "../components/Navbar"
import ProductList from "../components/ProductList";
import RentalList from "../components/RentalList";
import Sidepannel from "../components/Sidepannel";

const MyRentalsPage = () => {
    return (
        <div className="flex flex-row w-full">
            <div><Sidepannel /></div>
            <div className="flex flex-col w-full">
                <div className="w-full"><Navbar /></div>
                <div className="flex flex-col w-full p-5"> 
                <div className="text-2xl font-bold text-center py-2">Your Rental Items</div>
                    <ProductList />
                    <div className="text-2xl font-bold text-center py-2">Rental Item Status</div>
                    <RentalList />
                </div>
            </div>
        </div>
    )
}

export default MyRentalsPage;