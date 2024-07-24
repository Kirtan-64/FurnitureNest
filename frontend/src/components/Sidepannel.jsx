const Sidepannel = () => {
    return (
        <div className="flex h-screen flex-col justify-between border-e bg-white">
  <div className="px-4 py-6">

    <ul className="mt-6 space-y-1">
      <li>
        <a
          href="#"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Dashboard
        </a>
      </li>

      

      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Items
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Rental
        </a>
      </li>

    </ul>
  </div>

</div>
    )
}

export default Sidepannel;