import { Link } from "react-router-dom";

const ProductNav = () => {
    return  (
      <div className="w-full mx-auto">
  <div className="rounded-lg border border-gray-300 bg-white py-2 px-3">
    <nav className="flex flex-wrap gap-4 justify-center">
      <Link
        to="/"
        className="bg-gray-200 whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
      >
        {" "}
        Home{" "}
      </Link>
      <Link
        to="/allproducts"
        className="whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
      >
        {" "}
        All Products{" "}
      </Link>
      <Link
        to="/allrentals"
        className="whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
      >
        {" "}
        Rentals{" "}
      </Link>
      <Link
        to="/allsales"
        className="whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
      >
        {" "}
        For Sale{" "}
      </Link>
      
    </nav>
  </div>
</div>

    
    )
}

export default ProductNav;