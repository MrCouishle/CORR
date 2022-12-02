import express from 'express'
import { create_config } from '../controllers/CONFIG'

export const router_config = express.Router()

router_config.post("/crear_config", create_config)

