import { appointments } from '../data/upcomingAppointments'
import SimpleAppointment from './SimpleAppointment'

export default function UpcomingSchedule() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Upcoming Schedule</h3>
        <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
      </div>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <SimpleAppointment key={appointment.id} appointment={appointment} />
        ))}
      </div>
      <button className="w-full mt-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-100">
        + Add New Appointment
      </button>
    </div>
  )
}