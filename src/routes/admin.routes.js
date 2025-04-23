import { Router } from "express";
import { AdminController } from "../controllers/index.js";

const router = Router();

const controller = new AdminController();

router.post("/", controller.createAdmin);

export { router as adminRouter };
