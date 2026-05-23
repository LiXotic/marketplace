import Box from "@mui/material/Box";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ThemeProvider } from "../lib/theme";

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
					<Box
						sx={{
							minHeight: "100vh",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Header />
						<Box component="main" sx={{ flex: 1 }}>
							{children}
						</Box>
						<Footer />
					</Box>
				</ThemeProvider>
				<Scripts />
			</body>
		</html>
	);
}
