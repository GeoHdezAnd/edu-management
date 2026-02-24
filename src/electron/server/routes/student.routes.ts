import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json("Ok students");
});

export default router;
