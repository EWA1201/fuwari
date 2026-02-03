import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "EWA's blog",
	subtitle: "首頁",
	description:
		"",
	lang: "zh_TW", // Language code, e.g. 'en', 'zh-CN', 'ja', etc.
	themeColor: {
		hue: 275, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/Gk2yy_2aoAQuSBR.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/favicon/ROC_National_Defense_University_Seal.svg.png", // Path of the favicon, relative to the /public directory
			theme: "dark", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "128x128", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.About,
		{
			name: "朋友",
			url: "/friends/",
			external: false,
		},
		LinkPreset.Archive,
		// {
		// 	name: "其他",
		// 	url: "#",
		// 	external: false,
		// 	children: [
		// 		{
		// 			name: "常用脚本&资源",
		// 			url: "/scripts/",
		// 			external: false,
		// 		},
		// 		{
		// 			name: "用药感受",
		// 			url: "/sleep/",
		// 			external: false,
		// 		},
		// 		{
		// 			name: "状态",
		// 			url: "https://stats.uptimerobot.com/YVPkaXtQOH",
		// 			external: true,
		// 		},
		// 	],
		// },
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/139125552_p0_master1200.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "EWA",
	bio: "Nothing",
	links: [
		// {
		// 	name: "Twitter",
		// 	icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
		// 	// You will need to install the corresponding icon set if it's not already included
		// 	// `pnpm add @iconify-json/<icon-set-name>`
		// 	url: "https://twitter.com",
		// },
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://steamcommunity.com/id/kpl22E/",
		},
		{
			name: "bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/690665228",
		},
		// {
		// 	name: "Mail",
		// 	icon: "fa6-solid:envelope",
		// 	url: "mailto:i@hiwer.cn",
		// },
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
