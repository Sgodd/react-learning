import { Box } from "@mui/material";
import React from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expenses }) => {
	return (
		<>
			<ExpenseForm />

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
