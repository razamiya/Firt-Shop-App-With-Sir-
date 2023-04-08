import Category from "../models/Category.js";

// Get All Product Category
export const getAllProductCategory = async (req, res) => {
  try {
    // Find All Category
    const data = await Category.find();
    res.json({
      category: data,
      message: "Get All Category Successfull",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// Create Product Category
export const createProductCategory = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const data = await Category.create({
      name,
      slug,
      photo: req.file.filename,
    });
    res.json({
      category: data,
      message: "Category Create SuccessFull",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// Get Single Product Category
export const productSingleCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await Category.findOne({ slug });
    res.json({
      category: data,
      message: "Get Single Category SuccessFull",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// Delete Product Category
export const deleteProductCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Category.findByIdAndDelete(id);
    res.json({
      category: data,
      message: "Delete Category SuccessFull",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// Update Product Category
export const UpdateProductCategory = async (req, res) => {
  const { id } = req.params;
  const { name, slug } = req.body;

  try {
    const data = await Category.findByIdAndUpdate(
      id,
      { name, slug },
      { new: true }
    );
    res.json({
      category: data,
      message: "Delete Category SuccessFull",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};
