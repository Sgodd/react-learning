import { Card, CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const UserGrid = ({ users, setUsers }) => {
	const cols = [
		{ field: "name", headerName: "Name", width: 180, editable: true },
		{ field: "age", headerName: "Age", type: "number", editable: true },
		{
			field: "email",
			headerName: "Email",
			editable: true,
			width: 360,
		},
	];

	const handleRowChange = (model) => {
		setUsers((prevState) => {
			users = [...prevState];

			for (let id in model) {
				let row = model[id];
				for (let col in row) {
					let user = users.find((v) => v.id == id)
                    user[col] = row[col].value;

                    console.log(users);
				}
			}

			return users;
		});

	};

	return (
		<Card>
			<CardContent>
				<div style={{ height: 300, width: "700px" }}>
					<DataGrid
						rows={users}
						columns={cols}
						onEditRowsModelChange={handleRowChange}
					/>
				</div>
			</CardContent>
		</Card>
	);
};

export default UserGrid;
