import { Repository } from "typeorm";
import {
    TMovie,
    TMovieResp,
    TMovieUpdateReq,
} from "../interfaces/movies.interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";

export const updateMovieService = async (
    movieData: TMovieUpdateReq,
    movieId: number
): Promise<TMovie> => {
    const movieRepository: Repository<Movie> =
        AppDataSource.getRepository(Movie);

    const oldMovieData: Movie | null = await movieRepository.findOneBy({
        id: movieId,
    });

    const newMovieData: Movie = movieRepository.create({
        ...oldMovieData,
        ...movieData,
    });

    await movieRepository.save(newMovieData);

    return newMovieData;
};
