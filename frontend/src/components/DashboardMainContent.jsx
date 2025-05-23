import HealthstatusCards from './HealthstatusCards'
import ActivityFeed from './ActivityFeed'
import UpcomingSchedule from './UpcomingSchedule'
import AnatomySection from './AnatomySection'
import CalendarView from './CalendarView'

export default function DashboardMainContent() {
  return (
    <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>
      
      <HealthstatusCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <ActivityFeed />
          <CalendarView />
        </div>
        <div className="space-y-6">
          <UpcomingSchedule />
          <AnatomySection />
        </div>
      </div>
    </main>
  )
}