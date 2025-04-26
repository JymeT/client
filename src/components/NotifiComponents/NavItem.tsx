import axios from '@/lib/axios'
import ButtonGroup from './ButtonGroup'
import ButtonNav from './ButtonNav'

interface Notification {
  name: string
  reminder_id: number
  date: string
  id: string
  status: string
  created_at: string
  updated_at: string
}

export default function NavItem({ notification }: { notification: Notification }) {
  const handlePaid = async () => {
    try {
      const res = await axios.put(`/notifications/${notification.id}`, {
        status: 'accepted',
      })
      window.location.reload()
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }
  const handleRemindMeLater = async () => {
    try {
      const res = await axios.put(`/notifications/${notification.id}`, {
        status: 'extended',
      })
      window.location.reload()
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }
  const handleDisable = async () => {
    try {
      const res = await axios.put(`/notifications/${notification.id}`, {
        status: 'refused',
      })
      console.log(res)
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">{notification.name}</h2>
        </div>

        <ButtonGroup className="flex flex-col sm:flex-row gap-2 justify-end">
          <ButtonNav className="w-full sm:w-auto" onClick={handlePaid}>
            Paid
          </ButtonNav>
          <ButtonNav variant="secondary" className="w-full sm:w-auto" onClick={handleRemindMeLater}>
            Remind me later
          </ButtonNav>
          <ButtonNav variant="tertiary" className="w-full sm:w-auto" onClick={handleDisable}>
            disable
          </ButtonNav>
        </ButtonGroup>
      </div>
    </div>
  )
}
