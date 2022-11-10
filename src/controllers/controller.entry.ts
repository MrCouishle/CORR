import { Request, Response } from "express";
import { EntryModel } from "../models/model.entry";

export const getEntrys = async (req: Request, res: Response) => {
  try {
    const data = await EntryModel.find({});
    res.json(data);
  } catch (error) {
    res.json({ msg: "reser-get" });
  }
};
export const createEntry = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    new EntryModel(req.body).save((error) => {
      if (error) {
        res.json({ msg: error });
      } else {
        res.json({ S: "E-002", alert: "success" });
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export const editEntry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const edit = await EntryModel.updateOne({ _id: id }, data, { runValidators: true });
    if (edit) res.json({ S: "E-042", alert: "success" });
    else res.json({ msg: "E-040", alert: "error" });
  } catch (error) {
    res.json(error);
    console.error(error);
  }
};

export const deleteEntry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await EntryModel.deleteOne({ _id: id });
    if (data) res.json({ S: "E-052", alert: "success" });
    else res.json({ msg: "E-050", alert: "error" });
  } catch (error) {
    res.json(error);
    console.error(error);
  }
};
export const getEntry = async (req: Request, res: Response) => {
  try {
    const { placa } = req.params;
    const data = await EntryModel.findOne({ placa: placa });
    res.json(data);
  } catch (error) {
    res.json({ msg: error });
  }
};
