import ProductCard from '@/components/modules/Card/ProductCard'
import React, { useState } from 'react'

export default function ProductsDisplay({ products }) {

    const [viewBox, setViewBox] = useState("xl:w-1/3")
    const [productsCategory, setProductsCategory] = useState([])
    const [productsShow, setProductsShow] = useState(products)

    const selectHandler = (e) => {
        const { value } = e.target
        if (value === "-1") {
            return
        }
        else if (value === "expensive") {
            const newArrey = [...productsShow].sort((a, b) => (b.price - a.price))
            setProductsShow(newArrey)
        }
        else if (value === "cheep") {
            const newArrey = [...productsShow].sort((a, b) => (a.price - b.price))
            setProductsShow(newArrey)
        }
        else if (value === "old") {
            setProductsShow([...productsShow].reverse())
        }
        else {
            setProductsShow(productsShow)
        }
    }


    const CategoryHandler = (value) => {

        if (productsCategory.includes(value)) {
            setProductsCategory(prev => prev.filter(item => item !== value))

            if (productsCategory.length > 1) {
                const newArrey = productsShow.filter(item => item.category !== value)
                setProductsShow(newArrey)
            } else {
                setProductsShow(products)
            }

        } else {
            setProductsCategory([...productsCategory, value])
            if (productsCategory.length === 0) {
                setProductsShow(() => products.filter(item => item.category === value))
            } else {
                const newArrey = products.filter(item => item.category === value)
                setProductsShow([...productsShow, ...newArrey])
            }

        }
    }


    return (
        <>
            <section className="bg-[#fafafa] pt-24 pb-[90px]">
                <div className="container mx-auto">
                    <div className="mb-10 rounded-lg border border-[#e7e7e7] bg-white p-5">
                        <div className="-mx-4 flex flex-wrap items-center justify-between">
                            <div className="w-full px-4 sm:w-1/2">
                                <div className="mb-4 inline-block sm:mb-0">
                                    <div className="relative">
                                        <select onChange={selectHandler}
                                            className="w-full appearance-none rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-slate-800 outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-[#F5F7FD]">
                                            <option value="-1">Best Selling</option>
                                            <option value="new">Newest Products</option>
                                            <option value="old">Oldest Products</option>
                                            <option value="expensive">More Expensive Products</option>
                                            <option value="cheep">More Cheep Products</option>
                                        </select>
                                        <span className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color">
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 sm:w-1/2">
                                <div className="flex items-center space-x-4 sm:justify-end">
                                    <div className="relative" onClick={() => setViewBox("xl:w-1/3")}>
                                        <input type="radio" name="view" id="gridView" className="sr-only" />
                                        <label htmlFor="gridView" 
                                        className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded border ${viewBox === "xl:w-1/3" ? " border-blue-600 bg-blue-600 text-white" : "border-[#e7e7e7] bg-white text-black"} hover:border-blue-600 hover:bg-blue-600 hover:text-white`}>
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.77148 9.00645H2.40586C1.30586 9.00645 0.412109 8.1127 0.412109 7.0127V2.64707C0.412109 1.54707 1.30586 0.65332 2.40586 0.65332H6.77148C7.87148 0.65332 8.76523 1.54707 8.76523 2.64707V7.0127C8.76523 8.1127 7.87148 9.00645 6.77148 9.00645ZM2.40586 1.85645C1.99336 1.85645 1.61523 2.2002 1.61523 2.64707V7.0127C1.61523 7.4252 1.95898 7.80332 2.40586 7.80332H6.77148C7.18398 7.80332 7.56211 7.45957 7.56211 7.0127V2.64707C7.56211 2.23457 7.21836 1.85645 6.77148 1.85645H2.40586Z" fill="currentColor"></path>
                                                <path d="M19.5938 9.00645H15.2281C14.1281 9.00645 13.2344 8.1127 13.2344 7.0127V2.64707C13.2344 1.54707 14.1281 0.65332 15.2281 0.65332H19.5938C20.6938 0.65332 21.5875 1.54707 21.5875 2.64707V7.0127C21.5875 8.1127 20.6938 9.00645 19.5938 9.00645ZM15.2281 1.85645C14.8156 1.85645 14.4375 2.2002 14.4375 2.64707V7.0127C14.4375 7.4252 14.7812 7.80332 15.2281 7.80332H19.5938C20.0063 7.80332 20.3844 7.45957 20.3844 7.0127V2.64707C20.3844 2.23457 20.0406 1.85645 19.5938 1.85645H15.2281Z" fill="currentColor"></path>
                                                <path d="M6.77148 21.3473H2.40586C1.30586 21.3473 0.412109 20.4535 0.412109 19.3535V14.9879C0.412109 13.8879 1.30586 12.9941 2.40586 12.9941H6.77148C7.87148 12.9941 8.76523 13.8879 8.76523 14.9879V19.3535C8.76523 20.4535 7.87148 21.3473 6.77148 21.3473ZM2.40586 14.1973C1.99336 14.1973 1.61523 14.541 1.61523 14.9879V19.3535C1.61523 19.766 1.95898 20.1441 2.40586 20.1441H6.77148C7.18398 20.1441 7.56211 19.8004 7.56211 19.3535V14.9879C7.56211 14.5754 7.21836 14.1973 6.77148 14.1973H2.40586Z" fill="currentColor"></path>
                                                <path d="M19.5938 21.3473H15.2281C14.1281 21.3473 13.2344 20.4535 13.2344 19.3535V14.9879C13.2344 13.8879 14.1281 12.9941 15.2281 12.9941H19.5938C20.6938 12.9941 21.5875 13.8879 21.5875 14.9879V19.3535C21.5875 20.4535 20.6938 21.3473 19.5938 21.3473ZM15.2281 14.1973C14.8156 14.1973 14.4375 14.541 14.4375 14.9879V19.3535C14.4375 19.766 14.7812 20.1441 15.2281 20.1441H19.5938C20.0063 20.1441 20.3844 19.8004 20.3844 19.3535V14.9879C20.3844 14.5754 20.0406 14.1973 19.5938 14.1973H15.2281Z" fill="currentColor"></path>
                                            </svg>
                                        </label>
                                    </div>
                                    <div className="relative" onClick={() => setViewBox("xl:w-full")}>
                                        <input type="radio" name="view" id="listView" className="sr-only" />
                                        <label htmlFor="listView" 
                                        className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded border ${viewBox === "xl:w-full" ? " border-blue-600 bg-blue-600 text-white" : "border-[#e7e7e7] bg-white text-black"} hover:border-blue-600 hover:bg-blue-600 hover:text-white`}>
                                            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.43125 1.70898H19.9687C20.3125 1.70898 20.5875 1.43398 20.5875 1.09023C20.5875 0.746484 20.3125 0.505859 19.9687 0.505859H4.43125C4.0875 0.505859 3.8125 0.780859 3.8125 1.12461C3.8125 1.46836 4.12187 1.70898 4.43125 1.70898Z" fill="currentColor"></path>
                                                <path d="M19.9687 7.41504H4.43125C4.0875 7.41504 3.8125 7.69004 3.8125 8.03379C3.8125 8.37754 4.0875 8.65254 4.43125 8.65254H19.9687C20.3125 8.65254 20.5875 8.37754 20.5875 8.03379C20.5875 7.69004 20.3125 7.41504 19.9687 7.41504Z" fill="currentColor"></path>
                                                <path d="M19.9687 14.29H4.43125C4.0875 14.29 3.8125 14.565 3.8125 14.9088C3.8125 15.2525 4.0875 15.5275 4.43125 15.5275H19.9687C20.3125 15.5275 20.5875 15.2525 20.5875 14.9088C20.5875 14.565 20.3125 14.29 19.9687 14.29Z" fill="currentColor"></path>
                                                <path d="M0.99375 0.12793C0.44375 0.12793 0.03125 0.574804 0.03125 1.09043C0.03125 1.60605 0.44375 2.05293 0.99375 2.05293C1.54375 2.05293 1.95625 1.64043 1.95625 1.09043C1.95625 0.540429 1.50938 0.12793 0.99375 0.12793Z" fill="currentColor"></path>
                                                <path d="M0.99375 7.03711C0.44375 7.03711 0.03125 7.48398 0.03125 7.99961C0.03125 8.51523 0.44375 8.96211 0.99375 8.96211C1.54375 8.96211 1.95625 8.54961 1.95625 7.99961C1.95625 7.48398 1.50938 7.03711 0.99375 7.03711Z" fill="currentColor"></path>
                                                <path d="M0.99375 13.9463C0.478125 13.9463 0.03125 14.3588 0.03125 14.9088C0.03125 15.4588 0.44375 15.8713 0.99375 15.8713C1.54375 15.8713 1.95625 15.4588 1.95625 14.9088C1.95625 14.3588 1.50938 13.9463 0.99375 13.9463Z" fill="currentColor"></path>
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-4/12 xl:w-3/12">
                            <div className="mb-8 rounded-lg border border-[#e7e7e7] bg-white">
                                <div className="border-b border-[#e7e7e7] py-4 px-8 lg:px-6 xl:px-8">
                                    <h3 className="text-base font-semibold text-black sm:text-lg lg:text-base xl:text-lg">
                                        Product Type
                                    </h3>
                                </div>
                                <div className="space-y-4 py-9 px-8 lg:px-6 xl:px-8">
                                    <div>
                                        <label htmlFor="checkboxLabelOne" className="flex cursor-pointer select-none items-center text-black">
                                            <div className="relative" onClick={() => CategoryHandler("smartphones")}>
                                                <input type="checkbox" id="checkboxLabelOne" className="mr-4 flex h-5 w-5 items-center justify-center rounded" />
                                                {/* <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border">
                                                    <span className="opacity-1">
                                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z" fill="#3056D3" stroke="#3056D3" strokeWidth="0.4"></path>
                                                        </svg>
                                                    </span>
                                                </div> */}
                                            </div>
                                            Smart phones
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="checkboxLabelTwo" className="flex cursor-pointer select-none items-center text-black">
                                            <div className="relative" onClick={() => CategoryHandler("skincare")}>
                                                <input type="checkbox" id="checkboxLabelTwo" className="mr-4 flex h-5 w-5 items-center justify-center rounded" />
                                                {/* <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border">
                                                    <span className="opacity-0">
                                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z" fill="#3056D3" stroke="#3056D3" strokeWidth="0.4"></path>
                                                        </svg>
                                                    </span>
                                                </div> */}
                                            </div>
                                            Skincare
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="checkboxLabelThree" className="flex cursor-pointer select-none items-center text-black">
                                            <div className="relative" onClick={() => CategoryHandler("home-decoration")}>
                                                <input type="checkbox" id="checkboxLabelThree" className="mr-4 flex h-5 w-5 items-center justify-center rounded" />
                                                {/* <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border">
                                                    <span className="opacity-0">
                                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z" fill="#3056D3" stroke="#3056D3" strokeWidth="0.4"></path>
                                                        </svg>
                                                    </span>
                                                </div> */}
                                            </div>
                                            Home Decoration
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="checkboxLabel4" className="flex cursor-pointer select-none items-center text-black">
                                            <div className="relative" onClick={() => CategoryHandler("laptops")}>
                                                <input type="checkbox" id="checkboxLabel4" className="mr-4 flex h-5 w-5 items-center justify-center rounded" />
                                                {/* <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border">
                                                    <span className="opacity-0">
                                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z" fill="#3056D3" stroke="#3056D3" strokeWidth="0.4"></path>
                                                        </svg>
                                                    </span>
                                                </div> */}
                                            </div>
                                            Laptops
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8 rounded-lg border border-[#e7e7e7] bg-white">
                                <div className="border-b border-[#e7e7e7] py-4 px-8 lg:px-6 xl:px-8">
                                    <h3 className="text-base font-semibold text-black sm:text-lg lg:text-base xl:text-lg">
                                        Choose Color
                                    </h3>
                                </div>
                                <div className="space-y-4 py-9 px-8 lg:px-6 xl:px-8">
                                    <div>
                                        <label htmlFor="black" className="flex cursor-pointer select-none items-center text-black">
                                            <div className="relative">
                                                <input type="radio" name="color" id="black" className="sr-only" />
                                                <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded bg-black text-white">
                                                    <span className="opacity-0">
                                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z" fill="currentColor" stroke="currentColor" strokeWidth="0.4"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            Black
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="red" className="flex cursor-pointer select-none items-center text-black">
                                            <div className="relative">
                                                <input type="radio" name="color" id="red" className="sr-only" />
                                                <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded bg-red-600 text-white">
                                                    <span className="opacity-0">
                                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z" fill="currentColor" stroke="currentColor" strokeWidth="0.4"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            Red
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="blue" className="flex cursor-pointer select-none items-center text-black">
                                            <div className="relative">
                                                <input type="radio" name="color" id="blue" className="sr-only" />
                                                <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded bg-blue-600 text-white">
                                                    <span className="opacity-0">
                                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z" fill="currentColor" stroke="currentColor" strokeWidth="0.4"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            Blue
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="green" className="flex cursor-pointer select-none items-center text-black">
                                            <div className="relative">
                                                <input type="radio" name="color" id="green" className="sr-only" />
                                                <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded bg-secondary text-white">
                                                    <span className="opacity-0">
                                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z" fill="currentColor" stroke="currentColor" strokeWidth="0.4"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            Green
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8 rounded-lg border border-[#e7e7e7] bg-white">
                                <div className="border-b border-[#e7e7e7] py-4 px-8 lg:px-6 xl:px-8">
                                    <h3 className="text-base font-semibold text-black sm:text-lg lg:text-base xl:text-lg">
                                        Select Size
                                    </h3>
                                </div>
                                <div className="space-y-4 py-9 px-8 lg:px-6 xl:px-8">
                                    <div>
                                        <label htmlFor="sizeM" className="flex cursor-pointer select-none items-center text-black">
                                            <div className="relative">
                                                <input type="radio" name="size" id="sizeM" className="sr-only" />
                                                <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border">
                                                    <span className="opacity-0">
                                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z" fill="#3056D3" stroke="#3056D3" strokeWidth="0.4"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            M
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="sizeL" className="flex cursor-pointer select-none items-center text-black">
                                            <div className="relative">
                                                <input type="radio" name="size" id="sizeL" className="sr-only" />
                                                <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border">
                                                    <span className="opacity-0">
                                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z" fill="#3056D3" stroke="#3056D3" strokeWidth="0.4"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            L
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="sizeXL" className="flex cursor-pointer select-none items-center text-black">
                                            <div className="relative">
                                                <input type="radio" name="size" id="sizeXL" className="sr-only" />
                                                <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border">
                                                    <span className="opacity-0">
                                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z" fill="#3056D3" stroke="#3056D3" strokeWidth="0.4"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            XL
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="sizeXXL" className="flex cursor-pointer select-none items-center text-black">
                                            <div className="relative">
                                                <input type="radio" name="size" id="sizeXXL" className="sr-only" />
                                                <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border">
                                                    <span className="opacity-0">
                                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z" fill="#3056D3" stroke="#3056D3" strokeWidth="0.4"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            XXL
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-8/12 xl:w-9/12">
                            <div className="-mx-4 flex flex-wrap">
                                {productsShow?.map(product => (
                                    <ProductCard viewBox={viewBox} key={product?._id} {...product} />
                                ))}
                                {/* pagination */}
                                <div className="w-full px-4 text-center">
                                    <div className="mt-3 inline-flex rounded bg-white p-3 shadow-md">
                                        <ul className="-mx-[6px] flex items-center">
                                            <li className="px-[6px]">
                                                <a href="#" className="flex h-6 w-6 items-center justify-center rounded text-base text-[#838995] hover:bg-[#EDEFF1]">
                                                    <span>
                                                        <svg width="5" height="11" viewBox="0 0 5 11" className="fill-current stroke-current">
                                                            <path d="M4.52568 1.43992L4.5258 1.44002L4.52992 1.43464C4.65176 1.27546 4.65302 1.03052 4.50933 0.869615C4.44245 0.794712 4.33573 0.744738 4.23717 0.744738C4.11463 0.744738 4.02352 0.804085 3.95164 0.884572L3.95158 0.88452L3.94847 0.888236L0.582878 4.91136C0.582815 4.91144 0.582752 4.91151 0.58269 4.91159C0.307468 5.23816 0.310823 5.76652 0.580355 6.10386L0.58032 6.10389L0.582669 6.10668L3.94865 10.1153L3.9486 10.1154L3.95164 10.1188C4.09202 10.276 4.34412 10.3187 4.50933 10.1337C4.64406 9.98285 4.67538 9.73307 4.52438 9.56186L1.16317 5.55892C1.13433 5.51727 1.14509 5.46502 1.15671 5.452L1.15676 5.45205L1.1597 5.44855L4.52568 1.43992Z" strokeWidth="0.3"></path>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="px-[6px]">
                                                <a href="#" className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 text-base text-white">
                                                    1
                                                </a>
                                            </li>
                                            <li className="px-[6px]">
                                                <a href="#" className="flex h-6 w-6 items-center justify-center rounded text-base text-[#838995] hover:bg-[#EDEFF1]">
                                                    2
                                                </a>
                                            </li>
                                            <li className="px-[6px]">
                                                <a href="#" className="flex h-6 w-6 items-center justify-center rounded text-base text-[#838995] hover:bg-[#EDEFF1]">
                                                    3
                                                </a>
                                            </li>
                                            <li className="px-[6px]">
                                                <a href="#" className="flex h-6 w-6 items-center justify-center rounded text-base text-[#838995] hover:bg-[#EDEFF1]">
                                                    4
                                                </a>
                                            </li>
                                            <li className="px-[6px]">
                                                <a href="#" className="flex h-6 w-6 items-center justify-center rounded text-base text-[#838995]">
                                                    ...
                                                </a>
                                            </li>
                                            <li className="px-[6px]">
                                                <a href="#" className="flex h-6 w-6 items-center justify-center rounded text-base text-[#838995] hover:bg-[#EDEFF1]">
                                                    10
                                                </a>
                                            </li>
                                            <li className="px-[6px]">
                                                <a href="#" className="flex h-6 w-6 items-center justify-center rounded text-base text-[#838995] hover:bg-[#EDEFF1]">
                                                    <span>
                                                        <svg width="5" height="11" viewBox="0 0 5 11" className="fill-current stroke-current">
                                                            <path d="M0.474318 9.56008L0.474201 9.55998L0.47008 9.56536C0.348244 9.72454 0.346976 9.96948 0.490666 10.1304C0.557553 10.2053 0.664273 10.2553 0.762833 10.2553C0.885369 10.2553 0.976484 10.1959 1.04836 10.1154L1.04842 10.1155L1.05153 10.1118L4.41712 6.08864C4.41718 6.08856 4.41725 6.08849 4.41731 6.08841C4.69253 5.76184 4.68918 5.23348 4.41965 4.89614L4.41968 4.89611L4.41733 4.89332L1.05135 0.884685L1.0514 0.88464L1.04836 0.881232C0.907984 0.724036 0.65588 0.681265 0.490667 0.866274C0.355939 1.01715 0.324615 1.26693 0.475624 1.43814L3.83683 5.44108C3.86567 5.48274 3.85491 5.53498 3.84329 5.548L3.84324 5.54795L3.8403 5.55145L0.474318 9.56008Z" strokeWidth="0.3"></path>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}
