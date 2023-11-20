import React from 'react'

export default function Categories() {
    return (
        <section className="bg-[#fafafa] pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-[40px]">
                                Shop By Category
                            </h2>
                            <p className="text-base text-slate-800">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <a href="#" className="group mb-10 block text-center">
                            <div className="mb-5 overflow-hidden rounded-lg">
                                <img src="/img/image-011.jpg" alt="category" className="w-full" />
                            </div>
                            <h3 className="mb-1 text-xl font-semibold text-black group-hover:text-blue-600 md:text-2xl lg:text-xl xl:text-2xl">
                                Accessories
                            </h3>
                            <p className="text-base font-medium text-slate-800">
                                8 Products Available
                            </p>
                        </a>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <a href="filters.html" className="group mb-10 block text-center">
                            <div className="mb-5 overflow-hidden rounded-lg">
                                <img src="/img/image-021.jpg" alt="category" className="w-full" />
                            </div>
                            <h3 className="mb-1 text-xl font-semibold text-black group-hover:text-blue-600 md:text-2xl lg:text-xl xl:text-2xl">
                                Bags
                            </h3>
                            <p className="text-base font-medium text-slate-800">
                                4 Products Available
                            </p>
                        </a>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <a href="filters.html" className="group mb-10 block text-center">
                            <div className="mb-5 overflow-hidden rounded-lg">
                                <img src="/img/image-031.jpg" alt="category" className="w-full" />
                            </div>
                            <h3 className="mb-1 text-xl font-semibold text-black group-hover:text-blue-600 md:text-2xl lg:text-xl xl:text-2xl">
                                Electronics
                            </h3>
                            <p className="text-base font-medium text-slate-800">
                                12 Products Available
                            </p>
                        </a>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                        <a href="filters.html" className="group mb-10 block text-center">
                            <div className="mb-5 overflow-hidden rounded-lg">
                                <img src="/img/image-041.jpg" alt="category" className="w-full" />
                            </div>
                            <h3 className="mb-1 text-xl font-semibold text-black group-hover:text-blue-600 md:text-2xl lg:text-xl xl:text-2xl">
                                Shoes
                            </h3>
                            <p className="text-base font-medium text-slate-800">
                                24 Products Available
                            </p>
                        </a>
                    </div>
                </div>
                <div className="mt-10 text-center">
                    <a href="filters.html" className="inline-flex items-center justify-center rounded-md bg-blue-600 py-3 px-8 text-center text-base font-semibold text-white hover:bg-opacity-90">
                        Explore All Category
                    </a>
                </div>
            </div>
        </section>
    )
}
