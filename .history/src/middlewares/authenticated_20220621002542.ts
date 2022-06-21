/* Modules */
import { Request, Response } from "express";
import jwt from "jwt-simple";
import moment from "moment";
import secret from "../keys";

exports.ensureAuth = (req: Request, res: Response, next: any) => {
  if (!req.headers.authorization) {
    return res
      .status(403)
      .send({ message: "La petición no tiene la cabecera de autenticación." });
  }
  const token = req.headers.authorization.replace(/['"]+/g, "");
  try {
    const payload = jwt.decode(token, secret);
    if (payload.exp <= moment().unix()) {
      return res.status(401).send({
        message: "El token ha expirado",
      });
    }
  } catch (ex) {
    return res.status(404).send({
      message: "El token no es válido",
    });
  }

  next();
};
