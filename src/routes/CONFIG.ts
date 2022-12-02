import express from 'express'
import { agregar_contabilidad, create_config, edit_config, eliminar_contabilidad } from '../controllers/CONFIG'

export const router_config = express.Router()

router_config.post("/crear_config", create_config)
router_config.put("/editar_config", edit_config)
router_config.put("/agergar_contabilidad/:contabilidad", agregar_contabilidad)
router_config.delete("/eliminar_contabilidad/:contabilidad", eliminar_contabilidad)
