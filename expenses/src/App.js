import "./App.scss";
import Expenses from "./components/expenses/Expenses";

import {createTheme} from '@mui/material/styles';

function App() {

    const expenses = []

    const addExpenseHandler = expenseData => {
        const expense = {
            id: expenses.length + 1,
            ...expenseData
        }
        expenses.push(expense);
    }

	return (
		<div className="App">
            <Expenses expenses={expenses} onAddExpense={addExpenseHandler}/>
		</div>
	);
}

export default App;
