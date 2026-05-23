import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Button from "@mui/material/Button";
import { useTheme } from "../lib/theme";

export default function ThemeToggle() {
	const { mode, toggleMode } = useTheme();
	const isDark = mode === "dark";

	return (
		<Button
			variant="outlined"
			size="small"
			onClick={toggleMode}
			startIcon={isDark ? <LightModeIcon /> : <DarkModeIcon />}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			sx={{ textTransform: "none" }}
		>
			{isDark ? "Light" : "Dark"}
		</Button>
	);
}
