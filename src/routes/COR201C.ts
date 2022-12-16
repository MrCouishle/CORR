import express from "express";
import {getTerce} from "../controllers/COR201C";
import { JwtValidator_ } from "../helpers/validators";

export const route_terce = express.Router();

route_terce.get("/terce", getTerce);
// route_serco.post("/serco", postSerco);
// route_serco.put("/serco/:codigo", putSerco);
// route_serco.delete("/serco/:codigo", deleteSerco);
// route_serco.get("/f8&serco/:desde/:cantidad", f8Serco);
// route_serco.get("/serco/:codigo", getSercoId);