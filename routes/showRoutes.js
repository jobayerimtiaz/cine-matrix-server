import express from "express";
import { addShow, getNowPlayingMovies } from "../controllers/showController.js";

const ShowRouter = express.Router();

ShowRouter.get("/now-playing", getNowPlayingMovies);

ShowRouter.post("/add-show", addShow);

export default ShowRouter;
