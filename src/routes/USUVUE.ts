import express from 'express'
import { getusuvue } from '../controllers/USUVUE'

export const route_usuvue = express.Router()

route_usuvue.get("/usuvue/:llaveResp/:clave", getusuvue);