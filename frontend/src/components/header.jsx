import { FiMenu, FiBell, FiSearch, FiUser } from 'react-icons/fi'

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button
            className="text-gray-500 hover:text-gray-600 lg:hidden"
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FiMenu className="h-6 w-6" />
          </button>
          <div className="relative mx-4 lg:mx-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </span>
            <input
              className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search..."
              type="search"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-1 text-gray-400 hover:text-gray-500 relative">
            <FiBell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <FiUser className="h-5 w-5 text-indigo-600" />
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  )
}