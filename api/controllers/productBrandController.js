import Brand from "../models/Brand.js";

// Get All Brand
export const getAllBrand = async (req, res) => {
  try {
    const data = await Brand.find();
    res.status(200).json({
      Brands: data,
      message: "Get All Brand Successfull",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// Create Brand
export const createBrand = async (req, res) => {
  const { name, slug } = req.body;
  try {
    const data = await Brand.create({
      name,
      slug,
      photo: req.file.filename,
    });
    res.status(200).json({
      Brand: data,
      message: "Create Brand Successfull",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// Get single Brand
export const getSingleBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Brand.findById(id);
    res.status(200).json({
      Brand: data,
      message: "Get single Brand Success",
    });
  } catch (error) {
    console.log(`${error.message}`);
  }
};

// Delete Brand
export const deleteBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Brand.findByIdAndDelete(id);
    res.status(200).json({
      Brand: data,
      message: "Delete Brand Successfull",
    });
  } catch (error) {
    console.log(`${error.message}`);
  }
};

// Update Brand
export const updateBrand = async (req, res) => {
  const { id } = req.params;
  const { name, slug } = req.body;
  try {
    const data = await Brand.findByIdAndUpdate(
      id,
      { name, slug },
      { new: true }
    );
    res.status(200).json({
      Brand: data,
      message: "Update Brand Success",
    });
  } catch (error) {
    console.log(`${error.message}`);
  }
};
