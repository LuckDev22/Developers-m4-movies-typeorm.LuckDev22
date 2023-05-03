import { Request, Response } from "express";
import { deleteMovieService } from "../services/deleteMovies.service";

export const deleteMovieController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const movieId: number = Number(req.params.id);

    const movie = await deleteMovieService(movieId);
    return res.status(204).send();
};
