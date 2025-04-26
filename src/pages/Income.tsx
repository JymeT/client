'use client'

import type React from 'react'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { incomeSources } from '@/lib/mock-data'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon, Search } from 'lucide-react'
import { format } from 'date-fns'
import { Switch } from '@/components/ui/switch'

export default function IncomePage() {
  const [incomeList, setIncomeList] = useState(incomeSources)
  const [searchTerm, setSearchTerm] = useState('')

  // New income form state
  const [newIncome, setNewIncome] = useState({
    description: '',
    amount: '',
    date: new Date(),
    recurring: false,
  })

  // Dialog state
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewIncome({ ...newIncome, [name]: value })
  }

  // Handle recurring toggle
  const handleRecurringToggle = (checked: boolean) => {
    setNewIncome({ ...newIncome, recurring: checked })
  }

  // Handle date selection
  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setNewIncome({ ...newIncome, date })
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!newIncome.description || !newIncome.amount) {
      return
    }

    // Create new income object
    const income = {
      id: `inc-${incomeList.length + 1}`,
      description: newIncome.description,
      amount: Number.parseFloat(newIncome.amount),
      date: format(newIncome.date, 'yyyy-MM-dd'),
      recurring: newIncome.recurring,
    }

    // Add to income list
    setIncomeList([income, ...incomeList])

    // Reset form
    setNewIncome({
      description: '',
      amount: '',
      date: new Date(),
      recurring: false,
    })

    // Close dialog
    setIsDialogOpen(false)
  }

  // Filter income based on search term
  const filteredIncome = incomeList.filter((income) =>
    income.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Calculate total income
  const totalIncome = filteredIncome.reduce((sum, income) => sum + income.amount, 0)

  // Get recurring income
  const recurringIncome = filteredIncome.filter((income) => income.recurring)

  // Get one-time income
  const oneTimeIncome = filteredIncome.filter((income) => !income.recurring)

  // Calculate total recurring income
  const totalRecurringIncome = recurringIncome.reduce((sum, income) => sum + income.amount, 0)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Income</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Add Income</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Income</DialogTitle>
              <DialogDescription>Enter the details of your income below.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="description">Description*</Label>
                  <Input
                    id="description"
                    name="description"
                    value={newIncome.description}
                    onChange={handleInputChange}
                    placeholder="e.g., Monthly salary"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="amount">Amount ($)*</Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    value={newIncome.amount}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Date*</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {newIncome.date ? format(newIncome.date, 'PPP') : 'Select a date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={newIncome.date} onSelect={handleDateChange} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="recurring" checked={newIncome.recurring} onCheckedChange={handleRecurringToggle} />
                  <Label htmlFor="recurring">Recurring income</Label>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Add Income</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Total Income</CardTitle>
            <CardDescription>All income sources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalIncome.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Recurring Income</CardTitle>
            <CardDescription>Monthly recurring income</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRecurringIncome.toFixed(2)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Income Sources</CardTitle>
            <CardDescription>Number of income sources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredIncome.length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Income List</CardTitle>
          <CardDescription>Manage your income sources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-4">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search income sources..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-medium">Recurring Income</h3>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Description</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recurringIncome.length > 0 ? (
                      recurringIncome.map((income) => (
                        <TableRow key={income.id}>
                          <TableCell className="font-medium">{income.description}</TableCell>
                          <TableCell>{income.date}</TableCell>
                          <TableCell className="text-right">${income.amount.toFixed(2)}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={3} className="h-24 text-center">
                          No recurring income found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-medium">One-time Income</h3>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Description</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {oneTimeIncome.length > 0 ? (
                      oneTimeIncome.map((income) => (
                        <TableRow key={income.id}>
                          <TableCell className="font-medium">{income.description}</TableCell>
                          <TableCell>{income.date}</TableCell>
                          <TableCell className="text-right">${income.amount.toFixed(2)}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={3} className="h-24 text-center">
                          No one-time income found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Total income sources: {filteredIncome.length} (Recurring: {recurringIncome.length}, One-time:{' '}
            {oneTimeIncome.length})
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
