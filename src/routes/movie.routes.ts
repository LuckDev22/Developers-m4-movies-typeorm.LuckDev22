import { Router } from "express";
import { createMovieController } from "../controllers/createMovies.controller";
import { checkedBodyIsValidMiddleware } from "../middlewares/checkedBodyIsValid.middleware";
import { movieSchemaReq } from "../schemas/movie.schemas";
import { listMoviesController } from "../controllers/listMovies.constroller";

export const moviesRoutes: Router = Router();

moviesRoutes.post(
    "",
    checkedBodyIsValidMiddleware(movieSchemaReq),
    createMovieController
);

moviesRoutes.get("", listMoviesController)
