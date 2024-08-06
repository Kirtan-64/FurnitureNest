

const ProductNav = () => {
    return  (
      <div className="w-full mx-auto">
  <div className="rounded-lg border border-gray-300 bg-white py-2 px-3">
    <nav className="flex flex-wrap gap-4 justify-center">
      <a
        href="#"
        className="bg-gray-200 whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
      >
        {" "}
        Home{" "}
      </a>
      <a
        href="#"
        className="whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
      >
        {" "}
        All Products{" "}
      </a>
      <a
        href="#"
        className="whitespace-nowrap inline-flex rounded-lg  py-2 px-3 text-sm font-medium text-gray-900 transition-all duration-200 ease-in-out"
      >
        {" "}
        Rentals{" "}
      </a>
      <a
        href="#"
        className="whitespace-nowrap inline-flex rounded-lg py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-gray-900"
      >
        {" "}
        For Sale{" "}
      </a>
      
    </nav>
  </div>
</div>

    
    )
}

export default ProductNav;