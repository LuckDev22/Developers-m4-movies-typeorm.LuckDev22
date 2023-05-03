import { Request, Response } from "express";
import { listMoviesService } from "../services/listMovies.service";
import { TMovie, TMoviePagResp, TMovieResp } from "../interfaces/movies.interfaces";

export const listMoviesController = async (
    req: Request,
    resp: Response
): Promise<Response> => {
    let page: number  = Number(req.query.page) || 1 ;
    let perPage: number  = Number(req.query.perPage) || 5;

    if(page <= 0){
        page = 1
    }

    if(!Number.isInteger(perPage) || perPage < 1){
        perPage = 5
    }else if (perPage > 5) {
        perPage = 5;
    }

    const sort: any = req.query.sort;
    let order: any = req.query.order || "asc";
    console.log(sort)
    console.log(order)

    const movies: TMoviePagResp = await listMoviesService(
        page,
        perPage,
        sort,
        order
    );
    return resp.status(200).json(movies);
};
