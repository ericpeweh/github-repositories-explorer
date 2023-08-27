// Types
export interface IMainTheme {
	// Colors
	colorPrimary: string;
	colorError: string;
	light100: string;
	light200: string;

	// Font size
	textXs: string;
	textSm: string;
	textMd: string;
	textLg: string;
	textXl: string;

	// Breakpoints
	widthXs: string;
	widthSm: string;
	widthMd: string;
	widthLg: string;
	widthXl: string;
}

const mainTheme = {
	// Colors
	colorPrimary: "#459ddd",
	colorError: "#e61c0e",
	light100: "#f2f2f2",
	light200: "#e0e0e0",

	// Font size
	textXs: "0.8rem",
	textSm: "1rem",
	textMd: "1.2rem",
	textLg: "1.3rem",
	textXl: "1.4rem",

	// Breakpoints
	widthXs: "600px",
	widthSm: "900px",
	widthMd: "1200px",
	widthLg: "1500px",
	widthXl: "1800px"
};

export default mainTheme;
