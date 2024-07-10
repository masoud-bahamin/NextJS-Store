import ProductCard from "@/components/modules/Card/ProductCard";
import React, { useState } from "react";
import Pagination from "./pagination";
import SelectSize from "./SeletSize";
import ChooseColor from "./ChooseColor";
import ProductType from "./ProductType";
import DisplayType from "./DisplayType";

export default function ProductsDisplay({ products }) {
  const [viewBox, setViewBox] = useState("xl:w-1/3");
  const [productsCategory, setProductsCategory] = useState([]);
  const [productsShow, setProductsShow] = useState(products);

  const selectHandler = (e) => {
    const { value } = e.target;
    if (value === "-1") {
      return;
    } else if (value === "expensive") {
      const newArrey = [...productsShow].sort((a, b) => b.price - a.price);
      setProductsShow(newArrey);
    } else if (value === "cheep") {
      const newArrey = [...productsShow].sort((a, b) => a.price - b.price);
      setProductsShow(newArrey);
    } else if (value === "old") {
      setProductsShow([...productsShow].reverse());
    } else {
      setProductsShow(productsShow);
    }
  };

  const CategoryHandler = (value) => {
    if (productsCategory.includes(value)) {
      setProductsCategory((prev) => prev.filter((item) => item !== value));

      if (productsCategory.length > 1) {
        const newArrey = productsShow.filter((item) => item.category !== value);
        setProductsShow(newArrey);
      } else {
        setProductsShow(products);
      }
    } else {
      setProductsCategory([...productsCategory, value]);
      if (productsCategory.length === 0) {
        setProductsShow(() =>
          products.filter((item) => item.category === value)
        );
      } else {
        const newArrey = products.filter((item) => item.category === value);
        setProductsShow([...productsShow, ...newArrey]);
      }
    }
  };

  return (
    <>
      <section className="bg-back pt-24 pb-[90px]">
        <div className="container mx-auto">
          <div className="mb-10 rounded-lg border border-[#e7e7e7] bg-white p-5">
            <DisplayType
              selectHandler={selectHandler}
              viewBox={viewBox}
              setViewBox={setViewBox}
            />
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-4/12 xl:w-3/12">
              <ProductType CategoryHandler={CategoryHandler} />
              <ChooseColor />
              <SelectSize />
            </div>
            <div className="w-full px-4 lg:w-8/12 xl:w-9/12">
              <div className="-mx-4 flex flex-wrap">
                {productsShow?.map((product) => (
                  <ProductCard
                    viewBox={viewBox}
                    key={product?._id}
                    {...product}
                  />
                ))}
                {/* pagination */}
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
