import CssBaseline from "@mui/material/CssBaseline";
import {
	createTheme,
	ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

export type ColorMode = "light" | "dark";

const STORAGE_KEY = "paperclip-theme";

function createAppTheme(mode: ColorMode) {
	return createTheme({
		palette: {
			mode,
			primary: {
				main: mode === "light" ? "#2563eb" : "#3b82f6",
				dark: mode === "light" ? "#1d4ed8" : "#2563eb",
			},
			background: {
				default: mode === "light" ? "#f5f5f5" : "#0f0f0f",
				paper: mode === "light" ? "#ffffff" : "#1a1a1a",
			},
			text: {
				primary: mode === "light" ? "#1a1a1a" : "#f0f0f0",
				secondary: mode === "light" ? "#444444" : "#b0b0b0",
			},
			divider: mode === "light" ? "#dddddd" : "#333333",
		},
		typography: {
			fontFamily: "system-ui, -apple-system, sans-serif",
		},
		shape: {
			borderRadius: 8,
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						textTransform: "none",
						borderRadius: 6,
					},
				},
			},
		},
	});
}

type ColorModeContextValue = {
	mode: ColorMode;
	setMode: (mode: ColorMode) => void;
	toggleMode: () => void;
};

const ColorModeContext = createContext<ColorModeContextValue | null>(null);

function getStoredMode(): ColorMode | null {
	if (typeof window === "undefined") return null;
	const stored = localStorage.getItem(STORAGE_KEY);
	return stored === "light" || stored === "dark" ? stored : null;
}

function getPreferredMode(): ColorMode {
	if (typeof window === "undefined") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [mode, setModeState] = useState<ColorMode>("light");

	useEffect(() => {
		setModeState(getStoredMode() ?? getPreferredMode());
	}, []);

	const setMode = useCallback((next: ColorMode) => {
		setModeState(next);
		localStorage.setItem(STORAGE_KEY, next);
	}, []);

	const toggleMode = useCallback(() => {
		setMode(mode === "light" ? "dark" : "light");
	}, [mode, setMode]);

	useEffect(() => {
		document.documentElement.style.colorScheme = mode;
	}, [mode]);

	const theme = useMemo(() => createAppTheme(mode), [mode]);

	const value = useMemo(
		() => ({ mode, setMode, toggleMode }),
		[mode, setMode, toggleMode],
	);

	return (
		<ColorModeContext.Provider value={value}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</ColorModeContext.Provider>
	);
}

export function useTheme() {
	const ctx = useContext(ColorModeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
}
