import { z } from "zod";
import { movieSchema, movieSchemaReq, movieSchemaResp } from "../schemas/movie.schemas";
import { DeepPartial } from "typeorm";


export type TMovie = z.infer<typeof movieSchema>
export type TMovieReq = z.infer<typeof movieSchemaReq>
export type TMovieResp = z.infer<typeof movieSchemaResp>
export type TMovieUpdateReq = DeepPartial<TMovieReq>