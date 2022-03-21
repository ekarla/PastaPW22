import express from "express";
import mainController from "../controllers/main";
const router = express.Router();

router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/ui", mainController.ui);

export default router;