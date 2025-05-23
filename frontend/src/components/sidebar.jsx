import { navItems } from '../data/navigation'
import { FiChevronDown } from 'react-icons/fi'

export default function Sidebar({ isOpen }) {
  return (
    <div
      className={`bg-white text-gray-800 shadow-md transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        {isOpen ? (
          <h1 className="text-xl font-bold text-indigo-600">FITPEO</h1>
        ) : (
          <h1 className="text-xl font-bold text-indigo-600">FP</h1>
        )}
      </div>
      <nav className="mt-6">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="px-2 py-1">
              <a
                href="#"
                className={`flex items-center px-4 py-3 rounded-lg ${
                  item.active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center justify-center w-6 h-6">
                  <span className="text-lg">{item.icon === 'dashboard' && '📊'}</span>
                  <span className="text-lg">{item.icon === 'activity' && '🏃'}</span>
                  <span className="text-lg">{item.icon === 'exercise' && '💪'}</span>
                  <span className="text-lg">{item.icon === 'nutrition' && '🍎'}</span>
                  <span className="text-lg">{item.icon === 'sleep' && '😴'}</span>
                  <span className="text-lg">{item.icon === 'meditation' && '🧘'}</span>
                  <span className="text-lg">{item.icon === 'settings' && '⚙️'}</span>
                </span>
                {isOpen && <span className="ml-3">{item.name}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {isOpen && (
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-600">JD</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">John Doe</p>
                <p className="text-xs text-gray-500">Premium Member</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-500">
              <FiChevronDown className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}