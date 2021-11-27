import { Box } from "@mui/material";
import es from "date-fns/esm/locale/es/index.js";
import React, { useEffect, useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expenses, onAddExpense }) => {
	const [year, setYear] = useState("");

    const getFilteredExpenses = () => {
		if (year == "All" || year == "") {
			return expenses;
		} else {
			return expenses.filter(
				(expense) => expense.date.getFullYear() == year
			);
		}
	};

	const filteredExpenses = getFilteredExpenses();

	let expensesContent = (
		<Box
			sx={{ mt: 4, borderRadius: "15px", backgroundColor: "#EEE", p: 2 }}
		>
			No Content
		</Box>
	);

	if (filteredExpenses.length > 0) {
		expensesContent =
			filteredExpenses.length > 0 &&
			filteredExpenses.map((v) => (
				<ExpenseItem
					key={v.id}
					title={v.title}
					amount={v.amount}
					date={v.date}
				/>
			));
	}

	return (
		<>
			<ExpenseForm onAddExpense={onAddExpense} />

			<Box className="expense-container">
				<ExpenseFilter year={year} onYearChange={setYear} />

				<Box className="expense-item-list">
					{expensesContent}
				</Box>
			</Box>
		</>
	);
};

export default Expenses;
