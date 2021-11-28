import { Box, Card, CardContent, TextField, Typography } from '@mui/material'
import { Container } from '../ui/Container'
import React, { useState } from 'react'

const UserForm = ({onAddUser}) => {

    const [name, setName] = useState("")

    return (
        <Card>
            <CardContent className="container">
                <Typography variant="h4"> Create User Form </Typography>
                <form className="user-form">
                    <TextField variant="standard"
                        label="Name"
                        onChange={(e) => {setName(e.target.value)}}
                        value={name}
                        // value={name}
                    />
                    <TextField 
                    />

                </form>
            </CardContent>
        </Card>
    )
}

export default UserForm
