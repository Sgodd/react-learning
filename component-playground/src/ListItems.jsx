import { Collapse, List, ListItem } from "@mui/material";
import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const ListItems = ({ component, setContent }) => {
	const [open, setOpen] = useState(false);

	if (component.isParent) {
		return (
			<>
				<ListItem
					button
					onClick={(e) => {
						setOpen(!open);
					}}
				>
					{component.name}
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto">
					<List sx={{pl:4}}>
						{component.content.map((v, i) => (
							<ListItems key={component.name} setContent={setContent} component={v}/>
						))}
					</List>
				</Collapse>
			</>
		);
	}

	return (
		<ListItem
			sx={{ p: 2 }}
			key={component.name}
			button
			onClick={(e) => {
				setContent(component.content);
			}}
		>
			{component.name}
		</ListItem>
	);
};

export default ListItems;
