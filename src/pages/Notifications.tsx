import NavigContainer from '@/components/NotifiComponents/NavigContainer'
import NavItem from '@/components/NotifiComponents/NavItem'
import axios from '@/lib/axios'
import { useState, useEffect } from 'react'

interface Notification {
  name: string
  reminder_id: number
  date: string
  id: string
  status: string
  created_at: string
  updated_at: string
}

const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/notifications')
        const data = await response.data
        setNotifications(data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }
    fetchNotifications()
  }, [])

  return { notifications, isLoading, error }
}

export default function NotificationPage() {
  const { notifications } = useNotifications()
  if (notifications.length === 0) {
    return <div>No notifications</div>
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Notifications</h1>
      <NavigContainer>
        <div className="flex flex-col items-center gap-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="w-[70vw]">
              <NavItem notification={notification} />
            </div>
          ))}
        </div>
      </NavigContainer>
    </div>
  )
}