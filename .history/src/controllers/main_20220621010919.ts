/* Modules */
import { Request, Response } from "express";
import validator from "validator";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import jwt from "../lib/jwt";
import secret from "../keys";

/* Models */
import MainModel, { Main as MainType } from "../models/main";

/* Controller */
const controller = {
  /* Test */
  datosAutor: (req: Request, res: Response) => {
    return res.status(200).send({
      autor: "Lynx Pardelle",
      url: "https://www.lynxpardelle.com",
    });
  },

  /* Create */

  /* Read */

  /* Update */

  /* Delete */

  /* Files */
};

export default controller;
