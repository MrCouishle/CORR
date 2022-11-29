import mongoose from "mongoose";
import express, { Request, Response, NextFunction } from "express";
import * as routes from "./src/routes/index";
require("dotenv").config();

const PORT = process.env.PORT || 9001;
const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, x_token ,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.json());

//********Routes*******

app.get("/", (req: Request, res: Response) => {
  res.send("API funcionado :)");
});

app.use("/api", routes.SERCO);
app.use("/api", routes.DEPCO);
app.use("/api", routes.TIPCO);
app.use("/api", routes.AUXTIP);
app.use("/api", routes.UNIFUN);
app.use("/api", routes.REMIDEP);
app.use("/api", routes.HOLDING);
app.use("/api", routes.CARGOPS);
app.use("/api", routes.CORRES);
app.use("/api", routes.CORRESINFOR)
app.use("/api", routes.MACORR);
app.use("/api", routes.RESTR);
// app.use("/api", routes.ACTIV);
// app.use("/api", routes.CIUDA);
// app.use("/api", routes.CORRES);
// app.use("/api", routes.RESCORR);
// app.use("/api", routes.TERCE);
// app.use("/api", routes.USUAR);
app.use("/api", routes.Entrys);
app.use("/api", routes.CON802)
app.use("/api", routes.LISTADORESCORR)

//********Routes*******

console.clear();

//******Conection MONGODB****** */
mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => {
    console.log("Successful connection 🟢  :)");
  })
  .catch((error) => {
    console.log("Error conecting to the DB  🔴 :(");
    console.log(error);
  });

app.listen(PORT, () => console.log("API lisening in the PORT: ", PORT));
