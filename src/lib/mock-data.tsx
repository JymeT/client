// Expense categories
export const transactionCategories = [
  { id: 'cat-1', name: 'Fun', color: '#FF6B6B' },
  { id: 'cat-2', name: 'Living', color: '#4ECDC4' },
  { id: 'cat-3', name: 'Education', color: '#FFD166' },
  { id: 'cat-4', name: 'Family', color: '#6A0572' },
  { id: 'cat-5', name: 'Zakat', color: '#1A535C' },
  { id: 'cat-6', name: 'Health', color: '#F25F5C' },
  { id: 'cat-7', name: 'Transportation', color: '#70C1B3' },
  { id: 'cat-8', name: 'Other', color: '#7B8CDE' },
  { id: 'cat-9', name: 'Investment', color: '#7B8CDE' },
  { id: 'cat-10', name: 'Savings', color: '#7B8CDE' },
  { id: 'cat-11', name: 'Salary', color: '#7B8CDE' },
  { id: 'cat-12', name: 'Other', color: '#7B8CDE' },
]

// Mock expenses
export const transactions = [
  {
    id: 'exp-1',
    amount: 120,
    description: 'Grocery shopping',
    date: '2023-04-15',
    category: 'Living',
    categoryId: 'cat-2',
  },
  {
    id: 'exp-2',
    amount: 45,
    description: 'Movie tickets',
    date: '2023-04-12',
    category: 'Fun',
    categoryId: 'cat-1',
  },
  {
    id: 'exp-3',
    amount: 200,
    description: 'Online course',
    date: '2023-04-10',
    category: 'Education',
    categoryId: 'cat-3',
  },
  {
    id: 'exp-4',
    amount: 150,
    description: 'Gift for mom',
    date: '2023-04-05',
    category: 'Family',
    categoryId: 'cat-4',
  },
  {
    id: 'exp-5',
    amount: 300,
    description: 'Charity donation',
    date: '2023-04-01',
    category: 'Zakat',
    categoryId: 'cat-5',
  },
  {
    id: 'exp-6',
    amount: 85,
    description: 'Prescription medication',
    date: '2023-04-08',
    category: 'Health',
    categoryId: 'cat-6',
  },
  {
    id: 'exp-7',
    amount: 60,
    description: 'Uber rides',
    date: '2023-04-14',
    category: 'Transportation',
    categoryId: 'cat-7',
  },
  {
    id: 'exp-8',
    amount: 40,
    description: 'Office supplies',
    date: '2023-04-03',
    category: 'Other',
    categoryId: 'cat-8',
  },
  {
    id: 'exp-9',
    amount: 75,
    description: 'Dinner with friends',
    date: '2023-04-18',
    category: 'Fun',
    categoryId: 'cat-1',
  },
  {
    id: 'exp-10',
    amount: 110,
    description: 'Electricity bill',
    date: '2023-04-20',
    category: 'Living',
    categoryId: 'cat-2',
  },
]

// Mock income sources
export const incomeSources = [
  {
    id: 'inc-1',
    amount: 3500,
    description: 'Monthly salary',
    date: '2023-04-01',
    recurring: true,
  },
  {
    id: 'inc-2',
    amount: 500,
    description: 'Freelance project',
    date: '2023-04-15',
    recurring: false,
  },
  {
    id: 'inc-3',
    amount: 200,
    description: 'Investment dividends',
    date: '2023-04-10',
    recurring: true,
  },
]

// Mock medications
export const medications = [
  {
    id: 'med-1',
    name: 'Vitamin D',
    dosage: '1000 IU',
    frequency: 'Daily',
    time: '08:00',
    startDate: '2023-01-01',
    endDate: null, // Ongoing
    notes: 'Take with food',
    cost: 15,
  },
  {
    id: 'med-2',
    name: 'Allergy medication',
    dosage: '10mg',
    frequency: 'Daily',
    time: '20:00',
    startDate: '2023-03-15',
    endDate: '2023-06-15',
    notes: 'Take before bed',
    cost: 25,
  },
  {
    id: 'med-3',
    name: 'Antibiotic',
    dosage: '500mg',
    frequency: 'Twice daily',
    time: '08:00,20:00',
    startDate: '2023-04-10',
    endDate: '2023-04-17',
    notes: 'Take with food, complete full course',
    cost: 40,
  },
]

