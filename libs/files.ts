import docsRaw from "#/files.json";
import { z } from "zod";

// There are probably smarter ways to do it but I'm in a hurry so don't judge me please
const articleSchema = z.object({
	path: z.string().min(1),
	title: z.string().min(1),
	date: z.string().datetime(),
});
const chapterSchema = z.object({
	weight: z.number(),
	name: z.string().min(0),
	data: z.array(articleSchema),
});
const volumnSchema = z.record(chapterSchema);
export type Article = z.infer<typeof articleSchema>;
export type Chapter = z.infer<typeof chapterSchema>;
export type Volumn = z.infer<typeof volumnSchema>;

const docs = volumnSchema.parse(docsRaw);

export function getArticle(
	section: string,
	article: string,
): Article | undefined {
	return docs[section].data.find((item) => item.title === article);
}

export function getSectionArticle(section: string): Array<Article> {
	return docs[section].data;
}

export type Docs = ReturnType<typeof getDocs>;
export function getDocs(): Volumn {
	return docs;
}
