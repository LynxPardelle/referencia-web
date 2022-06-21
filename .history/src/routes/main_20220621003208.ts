/* Modules */
import { Router } from "express";
import MainController from "../controllers/main";
import multer from "multer";
import {
  ensureAuth as md_auth,
  optionalAuth as md_optional_auth,
} from "../middlewares/authenticated";

const router: Router = Router();
const md_upload = multer({ dest: "./uploads" }).any();

/* Test Routes */
router.get("/datos-autor", MainController.datosAutor);

export default router;
