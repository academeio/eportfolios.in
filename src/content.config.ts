import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["guides", "evidence", "regulatory", "glossary", "case-studies"]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    author: z.string().default("Academe Research"),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { resources };
