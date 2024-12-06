import { Router } from "express";
import {
  filterSearch,
  signin,
  signup,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/bulk", filterSearch);
export default router;
