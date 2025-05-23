import { healthMetrics } from '../data/healthData'

export default function HealthstatusCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {healthMetrics.map((metric) => (
        <div key={metric.id} className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">{metric.title}</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">
                {metric.value} <span className="text-sm font-normal text-gray-500">{metric.unit}</span>
              </p>
            </div>
            <div
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                metric.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {metric.trend === 'up' ? '↑' : '↓'} {metric.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}