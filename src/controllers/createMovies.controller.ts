import { Request, Response } from "express"
import { TMovieReq } from "../interfaces/movies.interfaces"
import { createMovieService } from "../services/createMovies.service"

export const createMovieController = async (req: Request, resp: Response): Promise<Response> => {
    const movieData: TMovieReq = req.body
    const newMovie = await createMovieService(movieData)
    return resp.status(201).json(newMovie)
}