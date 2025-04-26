import ButtonGroup from './ButtonGroup'
import ButtonNav from './ButtonNav'

export default function NavItem({ notification }: { notification: { name: string; description: string } }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-900">{notification.name}</h2>
          <p className="text-gray-600 text-sm">{notification.description}</p>
        </div>

        <ButtonGroup className="flex flex-col sm:flex-row gap-2 justify-end">
          <ButtonNav className="w-full sm:w-auto">Paid</ButtonNav>
          <ButtonNav variant="secondary" className="w-full sm:w-auto">
            Remind me later
          </ButtonNav>
          <ButtonNav variant="tertiary" className="w-full sm:w-auto">
            disable
          </ButtonNav>
        </ButtonGroup>
      </div>
    </div>
  )
}
