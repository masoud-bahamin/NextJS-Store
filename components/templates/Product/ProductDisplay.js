import React from "react";

export default function ProductDisplay({
  title,
  thumbnail,
  price,
  images,
  description,
  rating,
}) {
  return (
    <section className="bg-back pt-24 lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-7/12">
            <div className="mb-12 lg:mb-0 lg:mr-5 xl:mr-10">
              <div className="mb-8 overflow-hidden rounded-lg">
                <img
                  src={thumbnail}
                  alt="products-details"
                  className="w-full"
                  x-show="productOne "
                />
                <img
                  src="/img/big-image-02.jpg"
                  alt="products-details"
                  className="w-full hidden"
                  x-show="productTwo "
                />
                <img
                  src="/img/big-image-03.jpg"
                  alt="products-details"
                  className="w-full hidden"
                  x-show="productThree "
                />
              </div>
              <div className="-mx-4 flex items-center justify-between">
                {images?.slice(0, 3).map((image) => (
                  <div className="w-1/3 px-4" key={image}>
                    <button className="w-full overflow-hidden rounded-lg">
                      <img src={image} alt="thumbnail-01" className="w-full" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div>
              <h2 className="mb-5 text-2xl font-bold text-black sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                {title}
              </h2>

              <div className="mb-8 flex flex-wrap items-center">
                <div className="mr-4 flex items-center">
                  <div className="flex items-center">
                    <span className="pr-1">
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2903 6.72187L11.1997 5.93437L8.89346 1.09687C8.72471 0.759375 8.27471 0.759375 8.10596 1.09687L5.79971 5.9625L0.737211 6.72187C0.371586 6.77812 0.230961 7.25625 0.512211 7.50937L4.19659 11.3062L3.32471 16.6219C3.26846 16.9875 3.63409 17.2969 3.97159 17.0719L8.55596 14.5687L13.1122 17.0719C13.4216 17.2406 13.8153 16.9594 13.731 16.6219L12.8591 11.3062L16.5435 7.50937C16.7685 7.25625 16.656 6.77812 16.2903 6.72187Z"
                          fill="#FFA645"
                        ></path>
                      </svg>
                    </span>
                    <span className="pr-1">
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2903 6.72187L11.1997 5.93437L8.89346 1.09687C8.72471 0.759375 8.27471 0.759375 8.10596 1.09687L5.79971 5.9625L0.737211 6.72187C0.371586 6.77812 0.230961 7.25625 0.512211 7.50937L4.19659 11.3062L3.32471 16.6219C3.26846 16.9875 3.63409 17.2969 3.97159 17.0719L8.55596 14.5687L13.1122 17.0719C13.4216 17.2406 13.8153 16.9594 13.731 16.6219L12.8591 11.3062L16.5435 7.50937C16.7685 7.25625 16.656 6.77812 16.2903 6.72187Z"
                          fill="#FFA645"
                        ></path>
                      </svg>
                    </span>
                    <span className="pr-1">
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2903 6.72187L11.1997 5.93437L8.89346 1.09687C8.72471 0.759375 8.27471 0.759375 8.10596 1.09687L5.79971 5.9625L0.737211 6.72187C0.371586 6.77812 0.230961 7.25625 0.512211 7.50937L4.19659 11.3062L3.32471 16.6219C3.26846 16.9875 3.63409 17.2969 3.97159 17.0719L8.55596 14.5687L13.1122 17.0719C13.4216 17.2406 13.8153 16.9594 13.731 16.6219L12.8591 11.3062L16.5435 7.50937C16.7685 7.25625 16.656 6.77812 16.2903 6.72187Z"
                          fill="#FFA645"
                        ></path>
                      </svg>
                    </span>
                    <span className="pr-1">
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2903 6.72187L11.1997 5.93437L8.89346 1.09687C8.72471 0.759375 8.27471 0.759375 8.10596 1.09687L5.79971 5.9625L0.737211 6.72187C0.371586 6.77812 0.230961 7.25625 0.512211 7.50937L4.19659 11.3062L3.32471 16.6219C3.26846 16.9875 3.63409 17.2969 3.97159 17.0719L8.55596 14.5687L13.1122 17.0719C13.4216 17.2406 13.8153 16.9594 13.731 16.6219L12.8591 11.3062L16.5435 7.50937C16.7685 7.25625 16.656 6.77812 16.2903 6.72187Z"
                          fill="#FFA645"
                        ></path>
                      </svg>
                    </span>
                    <span className="pr-1">
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2903 6.72187L11.1997 5.93437L8.89346 1.09687C8.72471 0.759375 8.27471 0.759375 8.10596 1.09687L5.79971 5.9625L0.737211 6.72187C0.371586 6.77812 0.230961 7.25625 0.512211 7.50937L4.19659 11.3062L3.32471 16.6219C3.26846 16.9875 3.63409 17.2969 3.97159 17.0719L8.55596 14.5687L13.1122 17.0719C13.4216 17.2406 13.8153 16.9594 13.731 16.6219L12.8591 11.3062L16.5435 7.50937C16.7685 7.25625 16.656 6.77812 16.2903 6.72187Z"
                          fill="#FFA645"
                        ></path>
                      </svg>
                    </span>

                    <span className="pl-2 text-base font-medium text-black">
                      {rating || 5} Rating
                    </span>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="pr-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5313 10 18.5313C14.6875 18.5313 18.5313 14.6875 18.5313 10C18.5313 5.3125 14.6875 1.5 10 1.5Z"
                        fill="#13C296"
                      ></path>
                      <path
                        d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1562 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z"
                        fill="#13C296"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-base font-medium text-black">
                    In Stock
                  </span>
                </div>
              </div>

              <p className="mb-10 text-base font-medium text-slate-700">
                {description}
              </p>

              <div className="mb-9 flex-wrap justify-between xs:flex">
                <div className="mb-8 xs:mb-0">
                  <p className="mb-3 text-base font-medium text-black">
                    Quantity
                  </p>
                  <div className="inline-flex items-center rounded border border-[#e7e7e7] text-base font-medium text-black">
                    <span className="cursor-pointer select-none py-2 px-4">
                      -
                    </span>
                    <span className="py-2 px-4" x-text="quantity">
                      1
                    </span>
                    <span className="cursor-pointer select-none py-2 px-4">
                      +
                    </span>
                  </div>
                </div>

                <div className="xs:text-right">
                  <span className="mb-3 block text-3xl font-bold text-black">
                    ${price}
                  </span>
                  <span className="text-base font-medium text-slate-700">
                    +12% VAT Added
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <button className="flex w-full items-center justify-center rounded-md bg-primary-300 py-3 px-10 text-center text-base font-semibold text-white hover:bg-opacity-90">
                  Add to Cart
                </button>
              </div>
              <h3 className="mb-7 text-xl font-semibold text-black sm:text-2xl">
                Product Details
              </h3>

              <div className="mb-9 space-y-3">
                <p className="flex justify-between border-b border-[#e7e7e7] pb-3 text-base font-medium text-black">
                  <span className="whitespace-nowrap"> Size </span>
                  <span> Small, Medium, Large </span>
                </p>
                <p className="flex justify-between border-b border-[#e7e7e7] pb-3 text-base font-medium text-black">
                  <span className="whitespace-nowrap"> Color </span>
                  <span> White, Black, Gray </span>
                </p>
                <p className="flex justify-between text-base font-medium text-black">
                  <span className="whitespace-nowrap"> Brand </span>
                  <span> Shirt Flex </span>
                </p>
              </div>

              <h3 className="mb-7 text-xl font-semibold text-black sm:text-2xl">
                Select Size
              </h3>
              <div className="mb-9 flex flex-wrap items-center">
                <div className="mr-4 mb-4">
                  <input
                    type="radio"
                    name="size"
                    id="small"
                    className="filter-size sr-only"
                  />
                  <label
                    htmlFor="small"
                    className="inline-block cursor-pointer rounded border border-[#e7e7e7] py-2 px-6 hover:border-primary-300 hover:bg-primary-300 hover:text-white"
                  >
                    Small
                  </label>
                </div>
                <div className="mr-4 mb-4">
                  <input
                    type="radio"
                    name="size"
                    id="medium"
                    className="filter-size sr-only"
                  />
                  <label
                    htmlFor="medium"
                    className="inline-block cursor-pointer rounded border border-[#e7e7e7] py-2 px-6 hover:border-primary-300 hover:bg-primary-300 hover:text-white"
                  >
                    Medium
                  </label>
                </div>
                <div className="mr-4 mb-4">
                  <input
                    type="radio"
                    name="size"
                    id="large"
                    className="filter-size sr-only"
                  />
                  <label
                    htmlFor="large"
                    className="inline-block cursor-pointer rounded border border-[#e7e7e7] py-2 px-6 hover:border-primary-300 hover:bg-primary-300 hover:text-white"
                  >
                    Large
                  </label>
                </div>
              </div>

              <h3 className="mb-7 text-xl font-semibold text-black sm:text-2xl">
                Select Color
              </h3>
              <div className="mb-9 flex items-center">
                <div className="mr-4 mb-4">
                  <input
                    type="radio"
                    name="color"
                    id="gray"
                    className="sr-only"
                  />
                  <label
                    htmlFor="gray"
                    className="box flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-slate-700 text-white"
                  >
                    <span className="opacity-0">
                      <svg
                        width="16"
                        height="11"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="0.4"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <div className="mr-4 mb-4">
                  <input
                    type="radio"
                    name="color"
                    id="red"
                    className="sr-only"
                  />
                  <label
                    htmlFor="red"
                    className="box flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-red-600 text-white"
                  >
                    <span className="opacity-0">
                      <svg
                        width="16"
                        height="11"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="0.4"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <div className="mr-4 mb-4">
                  <input
                    type="radio"
                    name="color"
                    id="green"
                    className="sr-only"
                  />
                  <label
                    htmlFor="green"
                    className="box flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-primary-300 text-white"
                  >
                    <span className="opacity-0">
                      <svg
                        width="16"
                        height="11"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="0.4"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
                <div className="mr-4 mb-4">
                  <input
                    type="radio"
                    name="color"
                    id="green"
                    className="sr-only"
                  />
                  <label
                    htmlFor="green"
                    className="box flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-secondary text-white"
                  >
                    <span className="opacity-0">
                      <svg
                        width="16"
                        height="11"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="0.4"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
