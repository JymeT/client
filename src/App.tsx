import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/auth/login'
import Register from './components/auth/register'
import Temp from './pages/Temp'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import DashboardLayout from './layouts/DashboardLayout'
import ChatbotPage from './pages/Chat'
import Landing from './pages/Landing'
import NotificationPage from './pages/NotificationPage'
import RemindersPage from './pages/Reminders'
function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Landing />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/reminder" element={<RemindersPage />} />

        {/* Redirect from /home to /dashboard */}

        {/* Protected routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<ChatbotPage />} />
          <Route path="/temp" element={<Temp />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
