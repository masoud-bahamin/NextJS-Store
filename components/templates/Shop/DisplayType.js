import React from "react";

export default function DisplayType({ viewBox, setViewBox, selectHandler }) {
  return (
    <div className="-mx-4 flex flex-wrap items-center justify-between">
      <div className="w-full px-4 sm:w-1/2">
        <div className="mb-4 inline-block sm:mb-0">
          <div className="relative">
            <select
              onChange={selectHandler}
              className="w-full appearance-none rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body outline-none transition focus:border-primary-300 active:border-primary-300 disabled:cursor-default disabled:bg-[#F5F7FD]"
            >
              <option value="-1">Best Selling</option>
              <option value="new">Newest Products</option>
              <option value="old">Oldest Products</option>
              <option value="expensive">More Expensive Products</option>
              <option value="cheep">More Cheep Products</option>
            </select>
            <span className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
          </div>
        </div>
      </div>
      <div className="w-full px-4 sm:w-1/2">
        <div className="flex items-center space-x-4 sm:justify-end">
          <div className="relative" onClick={() => setViewBox("xl:w-1/3")}>
            <input type="radio" name="view" id="gridView" className="sr-only" />
            <label
              htmlFor="gridView"
              className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded border ${
                viewBox === "xl:w-1/3"
                  ? " border-primary-300 bg-primary-300 text-white"
                  : "border-[#e7e7e7] bg-white text-black"
              } hover:border-primary-300 hover:bg-primary-300 hover:text-white`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.77148 9.00645H2.40586C1.30586 9.00645 0.412109 8.1127 0.412109 7.0127V2.64707C0.412109 1.54707 1.30586 0.65332 2.40586 0.65332H6.77148C7.87148 0.65332 8.76523 1.54707 8.76523 2.64707V7.0127C8.76523 8.1127 7.87148 9.00645 6.77148 9.00645ZM2.40586 1.85645C1.99336 1.85645 1.61523 2.2002 1.61523 2.64707V7.0127C1.61523 7.4252 1.95898 7.80332 2.40586 7.80332H6.77148C7.18398 7.80332 7.56211 7.45957 7.56211 7.0127V2.64707C7.56211 2.23457 7.21836 1.85645 6.77148 1.85645H2.40586Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M19.5938 9.00645H15.2281C14.1281 9.00645 13.2344 8.1127 13.2344 7.0127V2.64707C13.2344 1.54707 14.1281 0.65332 15.2281 0.65332H19.5938C20.6938 0.65332 21.5875 1.54707 21.5875 2.64707V7.0127C21.5875 8.1127 20.6938 9.00645 19.5938 9.00645ZM15.2281 1.85645C14.8156 1.85645 14.4375 2.2002 14.4375 2.64707V7.0127C14.4375 7.4252 14.7812 7.80332 15.2281 7.80332H19.5938C20.0063 7.80332 20.3844 7.45957 20.3844 7.0127V2.64707C20.3844 2.23457 20.0406 1.85645 19.5938 1.85645H15.2281Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M6.77148 21.3473H2.40586C1.30586 21.3473 0.412109 20.4535 0.412109 19.3535V14.9879C0.412109 13.8879 1.30586 12.9941 2.40586 12.9941H6.77148C7.87148 12.9941 8.76523 13.8879 8.76523 14.9879V19.3535C8.76523 20.4535 7.87148 21.3473 6.77148 21.3473ZM2.40586 14.1973C1.99336 14.1973 1.61523 14.541 1.61523 14.9879V19.3535C1.61523 19.766 1.95898 20.1441 2.40586 20.1441H6.77148C7.18398 20.1441 7.56211 19.8004 7.56211 19.3535V14.9879C7.56211 14.5754 7.21836 14.1973 6.77148 14.1973H2.40586Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M19.5938 21.3473H15.2281C14.1281 21.3473 13.2344 20.4535 13.2344 19.3535V14.9879C13.2344 13.8879 14.1281 12.9941 15.2281 12.9941H19.5938C20.6938 12.9941 21.5875 13.8879 21.5875 14.9879V19.3535C21.5875 20.4535 20.6938 21.3473 19.5938 21.3473ZM15.2281 14.1973C14.8156 14.1973 14.4375 14.541 14.4375 14.9879V19.3535C14.4375 19.766 14.7812 20.1441 15.2281 20.1441H19.5938C20.0063 20.1441 20.3844 19.8004 20.3844 19.3535V14.9879C20.3844 14.5754 20.0406 14.1973 19.5938 14.1973H15.2281Z"
                  fill="currentColor"
                ></path>
              </svg>
            </label>
          </div>
          <div className="relative" onClick={() => setViewBox("xl:w-full")}>
            <input type="radio" name="view" id="listView" className="sr-only" />
            <label
              htmlFor="listView"
              className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded border ${
                viewBox === "xl:w-full"
                  ? " border-primary-300 bg-primary-300 text-white"
                  : "border-[#e7e7e7] bg-white text-black"
              } hover:border-primary-300 hover:bg-primary-300 hover:text-white`}
            >
              <svg
                width="21"
                height="16"
                viewBox="0 0 21 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.43125 1.70898H19.9687C20.3125 1.70898 20.5875 1.43398 20.5875 1.09023C20.5875 0.746484 20.3125 0.505859 19.9687 0.505859H4.43125C4.0875 0.505859 3.8125 0.780859 3.8125 1.12461C3.8125 1.46836 4.12187 1.70898 4.43125 1.70898Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M19.9687 7.41504H4.43125C4.0875 7.41504 3.8125 7.69004 3.8125 8.03379C3.8125 8.37754 4.0875 8.65254 4.43125 8.65254H19.9687C20.3125 8.65254 20.5875 8.37754 20.5875 8.03379C20.5875 7.69004 20.3125 7.41504 19.9687 7.41504Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M19.9687 14.29H4.43125C4.0875 14.29 3.8125 14.565 3.8125 14.9088C3.8125 15.2525 4.0875 15.5275 4.43125 15.5275H19.9687C20.3125 15.5275 20.5875 15.2525 20.5875 14.9088C20.5875 14.565 20.3125 14.29 19.9687 14.29Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M0.99375 0.12793C0.44375 0.12793 0.03125 0.574804 0.03125 1.09043C0.03125 1.60605 0.44375 2.05293 0.99375 2.05293C1.54375 2.05293 1.95625 1.64043 1.95625 1.09043C1.95625 0.540429 1.50938 0.12793 0.99375 0.12793Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M0.99375 7.03711C0.44375 7.03711 0.03125 7.48398 0.03125 7.99961C0.03125 8.51523 0.44375 8.96211 0.99375 8.96211C1.54375 8.96211 1.95625 8.54961 1.95625 7.99961C1.95625 7.48398 1.50938 7.03711 0.99375 7.03711Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M0.99375 13.9463C0.478125 13.9463 0.03125 14.3588 0.03125 14.9088C0.03125 15.4588 0.44375 15.8713 0.99375 15.8713C1.54375 15.8713 1.95625 15.4588 1.95625 14.9088C1.95625 14.3588 1.50938 13.9463 0.99375 13.9463Z"
                  fill="currentColor"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
