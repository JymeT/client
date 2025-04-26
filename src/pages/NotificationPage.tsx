import NavigContainer from '@/components/NotifiComponents/NavigContainer'
import NavItem from '@/components/NotifiComponents/NavItem'

const notifications = [
  { id: 1, name: 'Notification 1', description: 'This is the first notification' },
  { id: 2, name: 'Notification 2', description: 'This is the second notification' },
  { id: 3, name: 'Notification 3', description: 'This is the third notification' },
  { id: 4, name: 'Notification 4', description: 'This is the fourth notification' },
  { id: 5, name: 'Notification 5', description: 'This is the fifth notification' },
]

export default function NotificationPage() {
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
