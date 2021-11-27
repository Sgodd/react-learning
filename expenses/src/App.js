import "./App.scss";
import Expenses from "./components/expenses/Expenses";

import {createTheme} from '@mui/material/styles';
import { useState } from "react";

function App() {

    const [expenses, setExpenses] = useState([]);

    const addExpenseHandler = expenseData => {
        const expense = {
            id: expenses.length + 1,
            ...expenseData
        }

        setExpenses((prevState) => [...prevState, expense])
    }

	return (
		<div className="App">
            <Expenses expenses={expenses} onAddExpense={addExpenseHandler}/>
		</div>
	);
}

export default App;
