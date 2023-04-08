import express from "express";
import {
  createBrand,
  deleteBrand,
  getAllBrand,
  getSingleBrand,
  updateBrand,
} from "../controllers/productBrandController.js";
import { productBrandMulter } from "../utils/multer.js";

// Init Router
const router = express.Router();

// Routes
router.get("/brand", getAllBrand);
router.post("/brand", productBrandMulter, createBrand);
router.get("/brand/:id", getSingleBrand);
router.delete("/brand/:id", deleteBrand);
router.put("/brand/:id", updateBrand);

// Export
export default router;
