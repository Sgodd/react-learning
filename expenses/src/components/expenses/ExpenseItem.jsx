import { Box } from "@mui/material";
import React from "react";

const ExpenseItem = ({ title, amount, date }) => {
	return (
        <Box className="expense-item" sx={{boxShadow:2}}>
            <Box className="expense-item-title">
                <div className="expense-item__name">{title}</div>
                <div className="expense-item__date">
                    {date.toDateString()}
                </div>
            </Box>
            <Box className="expense-item-cost">
                <div className="expense-item__amount">£{amount}</div>
            </Box>
        </Box>

	);
};

export default ExpenseItem;
