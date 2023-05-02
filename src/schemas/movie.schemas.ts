import { z } from "zod";

export const movieSchema = z.object({
    id: z.number(),
    name: z.string().max(50),
    description: z.string().nullish(),
    duration: z.number(),
    price: z.number(),
});

export const movieSchemaReq = movieSchema.omit({ id: true });

export const movieSchemaResp = z.array(movieSchema);

export const movieSchemaUpdate = movieSchemaReq.partial();

export const allMovieSchemaResp = z.object({
    prevPage: z.string().nullable(),
    nextPage: z.string().nullable(),
    count: z.number(),
    data: movieSchemaResp
})