import express from "express";
import { JwtValidator_ } from "../helpers/validators";
import { getEntrys, getEntry, createEntry, editEntry, deleteEntry } from "../controllers/controller.entry";

export const RouteEntry = express.Router();

RouteEntry.get("/get&entrys", JwtValidator_, getEntrys);
RouteEntry.post("/create&entry", JwtValidator_, createEntry);
RouteEntry.put("/edit&entry/:id", JwtValidator_, editEntry);
RouteEntry.delete("/delet&entry/:id", JwtValidator_, deleteEntry);
RouteEntry.get("/get&entry/:placa", JwtValidator_, getEntry);
