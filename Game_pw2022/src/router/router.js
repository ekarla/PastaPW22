import express from "express";
import mainController from "../controllers/main";
import areaController from "../controllers/area";
import cursoController from "../controllers/curso";
const router = express.Router();

//Main  controller
router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/ui", mainController.ui);

//Area Controler

router.get("/areas", areaController.index);

//Curso Controller

router.get("/curso",cursoController.index);
router.get("/curso/create",cursoController.create);
router.post("/curso/create",cursoController.create);
router.get("/curso/:id",cursoController.read);


export default router;