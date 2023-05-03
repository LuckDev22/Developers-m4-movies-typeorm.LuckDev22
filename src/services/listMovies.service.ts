import { Repository } from "typeorm";
import { TMoviePagResp, TMovieResp } from "../interfaces/movies.interfaces";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";

export const listMoviesService = async (
    page: any,
    perPage: any,
    sort: string | null,
    order: string | null
): Promise<TMoviePagResp> => {
    const movieRepository: Repository<Movie> =
        AppDataSource.getRepository(Movie);

    let movies: Movie[] | undefined;

    let orderObj = {};

    if (sort === "price") {
        orderObj = {
            price: order,
        };
    } else if (sort === "duration") {
        orderObj = {
            duration: order,
        };
    }

    if (!page || !perPage) {
        movies = await movieRepository.find({
            order: { id: "asc" },
        });
    } else {
        movies = await movieRepository.find({
            skip: (page - 1) * perPage,
            take: perPage,
            order: orderObj,
        });
    }

    const count: number = movies.length;

    let prevPage: string | null;
    if (page <= 1) {
        prevPage = null;
    } else {
        prevPage = `http://localhost:3000/movies?page=${
            page - 1
        }&perPage=${perPage}`;
    }

    let nextPage;

    if (perPage >= 5) {
        nextPage = null;
    } else {
        nextPage = `http://localhost:3000/movies?page=${
            page + 1
        }&perPage=${perPage}`;
    }

    return {
        prevPage: prevPage,
        nextPage: nextPage,
        count: count,
        data: movies,
    };
};
