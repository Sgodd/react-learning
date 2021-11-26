import { Box } from "@mui/system";
import React from "react";

const ExpenseItem = ({ title, amount, date }) => {
	return (
		<Box className="expense-item">
			<Box className="expense-item__inner">
				<Box className="expense-item-title">
					<div className="expense-item__title">{title}</div>
					<div className="expense-item__date">
						{date.toDateString()}
					</div>
				</Box>
				<Box className="expense-item-cost">
					<div className="expense-item__amount">£{amount}</div>
				</Box>
			</Box>
		</Box>
	);
};

export default ExpenseItem;
