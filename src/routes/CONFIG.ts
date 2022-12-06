import express from 'express'
import { agregar_contabilidad, create_config, editar_estado_modulos, edit_config, eliminar_contabilidad, get_config } from '../controllers/CONFIG'

export const router_config = express.Router()

router_config.post("/crear_config", create_config)
router_config.put("/editar_config", edit_config)
router_config.put("/agergar_contabilidad/:contabilidad", agregar_contabilidad)
router_config.delete("/eliminar_contabilidad/:contabilidad", eliminar_contabilidad)
router_config.get("/config", get_config)

router_config.put("/editar_estado_modulos/:modulo/:contab/:estado", editar_estado_modulos)


