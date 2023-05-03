import { Repository } from "typeorm";
import { TMoviePagResp } from "../interfaces/movies.interfaces";
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

    let movies: [Movie[], number];
    let orderObj = {};

    let prevPage: string | null;
    if (page <= 1) {
        prevPage = null;
    } else {
        prevPage = `http://localhost:3000/movies?page=${
            page - 1
        }&perPage=${perPage}`;
    }

    let nextPage: string | null;

    if (perPage < 1 || perPage > 5) {
        perPage = 5;
        nextPage = `http://localhost:3000/movies?page=${
            page + 1
        }&perPage=${perPage}`;
    } else {
        nextPage = `http://localhost:3000/movies?page=${
            page + 1
        }&perPage=${perPage}`;
    }

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
        movies = await movieRepository.findAndCount({
            order: { id: "asc" },
        });
    } else {
        movies = await movieRepository.findAndCount({
            skip: (page - 1) * perPage,
            take: perPage,
            order: orderObj,
        });
    }

    const count: number = movies[1];

    if (count < perPage * page) {
        nextPage = null;
    }

    return {
        prevPage: prevPage,
        nextPage: nextPage,
        count: count,
        data: movies[0],
    };
};
