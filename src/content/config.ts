import { defineCollection, z } from 'astro:content';

// 1. 现有的学习笔记 (保持不变)
const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

// 2. 新增：游戏开发日志 (DevLog)
const devlogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		version: z.string().optional(), //比如: v0.1.0
		engine: z.string().optional(),  //比如: Unity, Godot
		heroImage: z.string().optional(),
	}),
});

// 导出两个集合
export const collections = {
	'blog': blogCollection,     // 对应 src/content/blog/
	'devlog': devlogCollection, // 对应 src/content/devlog/
};