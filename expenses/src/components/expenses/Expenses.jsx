import { Box } from "@mui/material";
import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expenses, onAddExpense }) => {

    const [year, setYear] = useState("")

	return (
		<>
			<ExpenseForm onAddExpense={onAddExpense}/>

            <ExpenseFilter year={year} onYearChange={setYear}/>
			<Box className="expense-container">
				<Box className="expense-item-list">
					{expenses.map((v, i) => (
						<ExpenseItem
							key={i}
							title={v.title}
							amount={v.amount}
							date={v.date}
						/>
					))}
				</Box>
			</Box>
		</>
	);
};

export default Expenses;
