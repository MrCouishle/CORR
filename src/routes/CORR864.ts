import express from 'express'
import { getRescorrF8 } from '../controllers/CORR864'

export const route_corr864 = express.Router()

route_corr864.get("/f8&corr864/:desde/:cantidad", getRescorrF8)