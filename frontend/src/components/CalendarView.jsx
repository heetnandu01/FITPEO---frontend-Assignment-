import { calendarEvents } from '../data/calendarAppointment'

export default function CalendarView() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
  const currentYear = currentDate.getFullYear()


  const weekDays = []
  for (let i = 0; i < 7; i++) {
    const day = new Date()
    day.setDate(currentDate.getDate() - currentDate.getDay() + i)
    weekDays.push(day)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Calendar</h3>
        <button className="text-sm text-indigo-600 hover:text-indigo-800">View All</button>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <h4 className="text-md font-medium text-gray-700">
          {currentMonth} {currentYear}
        </h4>
        <div className="flex space-x-2">
          <button className="p-1 rounded-md hover:bg-gray-100">
            <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-1 rounded-md hover:bg-gray-100">
            <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day, index) => {
          const isToday = day.toDateString() === currentDate.toDateString()
          const dayEvents = calendarEvents.filter(
            (event) => new Date(event.date).toDateString() === day.toDateString()
          )

          return (
            <div
              key={index}
              className={`min-h-16 p-1 border rounded-md ${
                isToday ? 'border-indigo-300 bg-indigo-50' : 'border-gray-200'
              }`}
            >
              <div
                className={`text-xs text-center p-1 rounded-full ${
                  isToday ? 'bg-indigo-600 text-white' : 'text-gray-700'
                }`}
              >
                {day.getDate()}
              </div>
              <div className="mt-1 space-y-1">
                {dayEvents.slice(0, 2).map((event) => (
                  <div
                    key={event.id}
                    className="text-xs p-1 rounded truncate"
                    style={{
                      backgroundColor:
                        event.type === 'exercise'
                          ? '#EFF6FF'
                          : event.type === 'group'
                          ? '#F0FDF4'
                          : '#FEF2F2',
                      color:
                        event.type === 'exercise'
                          ? '#1D4ED8'
                          : event.type === 'group'
                          ? '#047857'
                          : '#B91C1C',
                    }}
                  >
                    {event.time} {event.title}
                  </div>
                ))}
                {dayEvents.length > 2 && (
                  <div className="text-xs text-center text-gray-500">+{dayEvents.length - 2} more</div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}