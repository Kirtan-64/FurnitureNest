import {Link} from "react-router-dom";

const Sidepannel = () => {
    return (
        <div className="flex h-screen flex-col justify-between border-e bg-white">
  <div className="px-4 py-6">

    <ul className="mt-6 space-y-1">
      <li>
        <Link
          to="/dashboard"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Dashboard
        </Link>
      </li>

      

      <li>
        <Link
          to="/items"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          My Items
        </Link>
      </li>

      <li>
        <Link
          to="/rentals"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          My Rentals
        </Link>
      </li>

    </ul>
  </div>

</div>
    )
}

export default Sidepannel;