import express from "express";

import { agregarDia, buscarDia, eliminarDia, editarDia } from "../controllers/DNHABIL";

export const router_favoritos = express.Router();

router_favoritos.put("/eliminarfavoritos/:usuario", eliminarDia);
router_favoritos.put("/agregarfavorito/:usuario", agregarDia);
router_favoritos.get("/favoritos/:usuario/:modulo", buscarDia);
router_favoritos.get("/favoritos/:usuario/:modulo", editarDia);
