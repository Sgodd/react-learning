import { Box, Button, CardHeader, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker } from "@mui/lab";

const ExpenseForm = () => {
	const [date, setDate] = useState(Date.now());

	return (
		<Box className="expense-container">
			<form className="expense-form">
				<Stack spacing={2}>
                    <Typography variant="h4" component="div" sx={{}}> Create Expense</Typography>
					<TextField
						variant="standard"
						id="title"
						label="Title"
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
					/>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							label="Select Date"
							value={date}
							onChange={(val) => {
								setDate(val);
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
					<Button variant="contained"> Submit </Button>
				</Stack>
			</form>
		</Box>
	);
};

export default ExpenseForm;
