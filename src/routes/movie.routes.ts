import { Router } from "express";
import { createMovieController } from "../controllers/createMovies.controller";
import { checkedBodyIsValidMiddleware } from "../middlewares/checkedBodyIsValid.middleware";
import { movieSchemaReq, movieSchemaUpdate } from "../schemas/movie.schemas";
import { listMoviesController } from "../controllers/listMovies.constroller";
import { updateMovieController } from "../controllers/updateMovie.controller";
import { checkedNameIsExistingMiddleware } from "../middlewares/checkedNameExisting.middleware";
import { checkedIdMovieExistingMiddleware } from "../middlewares/checkedIdMovieExisting.middleware";

export const moviesRoutes: Router = Router();

moviesRoutes.post(
    "",
    checkedBodyIsValidMiddleware(movieSchemaReq),
    checkedNameIsExistingMiddleware,
    createMovieController
);

moviesRoutes.get("", listMoviesController);

moviesRoutes.patch(
    "/:id",
    checkedBodyIsValidMiddleware(movieSchemaUpdate),
    checkedIdMovieExistingMiddleware,
    checkedNameIsExistingMiddleware,
    updateMovieController
);
