import { Repository } from "typeorm";
import { Movie } from "../entities";
import { TMovie, TMovieReq } from "../interfaces/movies.interfaces";
import { AppDataSource } from "../data-source";

export const createMovieService = async (
    movieData: TMovieReq
): Promise<TMovie> => {
    const movieRepository: Repository<Movie> =
        AppDataSource.getRepository(Movie);

    const movie: Movie = movieRepository.create(movieData);
    await movieRepository.save(movie);

    return movie;
};
