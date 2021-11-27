import { Box, Button, CardHeader, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "@mui/lab";

const ExpenseForm = () => {
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState(0);
	const [date, setDate] = useState(Date.now());

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        setTitle("");
        setAmount(0);
        setDate(Date.now());
    }

	return (
		<Box className="expense-container">
			<form className="expense-form" onSubmit={submitHandler}>
				<Stack spacing={2}>
                    
                    <Typography variant="h4" component="div" sx={{}}> Create Expense</Typography>
					<TextField
						variant="standard"
						id="title"
						label="Title"
                        value={title}
                        onChange={(e) => {setTitle(e.target.value)}}
                        InputLabelProps={{
							shrink: true,
						}}
 
					/>
					<TextField
						variant="outlined"
						id="amount"
						type="number"
						label="Amount"
						InputLabelProps={{
							shrink: true,
						}}
                        value={amount}
                        onChange={(e) => {setAmount(e.target.value)}}
					/>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
                            maxDate={Date.now()}
							label="Select Date"
							value={date}
							onChange={(val) => {
								setDate(val);
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
					<Button variant="contained" type="submit"> Submit </Button>
				</Stack>
			</form>
		</Box>
	);
};

export default ExpenseForm;
