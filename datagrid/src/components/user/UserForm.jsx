import {
	Box,
	Button,
	Card,
	CardContent,
	TextField,
	Typography,
} from "@mui/material";
import { Container } from "../ui/Container";
import React, { useState } from "react";

const UserForm = ({ onAddUser }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [age, setAge] = useState("");

	const handleAgeChange = (e) => {
		const min = 0;
		const max = 120;

		let val = e.target.value;

		val = val < min ? min : val > max ? max : val;

		setAge(val);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

        const userData = {
            name: event.target.name.value,
            age: event.target.age.value,
            email: event.target.email.value
        }

        onAddUser(userData);

	};

	return (
		<Card sx={{m:4}}>
			<CardContent className="container">
				<Typography align="left" mb={2} variant="h4"> Create User Form </Typography>
				<Box
					component="form"
					className="user-form"
					onSubmit={handleFormSubmit}
                    sx={{
                        '.MuiTextField-root': { mr: 2}
                    }}
				>
					<Box>
						<TextField
                            id="name"
							variant="standard"
							label="Name"
							onChange={(e) => {
								setName(e.target.value);
							}}
							value={name}
                            required
						/>
						<TextField
                            id="age"
							sx={{ width: 100 }}
							label="Age"
							type="number"
							min={0}
							max={150}
							onChange={handleAgeChange}
							value={age}
                            required
						/>
					</Box>

					<TextField
                        id="email"
						variant="standard"
						label="Email"
						type="email"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}
                        required
					/>

					<Box mt={3}>
						<Button type="submit" sx={{ flexGrow: 0 }}>
							Submit
						</Button>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

export default UserForm;
