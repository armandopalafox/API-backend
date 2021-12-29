import { Request, Response, Router } from "express";
import { getHello } from "../controllers/test.controllers";

const router = Router();

router.get("/hello", getHello);

export default router;