import express from "express"
import { getImpresionCorr } from "../controllers/COR301";

export const route_corresimpresion = express.Router();

route_corresimpresion.get("/correspondenciaimpresion", getImpresionCorr)