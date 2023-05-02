import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";

export const checkedIdMovieExistingMiddleware = async (
    req: Request,
    resp: Response,
    next: NextFunction
): Promise<Response | void> => {
    const movieId: number = Number(req.params.id);

    const movieRepository: Repository<Movie> =
        AppDataSource.getRepository(Movie);

    const movie = await movieRepository.findOne({
        where: {
            id: movieId,
        },
    });

    if (!movie) {
        throw new AppError("Movie not found", 404);
    }

    return next();
};
