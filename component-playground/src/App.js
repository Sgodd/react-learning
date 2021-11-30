import {
	Card,
	CardContent,
	Divider,
	Drawer,
	Fab,
	List,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.scss";
import { useState } from "react";
import { Box } from "@mui/material";
import ListItems from "./ListItems";
import Header from "./components/headers/Header";

function App() {
	const [open, setOpen] = useState(false);
	const [content, setContent] = useState(<></>);

	const components = [
		{   
            isParent:true,
			name: "Headers",
			content: [
                {
                    name: "Header 1",
                    content: (
                        <Header/>
                    ),
                },
            ]
		},
		{
			name: "Div2",
			content: (
				<Card>
					<CardContent>Hello2</CardContent>
				</Card>
			),
		},
	];

	return (
		<div className="App">
			<Fab
				color="primary"
				sx={{ position: "absolute", top: 16, left: 16 }}
				onClick={(e) => {
					setOpen(true);
				}}
			>
				<MenuIcon />
			</Fab>

			<Drawer
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				<List sx={{ minWidth: 200 }}>
					<Divider />
					    {components.map((component, index) => <ListItems key={component.name} setContent={setContent} component={component}/>)}
					<Divider />
				</List>
			</Drawer>
			<Box>{content}</Box>
		</div>
	);
}

export default App;
