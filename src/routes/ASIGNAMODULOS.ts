import express from "express"
import { asigar_modulo } from "../controllers/ASIGNAMODULOS"

export const route_asigna_modul = express.Router()

route_asigna_modul.put("/asignar_modulo", asigar_modulo)