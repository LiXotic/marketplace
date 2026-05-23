import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ThemeProvider, themeBodyStyle, useTheme } from "../lib/theme";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Counter Exercise",
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<ThemeProvider>
					<ThemedShell>{children}</ThemedShell>
				</ThemeProvider>
				<Scripts />
			</body>
		</html>
	);
}

function ThemedShell({ children }: { children: React.ReactNode }) {
	const { theme } = useTheme();

	return (
		<div style={themeBodyStyle(theme)}>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
