import express from "express";
import { getMovieDetails, getMoviesByCategory, getMovieTrailers, getSimilarMovies, getTrendingMovie } from "../controllers/movie.controller.js";
const router = express.Router();
//we have wrtie 5 diffrent endppoints and ther functions in cntroller
router.get("/trending",getTrendingMovie);
router.get("/:id/trailers",getMovieTrailers);
router.get("/:id/details",getMovieDetails);
router.get("/:id/similar",getSimilarMovies);
router.get("/:category",getMoviesByCategory);

export default router;