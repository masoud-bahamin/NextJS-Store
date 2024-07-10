import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-[url(/img/bg-b.png)] relative bg-right md:bg-center lg:bg-right dark:bg-slate-900 overflow-hidden text-body -mt-32">
      <div className="container m-auto h-screen overflow-x-hidden">
        <div className="h-full flex flex-wrap lg:flex-nowrap items-center">
          <div className="w-full lg:w-5/12">
            <div className="hero-content">
              <h1 className="mb-5 text-3xl font-bold !leading-[1.208] text-body dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                Bring back the beauty and glow of your skin
              </h1>
              <p className="mb-8 max-w-[480px] text-base text-body dark:text-slate-300">
                We provide you various treatments from head to toe using the
                best product, advanced technology, and affordable price
              </p>
              <ul className="flex flex-wrap items-center">
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary-300 px-6 py-3 text-center text-base font-medium text-white hover:bg-slate-700 lg:px-7"
                  >
                    Shop Early
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary-300 dark:text-white"
                  >
                    <span className="mr-2">
                      <svg
                        width={24}
                        height={25}
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx={12} cy="12.6152" r={12} fill="#c9e4ca" />
                        <rect
                          x="7.99893"
                          y="14.979"
                          width="8.18182"
                          height="1.63636"
                          fill="white"
                        />
                        <rect
                          x="11.2717"
                          y="7.61523"
                          width="1.63636"
                          height="4.09091"
                          fill="white"
                        />
                        <path
                          d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    Download App
                  </a>
                </li>
              </ul>
              <div className="hidden md:block pt-16">
                <h6 className="mb-6 flex items-center text-xs font-normal text-body dark:text-slate-300">
                  Some Of Our Clients
                  <span className="ml-3 inline-block h-px w-8 bg-slate-600" />
                </h6>
                <div className="flex items-center gap-4 xl:gap-[50px]">
                  <a href="#" className="block py-3">
                    <img src="/img/oracle.svg" alt="oracle" />
                  </a>
                  <a href="#" className="block py-3">
                    <img src="/img/intel.svg" alt="intel" />
                  </a>
                  <a href="#" className="block py-3">
                    <img src="/img/logitech.svg" alt="logitech" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-20 justify-end w-7/12">
            <div className="hidden xl:block w-[355px] backdrop-blur-xs -mr-8 p-6 rounded bg-[rgba(256,256,256,.5)] z-10 text-sm font-medium text-dark">
              <svg
                width="24"
                height="16"
                viewBox="0 0 32 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-1"
              >
                <path
                  d="M10.1053 21H0L9.51084 0H15.9505L10.1053 21ZM26.1548 21H16.0495L25.5604 0H32L26.1548 21Z"
                  fill="#264065"
                />
              </svg>
              I have a regular schedule to take treatment from GlowQueen, they
              gave me the best service and treatment ever to maintain the beauty
              and health of my skin
              <p className="font-semibold mt-1">Sophia Princeton</p>
            </div>
            <div className="w-[355px] backdrop-blur-md -mb-[50vh] xl:-mb-[40vh] mr-48 p-6 rounded bg-[rgba(256,256,256,.5)] z-10 text-sm font-medium text-dark">
              <svg
                width="24"
                height="16"
                viewBox="0 0 32 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-1"
              >
                <path
                  d="M10.1053 21H0L9.51084 0H15.9505L10.1053 21ZM26.1548 21H16.0495L25.5604 0H32L26.1548 21Z"
                  fill="#264065"
                />
              </svg>
              For the past few years, I've had a hard time finding the right
              place for skin care to deal with my complicated skin condition,
              thank God I found GlowQueen to treat my skin
              <p className="font-semibold mt-1">Tamara Jules</p>
            </div>
          </div>
          <div className="w-[480px] md:w-[750px] xl:w-[800px] absolute bottom-0 -right-20 sm:-right-32 lg:right-32 xl:right-64">
            <Image
              width={1500}
              height={700}
              src="/img/bg-w.png"
              alt="hero"
              className="w-auto h-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
