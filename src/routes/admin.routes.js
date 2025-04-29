import { Router } from "express";
import { AdminController } from "../controllers/index.js";

const router = Router();

const controller = new AdminController();

router.post('/register', controller.createAdmin);
router.post('/login',controller.login.bind(controller))

export { router as adminRouter };