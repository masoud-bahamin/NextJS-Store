import ProductCard from '@/components/modules/Card/ProductCard';
import React from 'react'

export default function MayLike({ likesProducts }) {

    return (
        <section className="pt-20 pb-8">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-[40px]">
                                You may also like
                            </h2>
                            <span className="mx-auto mb-4 block h-1 w-24 bg-blue-600"></span>
                            <p className="text-base text-slate-800">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="relative flex justify-center">
                        <div className="relative w-full pb-14">
                            <div className="flex-no-wrap snap mx-auto flex h-auto w-full max-w-[300px] overflow-hidden transition-all xs:max-w-[400px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]" x-ref="carousel">
                                {likesProducts.map(product => (
                                    <ProductCard {...product} key={product.id}/>
                                ))}
                            </div>
                            <div className="absolute left-0 right-0 bottom-0 flex items-center justify-center space-x-3">
                                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-body-color bg-white text-slate-800 hover:border-blue-600 hover:bg-blue-600 hover:text-white" >
                                    <svg width="15" height="13" viewBox="0 0 15 13" className="fill-current">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.24264 11.8033L0.46967 7.03037C0.176777 6.73748 0.176777 6.2626 0.46967 5.96971L5.24264 1.19674C5.53553 0.903845 6.01041 0.903845 6.3033 1.19674C6.59619 1.48963 6.59619 1.96451 6.3033 2.2574L2.81066 5.75004H14C14.4142 5.75004 14.75 6.08583 14.75 6.50004C14.75 6.91425 14.4142 7.25004 14 7.25004H2.81066L6.3033 10.7427C6.59619 11.0356 6.59619 11.5104 6.3033 11.8033C6.01041 12.0962 5.53553 12.0962 5.24264 11.8033Z"></path>
                                    </svg>
                                </button>
                                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-body-color bg-white text-slate-800 hover:border-blue-600 hover:bg-blue-600 hover:text-white" >
                                    <svg width="15" height="13" viewBox="0 0 15 13" className="fill-current">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.75736 11.8033L14.5303 7.03037C14.8232 6.73748 14.8232 6.2626 14.5303 5.96971L9.75736 1.19674C9.46447 0.903845 8.98959 0.903845 8.6967 1.19674C8.40381 1.48963 8.40381 1.96451 8.6967 2.2574L12.1893 5.75004H1C0.585786 5.75004 0.25 6.08583 0.25 6.50004C0.25 6.91425 0.585786 7.25004 1 7.25004H12.1893L8.6967 10.7427C8.40381 11.0356 8.40381 11.5104 8.6967 11.8033C8.98959 12.0962 9.46447 12.0962 9.75736 11.8033Z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}
