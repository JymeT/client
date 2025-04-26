// 'use client'

// import type React from 'react'

// import { useState } from 'react'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog'
// import { expenses, expenseCategories } from '@/lib/mock-data'
// import { Calendar } from '@/components/ui/calendar'
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
// import { CalendarIcon, Search } from 'lucide-react'
// import { format } from 'date-fns'

// export default function TransactionsPage() {
//   const [transactionsList, setTransactionsList] = useState(expenses)
//   const [searchTerm, setSearchTerm] = useState('')
//   const [categoryFilter, setCategoryFilter] = useState('')

//   // New transaction form state
//   const [newTransaction, setNewTransaction] = useState({
//     description: '',
//     amount: '',
//     category: '',
//     date: new Date(),
//   })

//   // Dialog state
//   const [isDialogOpen, setIsDialogOpen] = useState(false)

//   // Handle form input changes
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setNewTransaction({ ...newTransaction, [name]: value })
//   }

//   // Handle category selection
//   const handleCategoryChange = (value: string) => {
//     setNewTransaction({ ...newTransaction, category: value })
//   }

//   // Handle date selection
//   const handleDateChange = (date: Date | undefined) => {
//     if (date) {
//       setNewTransaction({ ...newTransaction, date })
//     }
//   }

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()

//     // Validate form
//     if (!newTransaction.description || !newTransaction.amount || !newTransaction.category) {
//       return
//     }

//     // Create new transaction object
//     const transaction = {
//       id: `trans-${transactionsList.length + 1}`,
//       description: newTransaction.description,
//       amount: Number.parseFloat(newTransaction.amount),
//       date: format(newTransaction.date, 'yyyy-MM-dd'),
//       category: newTransaction.category,
//       categoryId: expenseCategories.find((cat) => cat.name === newTransaction.category)?.id || '',
//     }

//     // Add to transactions list
//     setTransactionsList([transaction, ...transactionsList])

//     // Reset form
//     setNewTransaction({
//       description: '',
//       amount: '',
//       category: '',
//       date: new Date(),
//     })

//     // Close dialog
//     setIsDialogOpen(false)
//   }

//   // Filter transactions based on search term and category
//   const filteredTransactions = transactionsList.filter((transaction) => {
//     const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
//     const matchesCategory = categoryFilter ? transaction.category === categoryFilter : true
//     return matchesSearch && matchesCategory
//   })

//   // Calculate total of filtered transactions
//   const totalFilteredTransactions = filteredTransactions.reduce((sum, transaction) => sum + transaction.amount, 0)

//   return (
//     <div className="flex flex-col gap-4">
//       <div className="flex items-center justify-between">
//         <h1 className="text-3xl font-bold">Transactions</h1>
//         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//           <DialogTrigger asChild>
//             <Button>Add Transaction</Button>
//           </DialogTrigger>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Add New Transaction</DialogTitle>
//               <DialogDescription>Enter the details of your transaction below.</DialogDescription>
//             </DialogHeader>
//             <form onSubmit={handleSubmit}>
//               <div className="grid gap-4 py-4">
//                 <div className="grid gap-2">
//                   <Label htmlFor="description">Description</Label>
//                   <Input
//                     id="description"
//                     name="description"
//                     value={newTransaction.description}
//                     onChange={handleInputChange}
//                     placeholder="e.g., Grocery shopping"
//                   />
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="amount">Amount ($)</Label>
//                   <Input
//                     id="amount"
//                     name="amount"
//                     type="number"
//                     value={newTransaction.amount}
//                     onChange={handleInputChange}
//                     placeholder="0.00"
//                     min="0"
//                     step="0.01"
//                   />
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="category">Category</Label>
//                   <Select value={newTransaction.category} onValueChange={handleCategoryChange}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select a category" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {expenseCategories.map((category) => (
//                         <SelectItem key={category.id} value={category.name}>
//                           {category.name}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="grid gap-2">
//                   <Label>Date</Label>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <Button variant="outline" className="w-full justify-start text-left font-normal">
//                         <CalendarIcon className="mr-2 h-4 w-4" />
//                         {newTransaction.date ? format(newTransaction.date, 'PPP') : 'Select a date'}
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0">
//                       <Calendar mode="single" selected={newTransaction.date} onSelect={handleDateChange} initialFocus />
//                     </PopoverContent>
//                   </Popover>
//                 </div>
//               </div>
//               <DialogFooter>
//                 <Button type="submit">Add Transaction</Button>
//               </DialogFooter>
//             </form>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Transaction List</CardTitle>
//           <CardDescription>Manage and filter your transactions</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="flex flex-col gap-4 sm:flex-row">
//             <div className="relative flex-1">
//               <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search transactions..."
//                 className="pl-8"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <Select value={categoryFilter} onValueChange={setCategoryFilter}>
//               <SelectTrigger className="w-full sm:w-[180px]">
//                 <SelectValue placeholder="All Categories" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="">All Categories</SelectItem>
//                 {expenseCategories.map((category) => (
//                   <SelectItem key={category.id} value={category.name}>
//                     {category.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="mt-4 rounded-md border">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Description</TableHead>
//                   <TableHead>Category</TableHead>
//                   <TableHead>Date</TableHead>
//                   <TableHead className="text-right">Amount</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {filteredTransactions.length > 0 ? (
//                   filteredTransactions.map((transaction) => (
//                     <TableRow key={transaction.id}>
//                       <TableCell className="font-medium">{transaction.description}</TableCell>
//                       <TableCell>
//                         <div className="flex items-center gap-2">
//                           <div
//                             className="h-3 w-3 rounded-full"
//                             style={{
//                               backgroundColor: expenseCategories.find((cat) => cat.name === transaction.category)
//                                 ?.color,
//                             }}
//                           />
//                           {transaction.category}
//                         </div>
//                       </TableCell>
//                       <TableCell>{transaction.date}</TableCell>
//                       <TableCell className="text-right">${transaction.amount.toFixed(2)}</TableCell>
//                     </TableRow>
//                   ))
//                 ) : (
//                   <TableRow>
//                     <TableCell colSpan={4} className="h-24 text-center">
//                       No transactions found.
//                     </TableCell>
//                   </TableRow>
//                 )}
//               </TableBody>
//             </Table>
//           </div>
//         </CardContent>
//         <CardFooter className="flex justify-between">
//           <div>
//             <p className="text-sm text-muted-foreground">
//               Showing {filteredTransactions.length} of {transactionsList.length} transactions
//             </p>
//           </div>
//           <div className="text-right">
//             <p className="text-sm font-medium">Total: ${totalFilteredTransactions.toFixed(2)}</p>
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }
