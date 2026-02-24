export type Transaction = {
  avatar: string
  name: string
  category: string
  date: string
  amount: number
  recurring: boolean
}

export type Budget = {
  category: string
  maximum: number
  theme: string
  total: number
}

export type Pot = {
  name: string
  target: number
  total: number
  theme: string
}

type Balance = {
  current: number
  income: number
  expenses: number
}

export type DashboardData = {
  balance: Balance
  transactions: Array<Transaction>
  budgets: Array<Budget>
  pots: Array<Pot>
}
