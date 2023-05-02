import { Repository } from "typeorm";
import { TMovieResp } from "../interfaces/movies.interfaces";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";

export const listMoviesService = async ():Promise<TMovieResp> => {
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const movies: Movie[] = await movieRepository.find()

    return movies


}