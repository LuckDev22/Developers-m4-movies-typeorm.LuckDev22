import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";

export const checkedNameIsExistingMiddleware = async (
    req: Request,
    resp: Response,
    next: NextFunction
): Promise<Response | void> => {
    const nameMovie = req.body.name;

    const movieRepository: Repository<Movie> =
        AppDataSource.getRepository(Movie);

    const movie = await movieRepository.findOneBy({
        name: nameMovie,
    });

    if (movie) {
        throw new AppError("Movie already exists.", 409);
    }
    return next();
};
