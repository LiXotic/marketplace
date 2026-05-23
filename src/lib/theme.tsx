import {
	type CSSProperties,
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "paperclip-theme";

export const themeVars: Record<Theme, CSSProperties> = {
	light: {
		"--color-bg": "#f5f5f5",
		"--color-surface": "#ffffff",
		"--color-text": "#1a1a1a",
		"--color-text-secondary": "#444444",
		"--color-text-muted": "#555555",
		"--color-text-subtle": "#666666",
		"--color-border": "#dddddd",
		"--color-link": "#2563eb",
		"--color-code-bg": "#eeeeee",
		"--color-btn-primary-text": "#ffffff",
		"--color-btn-primary-bg": "#2563eb",
		"--color-btn-primary-border": "#1d4ed8",
		"--color-btn-secondary-text": "#1a1a1a",
		"--color-btn-secondary-bg": "#e5e5e5",
		"--color-btn-secondary-border": "#cccccc",
	},
	dark: {
		"--color-bg": "#0f0f0f",
		"--color-surface": "#1a1a1a",
		"--color-text": "#f0f0f0",
		"--color-text-secondary": "#b0b0b0",
		"--color-text-muted": "#999999",
		"--color-text-subtle": "#888888",
		"--color-border": "#333333",
		"--color-link": "#60a5fa",
		"--color-code-bg": "#2a2a2a",
		"--color-btn-primary-text": "#ffffff",
		"--color-btn-primary-bg": "#3b82f6",
		"--color-btn-primary-border": "#2563eb",
		"--color-btn-secondary-text": "#f0f0f0",
		"--color-btn-secondary-bg": "#333333",
		"--color-btn-secondary-border": "#444444",
	},
};

type ThemeContextValue = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getStoredTheme(): Theme | null {
	if (typeof window === "undefined") return null;
	const stored = localStorage.getItem(STORAGE_KEY);
	return stored === "light" || stored === "dark" ? stored : null;
}

function getPreferredTheme(): Theme {
	if (typeof window === "undefined") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setThemeState] = useState<Theme>("light");

	useEffect(() => {
		setThemeState(getStoredTheme() ?? getPreferredTheme());
	}, []);

	const setTheme = useCallback((next: Theme) => {
		setThemeState(next);
		localStorage.setItem(STORAGE_KEY, next);
	}, []);

	const toggleTheme = useCallback(() => {
		setTheme(theme === "light" ? "dark" : "light");
	}, [theme, setTheme]);

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		document.documentElement.style.colorScheme = theme;
	}, [theme]);

	const value = useMemo(
		() => ({ theme, setTheme, toggleTheme }),
		[theme, setTheme, toggleTheme],
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}

export function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
}

export function themeBodyStyle(theme: Theme): CSSProperties {
	return {
		margin: 0,
		fontFamily: "system-ui, -apple-system, sans-serif",
		lineHeight: 1.5,
		color: "var(--color-text)",
		background: "var(--color-bg)",
		...themeVars[theme],
	};
}
