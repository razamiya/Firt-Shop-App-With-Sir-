import multer from "multer";

// Create DiskStorage
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    if (file.fieldname == "categoryPhoto") {
      cb(null, "api/public/products/category");
    } else if (file.fieldname == "brandPhoto") {
      cb(null, "api/public/products/brand");
    }
  },
});

// export Category Multer
export const productCategoryMulter = multer({ storage }).single(
  "categoryPhoto"
);

// export Brand Multer
export const productBrandMulter = multer({ storage }).single("brandPhoto");
