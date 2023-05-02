import { Request, Response } from "express";
import { listMoviesService } from "../services/listMovies.service";

export const listMoviesController = async (req: Request, resp: Response): Promise<Response> => {
    const movies = await listMoviesService()
    return resp.json(movies)
}