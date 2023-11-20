import Link from 'next/link';
import React from 'react'

export default function index({ data }) {

    return (
        <div>
            <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark" >
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                                <span className="text-blue-600 mb-2 block text-lg font-semibold">
                                    Our Search
                                </span>
                                <h2
                                    className="text-slate-900 mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]"
                                >
                                    Search Products
                                </h2>
                                <p className="text-slate-700 text-base dark:text-slate-300">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="-mx-4 flex flex-wrap">
                        {!data.length ? (
                            <div class="p-4 my-10 text-lg text-gray-800 text-center mx-auto rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
                                <span class="font-medium ">alert!</span> Change a few things up and try submitting again.
                            </div>
                        ) : (<>
                            {data.map(product => (
                                <div key={product.id} className="w-full px-4 md:w-1/2 xl:w-1/3" >
                                    <div className="relative mb-12">
                                        <div className="overflow-hidden rounded-[10px]">
                                            <img
                                                src={product.thumbnail}
                                                alt="portfolio"
                                                className="w-full h-80"
                                            />
                                        </div>
                                        <div
                                            className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-slate-700 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark"
                                        >
                                            <span className="text-blue-600 mb-2 block text-sm font-medium">
                                                {product.brand}
                                            </span>
                                            <h3 className="text-slate-900 dark:text-white mb-5 text-xl font-bold">
                                                {product.title}
                                            </h3>
                                            <Link
                                                href={`/product/${product.id}`}
                                                className="text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:bg-blue-600 inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>)}

                    </div>
                </div>
            </section>

        </div>
    )
}

export async function getServerSideProps(context) {

    console.log("context wwww ", context.query);

    const response = await fetch(`https://dummyjson.com/products/search?q=${context.query.q}`)
    const data = await response.json()

    return {
        props: { data: data.products }
    }
}