// Mock notifications
export const notifications = [
  {
    id: 'notif-1',
    type: 'medication',
    title: 'Medication reminder',
    message: 'Time to take Vitamin D',
    date: '2023-04-15T08:00:00',
    read: false,
    relatedId: 'med-1',
  },
  {
    id: 'notif-2',
    type: 'expense',
    title: 'Large expense alert',
    message: 'You spent $300 on Charity donation',
    date: '2023-04-01T14:30:00',
    read: true,
    relatedId: 'exp-5',
  },
  {
    id: 'notif-3',
    type: 'income',
    title: 'Income received',
    message: 'You received $3500 from Monthly salary',
    date: '2023-04-01T09:15:00',
    read: true,
    relatedId: 'inc-1',
  },
  {
    id: 'notif-4',
    type: 'medication',
    title: 'Medication reminder',
    message: 'Time to take Allergy medication',
    date: '2023-04-15T20:00:00',
    read: false,
    relatedId: 'med-2',
  },
  {
    id: 'notif-5',
    type: 'system',
    title: 'Welcome to Finance & Health Manager',
    message: 'Thank you for joining! Explore the dashboard to get started.',
    date: '2023-01-15T10:00:00',
    read: true,
    relatedId: null,
  },
]

// Mock invoices
export const invoices = [
  {
    id: 'inv-1',
    title: 'Grocery receipt',
    date: '2023-04-15',
    amount: 120,
    imageUrl: '/placeholder.svg?height=300&width=200&text=Grocery+Receipt',
    relatedExpenseId: 'exp-1',
  },
  {
    id: 'inv-2',
    title: 'Movie tickets',
    date: '2023-04-12',
    amount: 45,
    imageUrl: '/placeholder.svg?height=300&width=200&text=Movie+Tickets',
    relatedExpenseId: 'exp-2',
  },
  {
    id: 'inv-3',
    title: 'Online course receipt',
    date: '2023-04-10',
    amount: 200,
    imageUrl: '/placeholder.svg?height=300&width=200&text=Course+Receipt',
    relatedExpenseId: 'exp-3',
  },
]

// Mock monthly expense data for charts
export const monthlyExpenseData = [
  { month: 'Jan', expenses: 1200 },
  { month: 'Feb', expenses: 1400 },
  { month: 'Mar', expenses: 1100 },
  { month: 'Apr', expenses: 1300 },
  { month: 'May', expenses: 900 },
  { month: 'Jun', expenses: 1500 },
  { month: 'Jul', expenses: 1250 },
  { month: 'Aug', expenses: 1350 },
  { month: 'Sep', expenses: 1000 },
  { month: 'Oct', expenses: 1150 },
  { month: 'Nov', expenses: 1300 },
  { month: 'Dec', expenses: 1800 },
]

// Mock expense by category data for charts
export const expensesByCategoryData = [
  { category: 'Fun', amount: 350 },
  { category: 'Living', amount: 850 },
  { category: 'Education', amount: 400 },
  { category: 'Family', amount: 300 },
  { category: 'Zakat', amount: 300 },
  { category: 'Health', amount: 250 },
  { category: 'Transportation', amount: 200 },
  { category: 'Investment', amount: 200 },
  { category: 'Savings', amount: 200 },
  { category: 'Salary', amount: 200 },
  { category: 'Other', amount: 150 },
]

