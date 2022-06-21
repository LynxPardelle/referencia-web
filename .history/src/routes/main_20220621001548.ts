/* Modules */
import { Router } from "express";
import MainController from "../controllers/main";
import multer from "multer";

const router: Router = Router();
const md_upload = multer({ dest: "./uploads" }).any();

/* Test Routes */
router.get("/datos-autor", MainController.datosAutor);

export default router;
