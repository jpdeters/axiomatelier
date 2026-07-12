import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const collections_pieces = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pieces" }),
  schema: z.object({
    title: z.string(),
    collection: z.enum(["foundations", "witness", "bespoke"]),
    price: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = {
  pieces: collections_pieces,
};