import { Box } from '@mui/system'
import React from 'react'
import ExpenseItem from './ExpenseItem'


const Expenses = ({expenses}) => {
    return (
        <Box sx={{px:20, py:10}}>
            {expenses.map((v,i) => 
                <ExpenseItem title={v.title} amount={v.amount} date={v.date}/>
            )}
        </Box>
    )
}

export default Expenses
