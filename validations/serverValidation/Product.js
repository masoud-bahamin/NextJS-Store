const validator = require("fastest-validator");

const v = new validator();

const schema = {
  title: { type: "string", min: 3, max: 40 },
  price: { type: "number", min: 0, max: 90000000000 },
  description: { type: "string", min: 3, max: 400000 },
  images: { type: "array", min: 1, max: 1000, optional: true },
  discountPercentage: { type: "number", min: 0, max: 100, optional: true },
  rating: { type: "number", min: 0, max: 6, optional: true },
  stock: { type: "number", min: 0, max: 100000, optional: true },
  brand: { type: "string", min: 1, max: 100, optional: true },
  category: { type: "string", min: 1, max: 100, optional: true },
  thumbnail: { type: "string", min: 3, max: 1000, optional: true },
};

const checkProduct = v.compile(schema);

export default checkProduct;
