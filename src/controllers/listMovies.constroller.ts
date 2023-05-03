import { Request, Response } from "express";
import { listMoviesService } from "../services/listMovies.service";
import { TMoviePagResp } from "../interfaces/movies.interfaces";

export const listMoviesController = async (
    req: Request,
    resp: Response
): Promise<Response> => {
    let page: number = Number(req.query.page) || 1;
    let perPage: number = Number(req.query.perPage) || 5;

    if (page <= 0) {
        page = 1;
    }

    const sort: any = req.query.sort;
    let order: any = req.query.order || "asc";

    const movies: TMoviePagResp = await listMoviesService(
        page,
        perPage,
        sort,
        order
    );
    return resp.status(200).json(movies);
};
