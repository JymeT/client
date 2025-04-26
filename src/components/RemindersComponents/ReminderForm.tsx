import { useState } from 'react'

 

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
 

import { Button } from '@/components/ui/button'
 

import { Input } from '@/components/ui/input'
 

import { Label } from '@/components/ui/label'
 

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
 

import { Textarea } from '@/components/ui/textarea'
 

import { toast } from 'sonner'
 


 

interface ReminderFormProps {
 

  open: boolean
 

  onOpenChange: (open: boolean) => void
 

  onSubmit: (data: { name: string; nextDate: string; amount: number; frequency: string; description: string }) => void
 

}
 


 

export default function ReminderForm({ open, onOpenChange, onSubmit }: ReminderFormProps) {
 

  const [formData, setFormData] = useState({
 

    name: '',
 

    nextDate: '',
 

    amount: '',
 

    frequency: '',
 

    description: '',
 

  })
 


 

  const handleSubmit = (e: React.FormEvent) => {
 

    e.preventDefault()
 


 

    // Validate that the selected date is not in the past
 

    const selectedDate = new Date(formData.nextDate)
 

    const today = new Date()
 

    today.setHours(0, 0, 0, 0) // Reset time to start of day for fair comparison
 


 

    if (selectedDate < today) {
 

      toast.error('Please select a future date')
 

      return
 

    }
 


 

    onSubmit({
 

      ...formData,
 

      amount: Number(formData.amount),
 

    })
 

    setFormData({
 

      name: '',
 

      nextDate: '',
 

      amount: '',
 

      frequency: '',
 

      description: '',
 

    })
 

    onOpenChange(false)
 

  }
 


 

  const frequencies = ['Daily', 'Weekly', 'Bi-weekly', 'Monthly', 'Quarterly', 'Yearly']
 


 

  // Get today's date in YYYY-MM-DD format for the min attribute
 

  const today = new Date().toISOString().split('T')[0]
 


 

  return (
 

    <Dialog open={open} onOpenChange={onOpenChange}>
 

      <DialogContent>
 

        <DialogHeader>
 

          <DialogTitle>Add New Reminder</DialogTitle>
 

        </DialogHeader>
 

        <form onSubmit={handleSubmit} className="space-y-4">
 

          <div className="space-y-2">
 

            <Label htmlFor="name">Name</Label>
 

            <Input
 

              id="name"
 

              value={formData.name}
 

              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
 

              required
 

            />
 

          </div>
 


 

          <div className="space-y-2">
 

            <Label htmlFor="nextDate">Next Due Date</Label>
 

            <Input
 

              id="nextDate"
 

              type="date"
 

              min={today}
 

              value={formData.nextDate}
 

              onChange={(e) => setFormData({ ...formData, nextDate: e.target.value })}
 

              required
 

            />
 

          </div>
 


 

          <div className="space-y-2">
 

            <Label htmlFor="amount">Amount</Label>
 

            <Input
 

              id="amount"
 

              type="number"
 

              step="0.01"
 

              value={formData.amount}
 

              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
 

              required
 

            />
 

          </div>
 


 

          <div className="space-y-2">
 

            <Label htmlFor="frequency">Frequency</Label>
 

            <Select
 

              value={formData.frequency}
 

              onValueChange={(value) => setFormData({ ...formData, frequency: value })}
 

              required
 

            >
 

              <SelectTrigger>
 

                <SelectValue placeholder="Select frequency" />
 

              </SelectTrigger>
 

              <SelectContent>
 

                {frequencies.map((freq) => (
 

                  <SelectItem key={freq} value={freq}>
 

                    {freq}
 

                  </SelectItem>
 

                ))}
 

              </SelectContent>
 

            </Select>
 

          </div>
 


 

          <div className="space-y-2">
 

            <Label htmlFor="description">Description</Label>
 

            <Textarea
 

              id="description"
 

              value={formData.description}
 

              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
 

            />
 

          </div>
 


 

          <DialogFooter>
 

            <Button type="submit">Save Reminder</Button>
 

          </DialogFooter>
 

        </form>
 

      </DialogContent>
 

    </Dialog>
 

  )
 

}