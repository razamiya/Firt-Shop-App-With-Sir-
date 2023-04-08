import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
// Router
import productCategory from "./routes/productCategory.js";
import productBrand from "./routes/productBrand.js";
import productTag from "./routes/productTag.js";

// connect mongo db
import connectMongoDb from "./config/db.js";

// init express app
const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// envronment variable
const PORT = process.env.PORT || 9090;

// set static folder
app.use(express.static("api/public"));

// Our Api Route
app.use("/api/v1/product", productCategory);
app.use("/api/v1/product", productBrand);
app.use("/api/v1/product", productTag);

// App Lisen
app.listen(PORT, () => {
  connectMongoDb();
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
});
