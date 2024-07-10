import React from "react";

export default function Collections() {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12">
            <div className="relative mb-8 h-[370px] md:h-[480px]">
              <img
                src="/img/image-01.jpg"
                alt="product"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute top-0 left-0 flex h-full w-full items-center px-8 md:px-12">
                <div className="max-w-[420px]">
                  <h3>
                    <a
                      href="filters.html"
                      className="mb-5 block text-2xl font-bold text-black hover:text-primary-300 sm:text-4xl"
                    >
                      Mega Sale Up To 50% Off For All
                    </a>
                  </h3>
                  <p className="mb-10 text-base font-medium text-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum ornare vestibulum mollis. Nam vitae augue purus.
                    Integer ac accumsan nunc.
                  </p>
                  <a
                    href="filters.html"
                    className="inline-flex items-center justify-center rounded bg-primary-300 py-[10px] px-8 text-center text-base font-semibold text-white hover:bg-opacity-90"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 lg:w-full">
                <div className="relative mb-8 h-[223px]">
                  <img
                    src="/img/image-02.jpg"
                    alt="product"
                    className="h-full w-full object-cover object-center"
                  />

                  <div className="absolute top-0 left-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                    <div className="max-w-[180px] text-right">
                      <h3>
                        <a
                          href="filters.html"
                          className="mb-3 block text-lg font-bold text-black hover:text-primary-300 xs:text-xl sm:text-2xl lg:text-xl xl:text-2xl"
                        >
                          Summer Travel Collection
                        </a>
                      </h3>
                      <a
                        href="filters.html"
                        className="text-base font-semibold text-black hover:text-primary-300"
                      >
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-full">
                <div className="relative mb-8 h-[223px]">
                  <img
                    src="/img/image-03.jpg"
                    alt="product"
                    className="h-full w-full object-cover object-center"
                  />

                  <div className="absolute top-0 left-0 flex h-full w-full items-end justify-end p-6 sm:p-9">
                    <div className="max-w-[180px] text-right">
                      <h3>
                        <a
                          href="filters.html"
                          className="mb-3 block text-lg font-bold text-black hover:text-primary-300 xs:text-xl sm:text-2xl lg:text-xl xl:text-2xl"
                        >
                          Get 30% Off On iPhone
                        </a>
                      </h3>
                      <a
                        href="filters.html"
                        className="text-base font-semibold text-black hover:text-primary-300"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
