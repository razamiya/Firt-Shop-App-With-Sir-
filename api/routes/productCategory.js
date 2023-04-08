import express from "express";
import {
  getAllProductCategory,
  createProductCategory,
  productSingleCategory,
  deleteProductCategory,
  UpdateProductCategory,
} from "../controllers/productCategoryController.js";

// import Photo management Middleware Multer
import { productCategoryMulter } from "../utils/multer.js";

// create router
const router = express.Router();

// routs Product category
router.get("/category", getAllProductCategory);
router.post("/category", productCategoryMulter, createProductCategory);
router.get("/category/:slug", productSingleCategory);
router.delete("/category/:id", deleteProductCategory);
router.put("/category/:id", UpdateProductCategory);

// export
export default router;
