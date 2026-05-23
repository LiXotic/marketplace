import { Moon, Sun } from "lucide-react";
import { useTheme } from "../lib/theme";

const buttonStyle = {
	marginLeft: "auto",
	display: "flex",
	alignItems: "center",
	gap: "0.375rem",
	padding: "0.375rem 0.75rem",
	fontSize: "0.875rem",
	fontFamily: "inherit",
	color: "var(--color-text)",
	background: "var(--color-surface)",
	border: "1px solid var(--color-border)",
	borderRadius: "6px",
	cursor: "pointer",
} as const;

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	const isDark = theme === "dark";

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			style={buttonStyle}
		>
			{isDark ? <Sun size={16} aria-hidden /> : <Moon size={16} aria-hidden />}
			{isDark ? "Light" : "Dark"}
		</button>
	);
}
