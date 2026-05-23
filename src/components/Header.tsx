import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "@tanstack/react-router";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
	return (
		<AppBar
			position="static"
			color="inherit"
			elevation={0}
			sx={{ borderBottom: 1, borderColor: "divider" }}
		>
			<Toolbar
				sx={{
					maxWidth: "32rem",
					width: "100%",
					mx: "auto",
					px: { xs: 2, sm: 2 },
					gap: 2,
				}}
			>
				<Typography
					component={RouterLink}
					to="/"
					variant="subtitle1"
					sx={{
						fontWeight: 700,
						color: "text.primary",
						textDecoration: "none",
					}}
				>
					Counter App
				</Typography>
				<Link
					component={RouterLink}
					to="/"
					underline="none"
					sx={{ color: "primary.main" }}
				>
					Home
				</Link>
				<Link
					component={RouterLink}
					to="/counter"
					underline="none"
					sx={{ color: "primary.main" }}
				>
					Counter
				</Link>
				<Link
					component={RouterLink}
					to="/about"
					underline="none"
					sx={{ color: "primary.main" }}
				>
					About
				</Link>
				<Box sx={{ ml: "auto" }}>
					<ThemeToggle />
				</Box>
			</Toolbar>
		</AppBar>
	);
}
