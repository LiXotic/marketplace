import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: AboutPage,
});

function AboutPage() {
	return (
		<Container maxWidth="sm" sx={{ py: 4, pb: 6 }}>
			<Typography variant="h4" component="h1" gutterBottom>
				About this exercise
			</Typography>
			<Typography>
				This is a small starter project for learning the basics of a web app:
				HTML structure, inline CSS, and React state.
			</Typography>
			<Typography variant="h5" component="h2" gutterBottom>
				What to try
			</Typography>
			<Box component="ul" sx={{ pl: 2.5, m: 0 }}>
				<Box component="li" sx={{ mb: 1 }}>
					Change the button labels in{" "}
					<Box
						component="code"
						sx={{
							bgcolor: "action.hover",
							px: 0.5,
							borderRadius: 0.5,
							fontSize: "0.9em",
						}}
					>
						src/routes/index.tsx
					</Box>
					.
				</Box>
				<Box component="li" sx={{ mb: 1 }}>
					Customize colors and spacing using the{" "}
					<Box
						component="code"
						sx={{
							bgcolor: "action.hover",
							px: 0.5,
							borderRadius: 0.5,
							fontSize: "0.9em",
						}}
					>
						sx
					</Box>{" "}
					prop on MUI components.
				</Box>
				<Box component="li" sx={{ mb: 1 }}>
					Try different MUI Button variants like{" "}
					<Box
						component="code"
						sx={{
							bgcolor: "action.hover",
							px: 0.5,
							borderRadius: 0.5,
							fontSize: "0.9em",
						}}
					>
						contained
					</Box>{" "}
					and{" "}
					<Box
						component="code"
						sx={{
							bgcolor: "action.hover",
							px: 0.5,
							borderRadius: 0.5,
							fontSize: "0.9em",
						}}
					>
						outlined
					</Box>
					.
				</Box>
				<Box component="li" sx={{ mb: 1 }}>
					Subtract 1 from the count, or set a maximum value.
				</Box>
			</Box>
			<Typography>
				Run{" "}
				<Box
					component="code"
					sx={{
						bgcolor: "action.hover",
						px: 0.5,
						borderRadius: 0.5,
						fontSize: "0.9em",
					}}
				>
					npm run dev
				</Box>{" "}
				and open the app in your browser to see changes live.
			</Typography>
		</Container>
	);
};
