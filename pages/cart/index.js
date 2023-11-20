import React from 'react'

export default function index() {
    return (
        <div>

            <section className="bg-[#fafafa] pt-10">
                <div className="container mx-auto">
                    <div className="rounded-lg border border-light bg-white py-4 px-4 shadow-card sm:px-6 md:px-8 md:py-5">
                        <ul className="flex items-center">
                            <li className="flex items-center">
                                <a href="index.html" className="text-base font-semibold text-black hover:text-blue-600">
                                    Home
                                </a>
                                <span className="px-3 text-slate-800">
                                    <svg width="7" height="12" viewBox="0 0 7 12" className="fill-current">
                                        <path d="M0.879233 11.4351C0.808625 11.4351 0.720364 11.3998 0.667408 11.3469C0.543844 11.2233 0.543844 11.0291 0.649756 10.9056L5.09807 6.17483C5.18633 6.08657 5.18633 5.92771 5.09807 5.82179L0.649756 1.09105C0.526192 0.967487 0.543844 0.773315 0.667408 0.649751C0.790972 0.526187 0.985145 0.543839 1.10871 0.667403L5.55702 5.39815C5.85711 5.73353 5.85711 6.26309 5.55702 6.58083L1.10871 11.3292C1.0381 11.3998 0.967493 11.4351 0.879233 11.4351Z"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.229332 10.5281L4.48868 5.99831L0.24288 1.48294C-0.133119 1.09849 -0.0312785 0.549591 0.267983 0.25033C0.652758 -0.134445 1.2069 -0.0332381 1.50812 0.267982L1.52041 0.280272L5.9781 5.02138C6.46442 5.56491 6.47872 6.42661 5.96853 6.96778V6.96778L1.50834 11.7289C1.36051 11.8767 1.15353 12 0.879227 12C0.660517 12 0.428074 11.9064 0.267983 11.7463C-0.0719543 11.4064 -0.0699959 10.8773 0.220873 10.538L0.229332 10.5281ZM5.55702 6.58083C5.85711 6.26309 5.85711 5.73353 5.55702 5.39815L1.10871 0.667403C0.985145 0.543839 0.790972 0.526187 0.667408 0.649751C0.543844 0.773315 0.526192 0.967487 0.649756 1.09105L5.09807 5.82179C5.18633 5.92771 5.18633 6.08657 5.09807 6.17483L0.649756 10.9056C0.543844 11.0291 0.543844 11.2233 0.667408 11.3469C0.720364 11.3998 0.808625 11.4351 0.879233 11.4351C0.967493 11.4351 1.0381 11.3998 1.10871 11.3292L5.55702 6.58083Z"></path>
                                    </svg>
                                </span>
                            </li>

                            <li className="text-base font-semibold text-blue-600">Shopping Cart</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-[#fafafa] py-24">
                <div className="container mx-auto">
                    <h2 className="mb-12 flex items-center text-2xl font-semibold text-black sm:text-3xl md:text-4xl">
                        Shopping cart
                        <span className="pl-5 text-lg text-slate-800"> (04 Items) </span>
                    </h2>

                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 xl:w-8/12">
                            <div className="mb-10 max-w-full overflow-x-auto rounded-xl border border-[#e7e7e7] bg-white">
                                <table className="w-full table-auto">
                                    <thead>
                                        <tr className="bg-white text-left">
                                            <th className="min-w-[300px] py-4 px-4 text-base font-semibold text-slate-900 xl:pl-9">
                                                Product
                                            </th>
                                            <th className="min-w-[90px] py-4 px-4 text-base font-semibold text-dark">
                                                Price
                                            </th>
                                            <th className="min-w-[150px] py-4 px-4 text-base font-semibold text-dark">
                                                Quantity
                                            </th>

                                            <th className="min-w-[140px] py-4 px-4 text-center text-base font-semibold text-slate-900 xl:pr-9">
                                                Remove
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        <tr>
                                            <td className="border-t border-stroke p-4 xl:pl-11">
                                                <div className="flex items-center">
                                                    <img src="src/assets/ecom-images/shopping-carts/shopping-cart-03/image-04.jpg" alt="image" className="mr-4 h-[70px] w-[70px] rounded" />
                                                    <div>
                                                        <h5 className="text-lg font-semibold text-dark">
                                                            <a href="product-details.html" className="hover:text-blue-600">
                                                                Pest color shirt
                                                            </a>
                                                        </h5>
                                                        <p className="text-base font-medium text-slate-800">
                                                            Awesome black t-shirt
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-t border-stroke p-4">
                                                <p className="text-lg font-semibold text-black">$22.00</p>
                                            </td>
                                            <td className="border-t border-stroke p-4">
                                                <div className="inline-flex items-center border border-[#e7e7e7] text-base font-medium text-black">
                                                    <span className="cursor-pointer select-none border-r border-[#e7e7e7] py-[6px] px-4">
                                                        -
                                                    </span>
                                                    <span className="py-[6px] px-4" x-text="quantity">1</span>
                                                    <span className="cursor-pointer select-none border-l border-[#e7e7e7] py-[6px] px-4">
                                                        +
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="border-t border-stroke p-4 pr-11 text-center">
                                                <button className="text-red-600">
                                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.8438 2.6875H10.8125V1.5625C10.8125 0.90625 10.2812 0.375 9.625 0.375H6.375C5.71875 0.40625 5.1875 0.90625 5.1875 1.5625V2.6875H2.15625C1.5 2.6875 0.96875 3.21875 0.96875 3.875V6.15625C0.96875 6.46875 1.21875 6.71875 1.53125 6.71875H2V17.3125C2 18.5938 3.0625 19.6563 4.34375 19.6563H11.6875C12.9688 19.6563 14.0312 18.5938 14.0312 17.3125V6.65625H14.5C14.8125 6.65625 15.0625 6.40625 15.0625 6.09375V3.8125C15 3.1875 14.5 2.6875 13.8438 2.6875ZM6.28125 1.5625C6.28125 1.53125 6.3125 1.46875 6.375 1.46875H9.625C9.65625 1.46875 9.71875 1.5 9.71875 1.5625V2.6875H6.28125V1.5625ZM2.09375 3.84375C2.09375 3.8125 2.125 3.75 2.1875 3.75H5.78125H10.2812H13.875C13.9062 3.75 13.9688 3.78125 13.9688 3.84375V5.5625H2.09375V3.84375ZM12.9062 17.2813C12.9062 17.9688 12.3438 18.5313 11.6562 18.5313H4.34375C3.65625 18.5313 3.09375 17.9688 3.09375 17.2813V6.65625H12.9375V17.2813H12.9062Z" fill="currentColor"></path>
                                                        <path d="M8 15.0938C8.3125 15.0938 8.5625 14.8438 8.5625 14.5313V10.4375C8.5625 10.125 8.3125 9.875 8 9.875C7.6875 9.875 7.4375 10.125 7.4375 10.4375V14.5625C7.46875 14.875 7.6875 15.0938 8 15.0938Z" fill="currentColor"></path>
                                                        <path d="M10.625 15.0938C10.9375 15.0938 11.1875 14.8438 11.1875 14.5313V10.4375C11.1875 10.125 10.9375 9.875 10.625 9.875C10.3125 9.875 10.0625 10.125 10.0625 10.4375V14.5625C10.0938 14.875 10.3438 15.0938 10.625 15.0938Z" fill="currentColor"></path>
                                                        <path d="M5.375 15.0938C5.6875 15.0938 5.9375 14.8438 5.9375 14.5313V10.4375C5.9375 10.125 5.6875 9.875 5.375 9.875C5.0625 9.875 4.8125 10.125 4.8125 10.4375V14.5625C4.8125 14.875 5.0625 15.0938 5.375 15.0938Z" fill="currentColor"></path>
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-4/12">
                            <div className="mb-8 overflow-hidden rounded-xl border border-[#e7e7e7] bg-white py-6 px-6 xs:px-8">
                                <div className="mb-6">
                                    <h3 className="mb-2 text-lg font-semibold text-black sm:text-xl">
                                        Apply Coupon
                                    </h3>
                                    <p className="text-sm font-medium text-slate-800">
                                        Using A Promo Code?
                                    </p>
                                </div>

                                <form className="items-center xs:flex">
                                    <input type="text" placeholder="Coupon code" className="mb-3 flex h-10 w-full items-center rounded border border-form-stroke px-6 text-sm font-medium text-slate-800 outline-none transition focus:border-blue-600 active:border-blue-600 disabled:cursor-default disabled:bg-[#F5F7FD] xs:mr-4" />
                                    <button className="mb-3 h-10 rounded bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-opacity-90">
                                        Apply
                                    </button>
                                </form>
                            </div>

                            <div className="mb-8 overflow-hidden rounded-xl border border-[#e7e7e7] bg-white py-6 px-6 xs:px-8">
                                <div className="border-b border-[#e7e7e7] pb-5">
                                    <h3 className="text-lg font-semibold text-black sm:text-xl">
                                        Total
                                    </h3>
                                </div>
                                <div className="-mx-1 border-b border-[#e7e7e7] py-7">
                                    <div className="mb-3 flex items-center justify-between">
                                        <div className="px-1">
                                            <p className="text-base font-semibold text-black">Total</p>
                                        </div>
                                        <div className="px-1">
                                            <p className="text-base font-semibold text-black">$96.00</p>
                                        </div>
                                    </div>
                                    <div className="mb-3 flex items-center justify-between">
                                        <div className="px-1">
                                            <p className="text-base font-medium text-black">Delivery</p>
                                        </div>
                                        <div className="px-1">
                                            <p className="text-base font-semibold text-black">$14.00</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="px-1">
                                            <p className="text-base font-medium text-black">Discount</p>
                                        </div>
                                        <div className="px-1">
                                            <p className="text-base font-semibold text-black">-$0</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="-mx-1 flex items-center justify-between pt-5 pb-6">
                                    <div className="px-1">
                                        <p className="text-base font-medium text-black">Subtotal</p>
                                    </div>
                                    <div className="px-1">
                                        <p className="text-base font-semibold text-black">$110.00</p>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <a href="checkout.html" className="flex w-full items-center justify-center rounded-md bg-blue-600 py-[10px] px-10 text-center text-base font-normal text-white hover:bg-opacity-90">
                                        Checkout
                                    </a>
                                </div>
                                <p className="mb-4 text-base font-medium text-slate-800">
                                    We Accept:
                                </p>
                                <img src="src/assets/ecom-images/shopping-carts/shopping-cart-03/payment.svg" alt="payment" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}