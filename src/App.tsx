import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/auth/login'
import Register from './components/auth/register'
import Temp from './pages/Temp'
import NotFound from './pages/NotFound'
import DashboardLayout from './layouts/DashboardLayout'
function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<div>Hello world</div>} />

        {/* Protected routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/temp" element={<Temp />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
