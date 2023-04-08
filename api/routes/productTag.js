import express from "express";
import {
  createProductTag,
  deleteProductTag,
  getAllProductTag,
  getProductSingleTag,
  updateProductTag,
} from "../controllers/productTagController.js";

// init express router
const router = express.Router();

// routes
router.route("/tag").get(getAllProductTag).post(createProductTag);
router
  .route("/tag/:id")
  .get(getProductSingleTag)
  .delete(deleteProductTag)
  .put(updateProductTag);

// export
export default router;
