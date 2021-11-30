import { Card, CardContent, Divider, Drawer, Fab, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.scss";
import { useState } from "react";
import { Box } from "@mui/material";

function App() {
	const [open, setOpen] = useState(false);
	const [content, setContent] = useState(<></>);

	const components = [
		{
			name: "Div1",
			content: (
				<Card>
					<CardContent>Hello1</CardContent>
				</Card>
			),
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
				<List sx={{minWidth:200}}>
                    <Divider/>
					{components.map((component, index) => (
						<ListItem
                            sx={{p:2}}
							key={component.name}
							button
							onClick={(e) => {setContent(component.content)}}
						>
							{component.name}
						</ListItem>
					))}
                    <Divider/>
				</List>
			</Drawer>
            <Box>
                {content}
            </Box>
		</div>
	);
}

export default App;
