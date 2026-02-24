import { Router } from "express";
import { GroupControllers } from "../controllers/group.controllers.ts";

const router = Router();
const groupControllers = new GroupControllers();

router.get("/", groupControllers.getAll);

export default router;
