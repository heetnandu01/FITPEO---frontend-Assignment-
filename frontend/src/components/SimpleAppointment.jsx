export default function SimpleAppointment({ appointment }) {
  return (
    <div className="flex items-start p-3 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
        <span className="text-indigo-600">
          {appointment.title.includes('Yoga') ? '🧘' : appointment.title.includes('Nutrition') ? '🍎' : '💪'}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{appointment.title}</p>
        <p className="text-xs text-gray-500">
          {appointment.time} • {appointment.trainer} • {appointment.duration}
        </p>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </button>
    </div>
  )
}