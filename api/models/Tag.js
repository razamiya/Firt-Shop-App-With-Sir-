import mongoose from "mongoose";

// Create Tag Schima

const tagSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      trim: true,
      required: true,
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
export default mongoose.model("Tag", tagSchema);
