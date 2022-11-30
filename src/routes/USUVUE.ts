import express from 'express'
import { f8Usuvue, getusuvue, getUsuvueLlave } from '../controllers/USUVUE'

export const route_usuvue = express.Router()

route_usuvue.get("/usuvue/:llaveResp/:clave", getusuvue);
route_usuvue.get("/usuvue&llave/:llaveOper", getUsuvueLlave);
route_usuvue.get("/f8&usuvue/:desde/:cantidad", f8Usuvue);