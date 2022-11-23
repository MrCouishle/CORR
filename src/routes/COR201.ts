import express from "express"
import { deleteCorres, getCorres, getCorresF8, postCorres, putCorres } from "../controllers/COR201";

export const route_corres = express.Router();

route_corres.post("/corres", postCorres)
route_corres.put("/corres", putCorres)
route_corres.get("/corres/:anoLlave/:cont", getCorres)
route_corres.delete("/corres/:anoLlave/:cont", deleteCorres)
route_corres.get("/getCorresF8/:desde/:cantidad", getCorresF8)