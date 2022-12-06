import { dia_no_habil_model } from "../models/DNHABIL";

import { Response, Request } from "express";

export const eliminarDia = async (req: Request, res: Response) => {
  try {
    const { usuario } = req.params;
    const { route, modulo } = req.query;
    let module: any;
    module = modulo;
    const data = await dia_no_habil_model.updateOne(
      { usuario },
      {
        $pull: {
          [module]: { route: route },
        },
      }
    );
    if (data.modifiedCount == 0) res.json({ msg: `No existe la ruta ${route}` });
    else res.json(data);
  } catch (error) {
    res.json({ msg: error });
  }
};

export const agregarDia = async (req: Request, res: Response) => {
  try {
    const { usuario } = req.params;
    const { route, nombre, modulo } = req.query;
    const datos = { route, nombre };
    const ruta = `${modulo}.route`;
    if (usuario === "undefined") throw new Error("F");

    if (!(await dia_no_habil_model.findOne({ usuario: usuario }))) {
      new dia_no_habil_model({ usuario: usuario }).save();
    }

    let module: any;
    module = modulo;
    const existencia = await dia_no_habil_model.findOne({
      usuario: usuario,
      [ruta]: route,
    });
    if (existencia !== null) {
      res.json({ msg: `1` });
    } else {
      const data = await dia_no_habil_model.updateOne(
        {
          ruta: { $ne: route },
          [module]: { $exists: true },
          $where: `this.${modulo}.length<12`,
          usuario: usuario,
        },
        {
          $push: {
            [module]: datos,
          },
        },
        { runValidators: true }
      );
      if (data.modifiedCount == 0) res.json({ msg: "2" });
      else res.json(data);
    }
  } catch (error: any) {
    console.log(error);
    res.json({ msg: error });
  }
};

export const buscarDia = async (req: Request, res: Response) => {
  try {
    const { usuario, modulo } = req.params;
    let module: any;
    module = modulo;
    let rutas: any;
    const data = await dia_no_habil_model.findOne(
      { usuario: usuario },
      {
        [module]: 1,
        _id: 0,
      }
    );
    rutas = data;
    console.log();
    if (data == null) res.json({ msg: "El usuario no ha agregado ningún dia habil" });
    else res.json(rutas[module]);
  } catch (error) {
    res.json({ msg: error });
  }
};
export const editarDia = async (req: Request, res: Response) => {
  try {
    const { usuario, modulo } = req.params;
    let module: any;
    module = modulo;
    let rutas: any;
    const data = await dia_no_habil_model.findOne(
      { usuario: usuario },
      {
        [module]: 1,
        _id: 0,
      }
    );
    rutas = data;
    console.log();
    if (data == null) res.json({ msg: "El usuario no ha agregado ningún dia habil" });
    else res.json(rutas[module]);
  } catch (error) {
    res.json({ msg: error });
  }
};
