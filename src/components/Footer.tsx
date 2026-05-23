import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				mt: 4,
				py: 2,
				px: 2,
				textAlign: "center",
				borderTop: 1,
				borderColor: "divider",
			}}
		>
			<Typography variant="body2" color="text.secondary">
				Beginner counter exercise — edit the code and try your own changes.
			</Typography>
		</Box>
	);
}
