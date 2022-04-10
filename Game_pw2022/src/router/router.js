import express from "express";
import mainController from "../controllers/main";
import areaController from "../controllers/area";
const router = express.Router();

//Main  controller
router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/ui", mainController.ui);

//Area Controler

router.get("/areas", areaController.index);

export default router;