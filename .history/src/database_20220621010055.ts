import mongoose, { ConnectOptions } from "mongoose";
import { mongodb } from "./keys";

mongoose
  .connect(mongodb.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log(
      "La conexión a la base de datos de Referencia Web se ha realizado correctamente."
    );
  })
  .catch((e) => console.log(e));
