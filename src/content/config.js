import { z, defineCollection } from "astro:content";

const exampleCollection = defineCollection({
    type: "content",
    schema: {
        title: z.string(),
        tags: z.array(z.string()).optional(),
        description: z.string(),
    },
});

export const collections = {
    example: exampleCollection,
};
