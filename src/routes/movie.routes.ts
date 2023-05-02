import { Router } from "express";
import { createMovieController } from "../controllers/createMovies.controller";

export const moviesRoutes: Router = Router()

moviesRoutes.post("",createMovieController)