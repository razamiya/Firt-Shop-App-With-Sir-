import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    slug: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    desc: {
      type: String,
      trim: true,
    },
    short_desc: {
      type: String,
      trim: true,
    },
    long_desc: {
      type: String,
      trim: true,
    },
    regular_price: {
      type: Number,
    },
    sale_price: {
      type: Number,
    },
    stock: {
      type: Number,
      default: null,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Category",
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tag",
    },
    brands: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Brand",
    },
    photo: {
      type: String,
      trim: true,
    },
    gallery: {
      type: [],
      trim: true,
    },
    status: {
      type: Boolean,
    },
    trash: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

// export
export default mongoose.model("Product", productSchema);
