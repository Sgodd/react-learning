import React from "react";
import { Box } from "@mui/material";

const SplitPage = () => {
	const sxPage = {
        flexDirection:"column",
        justifyContent:"center",
        display:"flex",
        flexGrow:1,
		transition: "0.3s",
		"&:hover": {
			flexGrow: 2,
			transition: "0.3s",
		},
	};

	return (
		<Box sx={{ display: "flex", flex: 1, p: 2, height: "400px", backgroundColor:"#050505"}}>
			<Box sx={[sxPage, {color:"#111", backgroundColor:"#ccc"}]}>
				a
			</Box>
			<Box sx={[sxPage, {color:"#ccc", backgroundColor:"#111"}]}>
				a
			</Box>
		</Box>
	);
};

export default SplitPage;
