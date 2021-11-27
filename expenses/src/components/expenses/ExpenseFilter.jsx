import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const ExpenseFilter = ({year, onYearChange}) => {
    
    return (
		<Box className="expense-container">
			<Box className="expenses-filter">
				<FormControl variant="standard" sx={{minWidth:"120px"}}>
                    <InputLabel id="year-SelectorLabel">Year</InputLabel>
					<Select
                        labelId="yearSelectorLabel"
                        label="Year"
						id="yearSelector"
                        value={year}
						onChange={(e) => {onYearChange(e.target.value)}}
					>
                        <MenuItem value={2022}>2022</MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                        <MenuItem value={2020}>2020</MenuItem>
                        <MenuItem value={2019}>2019</MenuItem>
                    </Select>

				</FormControl>
			</Box>
		</Box>
	);
};

export default ExpenseFilter;
