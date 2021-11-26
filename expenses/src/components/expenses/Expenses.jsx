import { Box } from "@mui/material";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expenses }) => {
	return (
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
	);
};

export default Expenses;
