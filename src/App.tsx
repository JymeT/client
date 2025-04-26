import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/auth/login'
import Register from './components/auth/register'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import DashboardLayout from './layouts/DashboardLayout'
import ChatbotPage from './pages/Chat'
import Landing from './pages/Landing'
import ExpensesPage from './pages/Expenses'
import RemindersPage from './pages/Reminders'
import NotificationsPage from './pages/Notifications'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Landing />} />

        {/* Protected routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<ChatbotPage />} />
          <Route path="/transactions" element={<ExpensesPage />} />
          <Route path="/reminders" element={<RemindersPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
