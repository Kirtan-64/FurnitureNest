import Navbar from "../components/Navbar"
import ProductList from "../components/ProductList";
import Sidepannel from "../components/Sidepannel";

const MyItemsPage = () => {
    return (
        <div className="flex flex-row w-full">
            <div><Sidepannel /></div>
            <div className="flex flex-col w-full">
                <div className="w-full"><Navbar /></div>
                <div className="flex flex-col w-full p-5"> 
                <div className="text-2xl font-bold text-center py-2">Your Items</div>
                    <ProductList />
                </div>
            </div>
        </div>
    )
}

export default MyItemsPage;