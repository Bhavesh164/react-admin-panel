import { useBudgets } from "../Contexts/BudgetContexts"
import BudgetCard from "./BudgetCard"

const TotlaBudgetCard = (props) => {
    const { expenses, budgets } = useBudgets()
    const amount=expenses.reduce(
        (total, expense) => total+expense.amount, 0
    )
    const max=budgets.reduce(
        (total, budget) => total+budget.max, 0
    )
    if(max === 0) return null
    return <BudgetCard name="Total" amount={amount} gray  max={max} hideButtons />
}

export default TotlaBudgetCard
