import express from "express";
import { addShow, getNowPlayingMovies } from "../controllers/showController.js";
import { protectAdmin } from "../middleware/auth.js";

const ShowRouter = express.Router();

ShowRouter.get("/now-playing", protectAdmin, getNowPlayingMovies);

ShowRouter.post("/add-show", protectAdmin, addShow);

export default ShowRouter;
