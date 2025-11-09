import { Router } from "express";
import * as UserController from "./user.controller";

const router = Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById)

export default router;