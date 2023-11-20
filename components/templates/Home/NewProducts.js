import React from 'react'

export default function NewProducts() {
    return (
        <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="mb-24">
            <div className="-mx-4 flex flex-wrap items-center justify-center">
              <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
                <div className="mb-12 max-w-[465px] lg:mb-0">
                  <span className="mb-4 block text-lg font-bold text-blue-600 xs:text-xl md:text-2xl">
                    Start From $50
                  </span>
                  <h2 className="mb-6 text-2xl font-semibold !leading-tight text-black xs:text-[28px] sm:text-4xl lg:text-[32px] xl:text-4xl">
                    New Arrival From Creative Clock Collections
                  </h2>
                  <p className="mb-10 text-base font-medium text-slate-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    sit amet molestie nunc. Vestibulum tempus justo et venenatis
                    tempus. Nulla tincidunt,
                  </p>
                  <a href="filters.html" className="inline-flex items-center justify-center rounded-md bg-blue-600 py-3 px-8 text-center text-base font-semibold text-white hover:bg-opacity-90">
                    View All Items
                  </a>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
                <div>
                  <img src="/img/product-01.jpg" alt="Recent Product" className="w-full rounded-md" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <div className="-mx-4 flex flex-wrap items-center justify-center">
              <div className="order-last w-full px-4 lg:order-first lg:w-1/2 2xl:w-5/12">
                <div>
                  <img src="/img/product-02.jpg" alt="Recent Product" className="w-full rounded-md" />
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
                <div className="mb-12 max-w-[465px] lg:ml-auto lg:mb-0">
                  <span className="mb-4 block text-lg font-bold text-blue-600 xs:text-xl md:text-2xl">
                    Start From $49
                  </span>
                  <h2 className="mb-6 text-2xl font-semibold !leading-tight text-black xs:text-[28px] sm:text-4xl lg:text-[32px] xl:text-4xl">
                    New Summer Collections For Man's Fashion.
                  </h2>
                  <p className="mb-10 text-base font-medium text-slate-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    sit amet molestie nunc. Vestibulum tempus justo et venenatis
                    tempus. Nulla tincidunt,
                  </p>
                  <a href="filters.html" className="inline-flex items-center justify-center rounded-md bg-blue-600 py-3 px-8 text-center text-base font-semibold text-white hover:bg-opacity-90">
                    View All Items
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
