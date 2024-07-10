import React from "react";

export default function ProductType({ CategoryHandler }) {
  return (
    <div className="mb-8 rounded-lg border border-[#e7e7e7] bg-white">
      <div className="border-b border-[#e7e7e7] py-4 px-8 lg:px-6 xl:px-8">
        <h3 className="text-base font-semibold text-black sm:text-lg lg:text-base xl:text-lg">
          Product Type
        </h3>
      </div>
      <div className="space-y-4 py-9 px-8 lg:px-6 xl:px-8">
        <div>
          <label
            htmlFor="checkboxLabelOne"
            className="flex cursor-pointer select-none items-center text-black"
          >
            <div
              className="relative"
              onClick={() => CategoryHandler("groceries")}
            >
              <input
                type="checkbox"
                id="checkboxLabelOne"
                className="mr-4 flex h-5 w-5 items-center justify-center rounded"
              />
            </div>
            Groceries
          </label>
        </div>
        <div>
          <label
            htmlFor="checkboxLabelTwo"
            className="flex cursor-pointer select-none items-center text-black"
          >
            <div className="relative" onClick={() => CategoryHandler("beauty")}>
              <input
                type="checkbox"
                id="checkboxLabelTwo"
                className="mr-4 flex h-5 w-5 items-center justify-center rounded"
              />
            </div>
            Beauty
          </label>
        </div>
        <div>
          <label
            htmlFor="checkboxLabelThree"
            className="flex cursor-pointer select-none items-center text-black"
          >
            <div
              className="relative"
              onClick={() => CategoryHandler("home-decoration")}
            >
              <input
                type="checkbox"
                id="checkboxLabelThree"
                className="mr-4 flex h-5 w-5 items-center justify-center rounded"
              />
            </div>
            Home Decoration
          </label>
        </div>
        <div>
          <label
            htmlFor="checkboxLabel4"
            className="flex cursor-pointer select-none items-center text-black"
          >
            <div
              className="relative"
              onClick={() => CategoryHandler("laptops")}
            >
              <input
                type="checkbox"
                id="checkboxLabel4"
                className="mr-4 flex h-5 w-5 items-center justify-center rounded"
              />
            </div>
            Laptops
          </label>
        </div>
      </div>
    </div>
  );
}
