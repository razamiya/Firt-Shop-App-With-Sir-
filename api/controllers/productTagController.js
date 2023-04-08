import Tag from "../models/Tag.js";

// Get Peoduct all tag
export const getAllProductTag = async (req, res) => {
  try {
    const data = await Tag.find();
    res.status(200).json({
      Tags: data,
      messgae: "Get all tag successfull",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// Create product tag
export const createProductTag = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const data = await Tag.create({ name, slug });
    res.status(200).json({
      Tag: data,
      messgae: "Create tag successfull",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// Get Peoduct Single tag
export const getProductSingleTag = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Tag.findById(id);
    res.status(200).json({
      Tag: data,
      messgae: "Get single tag successfull",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// Get Peoduct Single tag
export const deleteProductTag = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Tag.findByIdAndDelete(id);
    res.status(200).json({
      Tag: data,
      messgae: "Delete tag successfull",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// Get Peoduct Single tag
export const updateProductTag = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Tag.findByIdAndUpdate(id, { name, slug }, { new: true });
    res.status(200).json({
      Tag: data,
      messgae: "Update tag successfull",
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};
