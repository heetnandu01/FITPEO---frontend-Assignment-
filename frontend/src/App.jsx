import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import DashboardMainContent from './components/DashboardMainContent'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <DashboardMainContent />
      </div>
    </div>
  )
}

export default App