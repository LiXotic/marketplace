import { Link } from "@tanstack/react-router";
import ThemeToggle from "./ThemeToggle";

const linkStyle = {
	color: "var(--color-link)",
	textDecoration: "none",
} as const;

export default function Header() {
	return (
		<header
			style={{
				background: "var(--color-surface)",
				borderBottom: "1px solid var(--color-border)",
				padding: "0.75rem 1rem",
			}}
		>
			<nav
				style={{
					maxWidth: "32rem",
					margin: "0 auto",
					display: "flex",
					gap: "1rem",
					alignItems: "center",
				}}
			>
				<Link
					to="/"
					style={{ ...linkStyle, fontWeight: 700, color: "var(--color-text)" }}
				>
					Counter App
				</Link>
				<Link to="/" style={linkStyle}>
					Home
				</Link>
				<Link to="/about" style={linkStyle}>
					About
				</Link>
				<ThemeToggle />
			</nav>
		</header>
	);
}
