import express from "express";
import mainController from "../controllers/main";
import areaController from "../controllers/area";
import cursoController from "../controllers/curso";
const router = express.Router();

//Main  controller
router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/signup", mainController.signup);
router.get("/ui", mainController.ui);

//Area Controler

router.get("/areas", areaController.index);

//Curso Controller

router.get("/curso",cursoController.index);
router.get("/curso/create",cursoController.create);
router.post("/curso/create",cursoController.create);
router.post("/curso/update/:id",cursoController.update);
router.get("/curso/update/:id",cursoController.update);
router.get("/curso/:id",cursoController.read);
router.delete("/curso/:id",cursoController.remove);



export default router;