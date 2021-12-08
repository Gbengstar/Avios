import { Router } from "express";
import handler from "../controllers/pdController.js";
const router = Router();

router.post("/", handler.createProduct);
router.get("/", handler.getProducts);
router.patch("/:id", handler.updateProduct);
router.delete("/:id", handler.deleteProduct);

export default router;
