export default function AnatomySection() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Body Composition</h3>
        <button className="text-sm text-indigo-600 hover:text-indigo-800">Details</button>
      </div>
      <div className="flex justify-center">
        <div className="relative">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1864/1864593.png"
            alt="Human anatomy"
            className="h-48 opacity-70"
          />
          <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-sm text-gray-500">Muscle Mass</p>
          <p className="text-lg font-semibold text-gray-800">42.5 kg</p>
          <p className="text-xs text-green-600">+1.2% from last month</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Body Fat</p>
          <p className="text-lg font-semibold text-gray-800">18.3%</p>
          <p className="text-xs text-red-600">-0.8% from last month</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Hydration</p>
          <p className="text-lg font-semibold text-gray-800">62%</p>
          <p className="text-xs text-green-600">+3% from yesterday</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Bone Mass</p>
          <p className="text-lg font-semibold text-gray-800">3.1 kg</p>
          <p className="text-xs text-gray-500">No change</p>
        </div>
      </div>
    </div>
  )
}