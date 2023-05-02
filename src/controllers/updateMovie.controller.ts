import { Request, Response } from "express"
import { TMovie, TMovieUpdateReq } from "../interfaces/movies.interfaces"
import { updateMovieService } from "../services/updateMovies.service"

export const updateMovieController = async (req: Request, resp: Response): Promise<Response> => {
    const movieData: TMovieUpdateReq = req.body
    const movieId: number = Number(req.params.id)

    const newMovie: TMovie = await updateMovieService(movieData, movieId)
    return resp.json(newMovie)
}