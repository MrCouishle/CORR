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
    if (data.modifiedCount == 0)
      res.json({ msg: `No existe la ruta ${route}` });
    else res.json(data);
  } catch (error) {
    res.json({ msg: error });
  }
};

export const agregarDia = async (req: Request, res: Response) => {
  try {
    const data = await dia_no_habil_model.insertMany([{date:new Date("2022-01-01"), descripcion:"Año Nuevo"},
    {date:new Date("2022-01-10"), descripcion:"Día de los Reyes Magos"},
    {date:new Date("2022-03-21"), descripcion:"Día de San José"},
    {date:new Date("2022-04-14"), descripcion:"Jueves Santo"},
    {date:new Date("2022-04-15"), descripcion:"Viernes Santo"},
    {date:new Date("2022-05-01"), descripcion:"Día del Trabajo"},
    {date:new Date("2022-05-30"), descripcion:"Ascensión del Señor"},
    {date:new Date("2022-06-20"), descripcion:"Corphus Christi"},
    {date:new Date("2022-06-27"), descripcion:"Sagrado Corazón de Jesús"},
    {date:new Date("2022-07-04"), descripcion:"San Pedro y San Pablo"},
    {date:new Date("2022-07-20"), descripcion:"Día de la Independencia"},
    {date:new Date("2022-08-07"), descripcion:"Batalla de Boyacá"},
    {date:new Date("2022-08-15"), descripcion:"La Asunción de la Virgen"},
    {date:new Date("2022-10-17"), descripcion:"Día de la Raza"},
    {date:new Date("2022-11-07"), descripcion:"Todos los Santos"},
    {date:new Date("2022-11-14"), descripcion:"Independencia de Cartagena"},
    {date:new Date("2022-12-08"), descripcion:"Día de la Inmaculada Concepción"},
    {date:new Date("2022-12-25"), descripcion:"Día de Navidad"},
    {date:new Date("2022-01-01"), descripcion:"Año Nuevo"},
    {date:new Date("2022-01-10"), descripcion:"Día de los Reyes Magos"},
    {date:new Date("2022-03-21"), descripcion:"Día de San José"},
    {date:new Date("2022-04-14"), descripcion:"Jueves Santo"},
    {date:new Date("2022-04-15"), descripcion:"Viernes Santo"},
    {date:new Date("2022-05-01"), descripcion:"Día del Trabajo"},
    {date:new Date("2022-05-30"), descripcion:"Ascensión del Señor"},
    {date:new Date("2022-06-20"), descripcion:"Corphus Christi"},
    {date:new Date("2022-06-27"), descripcion:"Sagrado Corazón de Jesús"},
    {date:new Date("2022-07-04"), descripcion:"San Pedro y San Pablo"},
    {date:new Date("2022-07-20"), descripcion:"Día de la Independencia"},
    {date:new Date("2022-08-07"), descripcion:"Batalla de Boyacá"},
    {date:new Date("2022-08-15"), descripcion:"La Asunción de la Virgen"},
    {date:new Date("2022-10-17"), descripcion:"Día de la Raza"},
    {date:new Date("2022-11-07"), descripcion:"Todos los Santos"},
    {date:new Date("2022-11-14"), descripcion:"Independencia de Cartagena"},
    {date:new Date("2022-12-08"), descripcion:"Día de la Inmaculada Concepción"},
    {date:new Date("2022-12-25"), descripcion:"Día de Navidad"},
    {date:new Date("2023-01-01"), descripcion:"Año Nuevo"},
    {date:new Date("2023-01-09"), descripcion:"Día de los Reyes Magos"},
    {date:new Date("2023-03-20"), descripcion:"Día de San José"},
    {date:new Date("2023-04-06"), descripcion:"Jueves Santo"},
    {date:new Date("2023-04-07"), descripcion:"Viernes Santo"},
    {date:new Date("2023-05-01"), descripcion:"Día del Trabajo"},
    {date:new Date("2023-05-22"), descripcion:"Ascensión del Señor"},
    {date:new Date("2023-06-12"), descripcion:"Corphus Christi"},
    {date:new Date("2023-06-19"), descripcion:"Sagrado Corazón de Jesús"},
    {date:new Date("2023-07-03"), descripcion:"San Pedro y San Pablo"},
    {date:new Date("2023-07-20"), descripcion:"Día de la Independencia"},
    {date:new Date("2023-08-07"), descripcion:"Batalla de Boyacá"},
    {date:new Date("2023-08-21"), descripcion:"La Asunción de la Virgen"},
    {date:new Date("2023-10-16"), descripcion:"Día de la Raza"},
    {date:new Date("2023-11-06"), descripcion:"Todos los Santos"},
    {date:new Date("2023-11-13"), descripcion:"Independencia de Cartagena"},
    {date:new Date("2023-12-08"), descripcion:"Día de la Inmaculada Concepción"},
    {date:new Date("2023-12-25"), descripcion:"Día de Navidad"},
    {date:new Date("2024-01-01"), descripcion:"Año Nuevo"},
    {date:new Date("2024-01-08"), descripcion:"Día de los Reyes Magos"},
    {date:new Date("2024-03-25"), descripcion:"Día de San José"},
    {date:new Date("2024-03-28"), descripcion:"Jueves Santo"},
    {date:new Date("2024-03-29"), descripcion:"Viernes Santo"},
    {date:new Date("2024-05-01"), descripcion:"Día del Trabajo"},
    {date:new Date("2024-05-13"), descripcion:"Ascensión del Señor"},
    {date:new Date("2024-06-03"), descripcion:"Corphus Christi"},
    {date:new Date("2024-06-10"), descripcion:"Sagrado Corazón de Jesús"},
    {date:new Date("2024-07-01"), descripcion:"San Pedro y San Pablo"},
    {date:new Date("2024-07-20"), descripcion:"Día de la Independencia"},
    {date:new Date("2024-08-07"), descripcion:"Batalla de Boyacá"},
    {date:new Date("2024-08-19"), descripcion:"La Asunción de la Virgen"},
    {date:new Date("2024-10-14"), descripcion:"Día de la Raza"},
    {date:new Date("2024-11-04"), descripcion:"Todos los Santos"},
    {date:new Date("2024-11-11"), descripcion:"Independencia de Cartagena"},
    {date:new Date("2024-12-08"), descripcion:"Día de la Inmaculada Concepción"},
    {date:new Date("2024-12-25"), descripcion:"Día de Navidad"},
    {date:new Date("2025-01-01"), descripcion:"Año Nuevo"},
    {date:new Date("2025-01-06"), descripcion:"Día de los Reyes Magos"},
    {date:new Date("2025-03-24"), descripcion:"Día de San José"},
    {date:new Date("2025-04-17"), descripcion:"Jueves Santo"},
    {date:new Date("2025-04-18"), descripcion:"Viernes Santo"},
    {date:new Date("2025-05-01"), descripcion:"Día del Trabajo"},
    {date:new Date("2025-06-02"), descripcion:"Ascensión del Señor"},
    {date:new Date("2025-06-23"), descripcion:"Corphus Christi"},
    {date:new Date("2025-06-30"), descripcion:"Sagrado Corazón de Jesús"},
    {date:new Date("2025-06-30"), descripcion:"San Pedro y San Pablo"},
    {date:new Date("2025-07-20"), descripcion:"Día de la Independencia"},
    {date:new Date("2025-08-07"), descripcion:"Batalla de Boyacá"},
    {date:new Date("2025-08-18"), descripcion:"La Asunción de la Virgen"},
    {date:new Date("2025-10-13"), descripcion:"Día de la Raza"},
    {date:new Date("2025-11-03"), descripcion:"Todos los Santos"},
    {date:new Date("2025-11-17"), descripcion:"Independencia de Cartagena"},
    {date:new Date("2025-12-08"), descripcion:"Día de la Inmaculada Concepción"},
    {date:new Date("2025-12-25"), descripcion:"Día de Navidad"},
    {date:new Date("2026-01-01"), descripcion:"Año Nuevo"},
    {date:new Date("2026-01-12"), descripcion:"Día de los Reyes Magos"},
    {date:new Date("2026-03-23"), descripcion:"Día de San José"},
    {date:new Date("2026-04-02"), descripcion:"Jueves Santo"},
    {date:new Date("2026-04-03"), descripcion:"Viernes Santo"},
    {date:new Date("2026-05-01"), descripcion:"Día del Trabajo"},
    {date:new Date("2026-05-18"), descripcion:"Ascensión del Señor"},
    {date:new Date("2026-06-08"), descripcion:"Corphus Christi"},
    {date:new Date("2026-06-15"), descripcion:"Sagrado Corazón de Jesús"},
    {date:new Date("2026-06-29"), descripcion:"San Pedro y San Pablo"},
    {date:new Date("2026-07-20"), descripcion:"Día de la Independencia"},
    {date:new Date("2026-08-07"), descripcion:"Batalla de Boyacá"},
    {date:new Date("2026-08-17"), descripcion:"La Asunción de la Virgen"},
    {date:new Date("2026-10-12"), descripcion:"Día de la Raza"},
    {date:new Date("2026-11-02"), descripcion:"Todos los Santos"},
    {date:new Date("2026-11-16"), descripcion:"Independencia de Cartagena"},
    {date:new Date("2026-12-08"), descripcion:"Día de la Inmaculada Concepción"},
    {date:new Date("2026-12-25"), descripcion:"Día de Navidad"},
    {date:new Date("2027-01-01"), descripcion:"Año Nuevo"},
    {date:new Date("2027-01-11"), descripcion:"Día de los Reyes Magos"},
    {date:new Date("2027-03-22"), descripcion:"Día de San José"},
    {date:new Date("2027-03-25"), descripcion:"Jueves Santo"},
    {date:new Date("2027-03-26"), descripcion:"Viernes Santo"},
    {date:new Date("2027-05-01"), descripcion:"Día del Trabajo"},
    {date:new Date("2027-05-10"), descripcion:"Ascensión del Señor"},
    {date:new Date("2027-05-31"), descripcion:"Corphus Christi"},
    {date:new Date("2027-06-07"), descripcion:"Sagrado Corazón de Jesús"},
    {date:new Date("2027-07-05"), descripcion:"San Pedro y San Pablo"},
    {date:new Date("2027-07-20"), descripcion:"Día de la Independencia"},
    {date:new Date("2027-08-07"), descripcion:"Batalla de Boyacá"},
    {date:new Date("2027-08-16"), descripcion:"La Asunción de la Virgen"},
    {date:new Date("2027-10-18"), descripcion:"Día de la Raza"},
    {date:new Date("2027-11-01"), descripcion:"Todos los Santos"},
    {date:new Date("2027-11-15"), descripcion:"Independencia de Cartagena"},
    {date:new Date("2027-12-08"), descripcion:"Día de la Inmaculada Concepción"},
    {date:new Date("2027-12-25"), descripcion:"Día de Navidad"},
    {date:new Date("2028-01-01"), descripcion:"Año Nuevo"},
    {date:new Date("2028-01-10"), descripcion:"Día de los Reyes Magos"},
    {date:new Date("2028-03-20"), descripcion:"Día de San José"},
    {date:new Date("2028-04-13"), descripcion:"Jueves Santo"},
    {date:new Date("2028-04-14"), descripcion:"Viernes Santo"},
    {date:new Date("2028-05-01"), descripcion:"Día del Trabajo"},
    {date:new Date("2028-05-29"), descripcion:"Ascensión del Señor"},
    {date:new Date("2028-06-19"), descripcion:"Corphus Christi"},
    {date:new Date("2028-06-26"), descripcion:"Sagrado Corazón de Jesús"},
    {date:new Date("2028-07-03"), descripcion:"San Pedro y San Pablo"},
    {date:new Date("2028-07-20"), descripcion:"Día de la Independencia"},
    {date:new Date("2028-08-07"), descripcion:"Batalla de Boyacá"},
    {date:new Date("2028-08-21"), descripcion:"La Asunción de la Virgen"},
    {date:new Date("2028-10-16"), descripcion:"Día de la Raza"},
    {date:new Date("2028-11-06"), descripcion:"Todos los Santos"},
    {date:new Date("2028-11-13"), descripcion:"Independencia de Cartagena"},
    {date:new Date("2028-12-08"), descripcion:"Día de la Inmaculada Concepción"},
    {date:new Date("2028-12-25"), descripcion:"Día de Navidad"},
    {date:new Date("2029-01-01"), descripcion:"Año Nuevo"},
    {date:new Date("2029-01-08"), descripcion:"Día de los Reyes Magos"},
    {date:new Date("2029-03-19"), descripcion:"Día de San José"},
    {date:new Date("2029-03-29"), descripcion:"Jueves Santo"},
    {date:new Date("2029-03-30"), descripcion:"Viernes Santo"},
    {date:new Date("2029-05-01"), descripcion:"Día del Trabajo"},
    {date:new Date("2029-05-14"), descripcion:"Ascensión del Señor"},
    {date:new Date("2029-06-04"), descripcion:"Corphus Christi"},
    {date:new Date("2029-06-11"), descripcion:"Sagrado Corazón de Jesús"},
    {date:new Date("2029-07-02"), descripcion:"San Pedro y San Pablo"},
    {date:new Date("2029-07-20"), descripcion:"Día de la Independencia"},
    {date:new Date("2029-08-07"), descripcion:"Batalla de Boyacá"},
    {date:new Date("2029-08-20"), descripcion:"La Asunción de la Virgen"},
    {date:new Date("2029-10-15"), descripcion:"Día de la Raza"},
    {date:new Date("2029-11-05"), descripcion:"Todos los Santos"},
    {date:new Date("2029-11-12"), descripcion:"Independencia de Cartagena"},
    {date:new Date("2029-12-08"), descripcion:"Día de la Inmaculada Concepción"},
    {date:new Date("2029-12-25"), descripcion:"Día de Navidad"},
    {date:new Date("2030-01-01"), descripcion:"Año Nuevo"},
    {date:new Date("2030-01-07"), descripcion:"Día de los Reyes Magos"},
    {date:new Date("2030-03-25"), descripcion:"Día de San José"},
    {date:new Date("2030-04-18"), descripcion:"Jueves Santo"},
    {date:new Date("2030-04-19"), descripcion:"Viernes Santo"},
    {date:new Date("2030-05-01"), descripcion:"Día del Trabajo"},
    {date:new Date("2030-06-03"), descripcion:"Ascensión del Señor"},
    {date:new Date("2030-06-24"), descripcion:"Corphus Christi"},
    {date:new Date("2030-07-01"), descripcion:"Sagrado Corazón de Jesús"},
    {date:new Date("2030-07-01"), descripcion:"San Pedro y San Pablo"},
    {date:new Date("2030-07-20"), descripcion:"Día de la Independencia"},
    {date:new Date("2030-08-07"), descripcion:"Batalla de Boyacá"},
    {date:new Date("2030-08-19"), descripcion:"La Asunción de la Virgen"},
    {date:new Date("2030-10-14"), descripcion:"Día de la Raza"},
    {date:new Date("2030-11-04"), descripcion:"Todos los Santos"},
    {date:new Date("2030-11-11"), descripcion:"Independencia de Cartagena"},
    {date:new Date("2030-12-08"), descripcion:"Día de la Inmaculada Concepción"},
    {date:new Date("2030-12-25"), descripcion:"Día de Navidad"},]);

    res.json(data);

    // new dia_no_habil_model(req.body).save((err) => {
    //   if (err) res.json({ msg: err });
    //   else res.json({ N1: "guardado" });
    // });
  } catch (error) {
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
    if (data == null)
      res.json({ msg: "El usuario no ha agregado ningún dia habil" });
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
    if (data == null)
      res.json({ msg: "El usuario no ha agregado ningún dia habil" });
    else res.json(rutas[module]);
  } catch (error) {
    res.json({ msg: error });
  }
};
