// 友链数据类型定义
export interface Friend {
	name: string;
	url: string;
	avatar: string;
	description: string;	
}

// 友链数据
export const friends: Friend[] = [
	{
		name: "锴|一个神奇的角落",
		url: "https://www.sorkai.com/",
		avatar: "https://jsd.sorkai.com/web/3RVidO.th.jpg",
		description:
			"要有最朴实的生活和最遥远的梦想，即使明天天寒地冻、山高水远、路远马亡。",
	},
];
