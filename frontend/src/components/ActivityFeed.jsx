export default function ActivityFeed() {
  const activities = [
    { id: 1, time: '30 min ago', action: 'completed', title: 'Morning Run', duration: '45 min', calories: '320 kcal' },
    { id: 2, time: '2 hours ago', action: 'logged', title: 'Weight Training', duration: '60 min', calories: '450 kcal' },
    { id: 3, time: '5 hours ago', action: 'completed', title: 'Yoga Session', duration: '30 min', calories: '180 kcal' },
    { id: 4, time: 'Yesterday', action: 'set a goal', title: 'Daily Steps', target: '10,000 steps' },
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
        <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
              <span className="text-indigo-600">
                {activity.action === 'completed' ? '🏃' : activity.action === 'logged' ? '📝' : '🎯'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                {activity.title}
                {activity.duration && (
                  <span className="ml-2 text-xs text-gray-500">
                    ({activity.duration}, {activity.calories})
                  </span>
                )}
                {activity.target && (
                  <span className="ml-2 text-xs text-gray-500">(Target: {activity.target})</span>
                )}
              </p>
              <p className="text-xs text-gray-500">
                {activity.action === 'completed' ? 'Completed' : activity.action === 'logged' ? 'Logged' : 'Goal set'} • {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}