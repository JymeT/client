import { useAuth } from '../context/authContext'

export function Dashboard() {
  const { user } = useAuth()
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <p>{user?.name}</p>
    </div>
  )
}
export default Dashboard