// Mock income vs expenses data for charts
export const incomeVsExpensesData = [
  { month: 'Jan', income: 3700, expenses: 1200 },
  { month: 'Feb', income: 3700, expenses: 1400 },
  { month: 'Mar', income: 3700, expenses: 1100 },
  { month: 'Apr', income: 4200, expenses: 1300 },
  { month: 'May', income: 3700, expenses: 900 },
  { month: 'Jun', income: 3700, expenses: 1500 },
  { month: 'Jul', income: 4000, expenses: 1250 },
  { month: 'Aug', income: 3700, expenses: 1350 },
  { month: 'Sep', income: 3700, expenses: 1000 },
  { month: 'Oct', income: 3900, expenses: 1150 },
  { month: 'Nov', income: 3700, expenses: 1300 },
  { month: 'Dec', income: 4500, expenses: 1800 },
]

// Mock chatbot responses
export const chatbotResponses = {
  'expense report':
    "Based on your expenses for the last 5 months, you've spent a total of $6,250. Your highest spending category is Living at 32%, followed by Fun at 15% and Education at 12%. Your average monthly spending is $1,250.",
  'savings tips':
    'Looking at your spending patterns, I recommend reducing your Fun category expenses by 20%, which could save you about $70 per month. Also, consider reviewing your Living expenses for potential savings on utilities and groceries.',
  'budget plan':
    'Based on your income and expenses, I recommend allocating 50% to essential expenses, 30% to discretionary spending, and 20% to savings. This would mean $2,100 for essentials, $1,260 for discretionary, and $840 for savings each month.',
  'medication cost':
    'Your total medication costs are approximately $80 per month. The most expensive medication is your Antibiotic at $40, followed by Allergy medication at $25.',
}


// User profile
export const userProfile = {
  id: "user-1",
  name: "John Doe",
  email: "user@example.com",
  avatar: "/placeholder.svg?height=40&width=40",
  joinedDate: "January 2023",
}

// Expense categories
export const expenseCategories = [
  { id: "cat-1", name: "Fun", color: "#FF6B6B" },
  { id: "cat-2", name: "Living", color: "#4ECDC4" },
  { id: "cat-3", name: "Education", color: "#FFD166" },
  { id: "cat-4", name: "Family", color: "#6A0572" },
  { id: "cat-5", name: "Zakat", color: "#1A535C" },
  { id: "cat-6", name: "Health", color: "#F25F5C" },
  { id: "cat-7", name: "Transportation", color: "#70C1B3" },
  { id: "cat-8", name: "Other", color: "#7B8CDE" },
]

// Mock expenses
export const expenses = [
  {
    id: "exp-1",
    amount: 120,
    description: "Grocery shopping",
    date: "2023-04-15",
    category: "Living",
    categoryId: "cat-2",
  },
  {
    id: "exp-2",
    amount: 45,
    description: "Movie tickets",
    date: "2023-04-12",
    category: "Fun",
    categoryId: "cat-1",
  },
  {
    id: "exp-3",
    amount: 200,
    description: "Online course",
    date: "2023-04-10",
    category: "Education",
    categoryId: "cat-3",
  },
  {
    id: "exp-4",
    amount: 150,
    description: "Gift for mom",
    date: "2023-04-05",
    category: "Family",
    categoryId: "cat-4",
  },
  {
    id: "exp-5",
    amount: 300,
    description: "Charity donation",
    date: "2023-04-01",
    category: "Zakat",
    categoryId: "cat-5",
  },
  {
    id: "exp-6",
    amount: 85,
    description: "Prescription medication",
    date: "2023-04-08",
    category: "Health",
    categoryId: "cat-6",
  },
  {
    id: "exp-7",
    amount: 60,
    description: "Uber rides",
    date: "2023-04-14",
    category: "Transportation",
    categoryId: "cat-7",
  },
  {
    id: "exp-8",
    amount: 40,
    description: "Office supplies",
    date: "2023-04-03",
    category: "Other",
    categoryId: "cat-8",
  },
  {
    id: "exp-9",
    amount: 75,
    description: "Dinner with friends",
    date: "2023-04-18",
    category: "Fun",
    categoryId: "cat-1",
  },
  {
    id: "exp-10",
    amount: 110,
    description: "Electricity bill",
    date: "2023-04-20",
    category: "Living",
    categoryId: "cat-2",
  },
]
