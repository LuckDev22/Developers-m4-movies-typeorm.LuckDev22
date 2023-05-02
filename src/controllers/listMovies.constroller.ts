import { Request, Response } from "express";
import { listMoviesService } from "../services/listMovies.service";
import { TMovie, TMovieResp } from "../interfaces/movies.interfaces";

export const listMoviesController = async (req: Request, resp: Response): Promise<Response> => {
    const page: number  = Number(req.query.page)
    const perPage : number = Number(req.query.perPage)
    const sort = req.query.sort
    const order = req.query.order 

    const movies: TMovieResp = await listMoviesService()
    return resp.json(movies)
}