import express from "express";

import { agregarDia, buscarDia, eliminarDia, editarDia } from "../controllers/DNHABIL";

export const router_dn_habil = express.Router();

router_dn_habil.put("/eliminarfavoritos/:usuario", eliminarDia);
router_dn_habil.put("/agregarfavorito/:usuario", agregarDia);
router_dn_habil.get("/favoritos/:usuario/:modulo", buscarDia);
router_dn_habil.get("/favoritos/:usuario/:modulo", editarDia);
