const mongoose = require("mongoose");
const Product = require("./product");

const schema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const commentMedel =
  mongoose.models.Comment || mongoose.model("Comment", schema);

export default commentMedel;
