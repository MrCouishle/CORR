import express from 'express'
import { getCorr869F8 } from '../controllers/CORR869'

export const route_corr869 = express.Router()

route_corr869.get("/corr869/:desde/:cantidad", getCorr869F8)