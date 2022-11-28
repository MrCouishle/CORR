import express from 'express'
import { getRestr } from '../controllers/RESTR'

export const route_restr = express.Router()

route_restr.get("/restr/:llaveResp/:clave", getRestr);