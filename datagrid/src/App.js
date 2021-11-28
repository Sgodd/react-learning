import "./App.scss";

import { React } from 'react';
import { useState } from 'react';
import UserForm from "./components/user/UserForm";
import { Box } from "@mui/system";


function App() {

    const [users, setUsers] = useState([])

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
            <UserForm onAddUser={addUser}/>
        </Box>
	);
}

export default App;
