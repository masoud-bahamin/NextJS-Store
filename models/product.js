const mongoose = require("mongoose");
const Comment = require("@/models/comment");

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: [],
      default: [],
    },
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
  },
  { timestamps: true }
);
schema.virtual("comments", {
  localField: "_id",
  foreignField: "productId",
  ref: "Comment",
});
const productModel =
  mongoose.models.Product || mongoose.model("Product", schema);

export default productModel;
