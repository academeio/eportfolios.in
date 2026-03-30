import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const resources = (await getCollection("resources"))
    .filter((r) => !r.data.draft && r.data.category !== "glossary")
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: "Academe ePortfolios — Resources",
    description: "Evidence summaries, guides, and regulatory references for ePortfolios in Indian medical education.",
    site: context.site!,
    items: resources.map((r) => ({
      title: r.data.title,
      pubDate: r.data.pubDate,
      description: r.data.description,
      link: `/resources/${r.data.category}/${r.id.split("/").pop()!.replace(/\.md$/, "")}/`,
    })),
  });
}
