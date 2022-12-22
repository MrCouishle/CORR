import express from 'express'
import { cambiarContra, f8Usuvue, getusuvue, getUsuvueLlave } from '../controllers/USUVUE'

export const route_usuvue = express.Router()

route_usuvue.get("/usuvueAll", getusuvue);
route_usuvue.get("/usuvue&llave/:llaveOper", getUsuvueLlave);
route_usuvue.put("/usuvue/:llave/:nueva_pass", cambiarContra);
route_usuvue.get("/f8&usuvue/:desde/:cantidad", f8Usuvue);