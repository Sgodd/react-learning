import "./App.scss";

import { React } from 'react';
import { useState } from 'react';
import UserForm from "./components/user/UserForm";
import { Box } from "@mui/system";
import UserGrid from "./components/user/UserGrid";


function App() {
    const userData = [
        {
            id: 1,
            name: "name1",
            age: 11,
            email: "test@test.com"
        },
        {
            id: 2,
            name: "name2",
            age: 12,
            email: "test2@test.com"
        },
        {
            id: 3,
            name: "name3",
            age: 13,
            email: "test3@test.com"
        }
    ]

    const [users, setUsers] = useState(userData)

    const addUser = (userData) => {
        userData = {
            id: users.length + 1,
            ...userData
        }

        setUsers((prevState) => {
            return [...prevState, userData];
        });
    }

	return (
		<Box className="App">
            <UserForm onAddUser={addUser} />
            <UserGrid users={users} setUsers={setUsers}/>
        </Box>
	);
}

export default App;
