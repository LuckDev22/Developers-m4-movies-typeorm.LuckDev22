import { z } from "zod";
import { movieSchema, movieSchemaReq, movieSchemaResp } from "../schemas/movie.schemas";


export type TMovie = z.infer<typeof movieSchema>
export type TMovieReq = z.infer<typeof movieSchemaReq>
export type TMovieResp = z.infer<typeof movieSchemaResp>
