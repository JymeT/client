import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import ReminderForm from '@/components/RemindersComponents/ReminderForm'

interface Reminder {
  id: string
  name: string
  nextDate: Date
  amount: number
  frequency: string
  description: string
  enabled: boolean
}

export default function RemindersPage() {
  const [reminders, setReminders] = useState<Reminder[]>([])
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleAddReminder = (data: {
    name: string
    nextDate: string
    amount: number
    frequency: string
    description: string
  }) => {
    const newReminder: Reminder = {
      id: Date.now().toString(),
      name: data.name,
      nextDate: new Date(data.nextDate),
      amount: data.amount,
      frequency: data.frequency,
      description: data.description,
      enabled: true,
    }
    setReminders([...reminders, newReminder])
  }

  const toggleReminder = (id: string) => {
    setReminders(
      reminders.map((reminder) => (reminder.id === id ? { ...reminder, enabled: !reminder.enabled } : reminder)),
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">My Reminders</h1>
        <Button onClick={() => setIsFormOpen(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Reminder
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reminders.length === 0 ? (
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle className="text-center text-gray-500">No reminders yet</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-400">Add your first reminder to get started</CardContent>
          </Card>
        ) : (
          reminders.map((reminder) => (
            <Card key={reminder.id} className={reminder.enabled ? '' : 'opacity-60'}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>{reminder.name}</CardTitle>
                <Switch
                  checked={reminder.enabled}
                  onCheckedChange={() => toggleReminder(reminder.id)}
                  aria-label={`Toggle ${reminder.name} reminder`}
                />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Next Due:</span>
                    <span>{reminder.nextDate.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Amount:</span>
                    <span>${reminder.amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Frequency:</span>
                    <span>{reminder.frequency}</span>
                  </div>
                  {reminder.description && (
                    <div className="pt-2 border-t">
                      <p className="text-sm text-gray-600">{reminder.description}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <ReminderForm open={isFormOpen} onOpenChange={setIsFormOpen} onSubmit={handleAddReminder} />
    </div>
  )
}
