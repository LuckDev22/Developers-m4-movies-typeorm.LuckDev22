import { z } from "zod";

export const movieSchema = z.object({
    id: z.number(),
    name: z.string().max(50),
    description: z.string().nullish(),
    duration: z.number(),
    price: z.number(),
});

export const movieSchemaReq = movieSchema.omit({ id: true });

export const movieSchemaResp = z.array(movieSchema)
