import express from "express"
import { postCorres } from "../controllers/COR201";

export const route_corres = express.Router();

route_corres.post("/corres", postCorres)