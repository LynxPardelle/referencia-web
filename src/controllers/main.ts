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
import MainSectionModel, {
  MainSection as MainSectionType,
} from "../models/main-section";

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
  async createMainSection(req: Request, res: Response) {
    let nErr: number = 500;
    try {
      const { title, text, titleColor, textColor, linkColor, bgColor }: any =
        req.body;
      try {
        const [valTit, valTex, valTiC, valTeC, valLiC, valBgC] = [
          !validator.isEmpty(title),
          !validator.isEmpty(text),
          !validator.isEmpty(titleColor),
          !validator.isEmpty(textColor),
          !validator.isEmpty(linkColor),
          !validator.isEmpty(bgColor),
        ];
      } catch (err: any) {
        throw new Error(`¡Faltan datos por enviar /b 
        title = ${title},/b
        text = ${text},/b
        titleColor = ${titleColor}, /b
        textColor = ${textColor}, /b
        linkColor = ${linkColor}, /b
        bgColor = ${bgColor},
        `);
      }
      const mainSection: MainSectionType = new MainSectionModel({
        title,
        text,
        titleColor,
        textColor,
        linkColor,
        bgColor,
      });
    } catch (e: any) {
      console.log(e);
      return res.status(nErr).send({
        status: "error",
        message: e.message,
        e: e,
      });
    }
  },

  /* Read */

  /* Update */

  /* Delete */

  /* Files */
};

export default controller;
