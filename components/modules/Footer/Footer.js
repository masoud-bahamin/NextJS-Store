import React from "react";

export default function Footer() {
  return (
    <footer className=" text-body">
      <div className="bg-back border-y border-[#e7e7e7] pt-[60px] md:pt-0">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/3">
              <div className="mb-[60px] text-center md:mt-[60px]">
                <div className="mx-auto mb-7 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white shadow-card">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.0999 5.75H13.4499C12.1999 5.75 11.1499 6.8 11.1499 8.05V8.4H4.2999C3.8499 8.4 3.4499 8.65 3.2499 9.05L0.749902 14.1C0.649902 14.25 0.649902 14.45 0.649902 14.65V22.45C0.649902 22.95 1.0499 23.35 1.5499 23.35H2.9999C3.2499 25.15 4.7999 26.5 6.6499 26.5C8.4999 26.5 10.0499 25.1 10.2999 23.35H12.0499H20.9999C21.2499 25.15 22.7999 26.5 24.6499 26.5C26.4999 26.5 28.0499 25.1 28.2999 23.35H30.1499C30.8499 23.35 31.3999 22.8 31.3999 22.1V8C31.3999 6.75 30.3499 5.75 29.0999 5.75ZM4.6499 10.1H11.1999V13.6H2.8999L4.6499 10.1ZM6.5999 24.7C5.4999 24.7 4.6499 23.8 4.6499 22.75C4.6499 21.7 5.5499 20.8 6.5999 20.8C7.6499 20.8 8.5499 21.7 8.5499 22.75C8.5499 23.8 7.6999 24.7 6.5999 24.7ZM6.5999 19.05C4.9999 19.05 3.5999 20.1 3.0999 21.55H2.3999V15.4H11.1999V21.55H10.1499C9.5999 20.1 8.2499 19.05 6.5999 19.05ZM24.6499 24.7C23.5499 24.7 22.6999 23.8 22.6999 22.75C22.6999 21.7 23.5999 20.8 24.6499 20.8C25.6999 20.8 26.5999 21.7 26.5999 22.75C26.5999 23.8 25.6999 24.7 24.6499 24.7ZM29.6499 21.55H28.1499C27.6499 20.1 26.2499 19.05 24.6499 19.05C23.0499 19.05 21.6499 20.1 21.1499 21.55H12.8999V8C12.8999 7.7 13.1499 7.45 13.4499 7.45H29.0999C29.3999 7.45 29.6499 7.7 29.6499 8V21.55Z"
                      fill="#55828b"
                    ></path>
                  </svg>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black sm:text-2xl md:text-lg lg:text-xl xl:text-2xl">
                    Free delivery
                  </h3>
                  <p className="text-base font-medium text-body md:text-sm lg:text-base">
                    Lorem ipsum dolor sit amet, consect adipiscing eliteget
                    lorem.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3 md:border-x md:border-[#e7e7e7]">
              <div className="mb-[60px] text-center md:mt-[60px]">
                <div className="mx-auto mb-7 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white shadow-card">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.1999 10.7502H26.6999V7.95021C26.6999 6.75021 26.1499 5.70021 25.1999 5.00021C24.2499 4.30021 23.0499 4.15021 21.9499 4.55021L4.0499 10.7502C2.1499 10.8502 0.649902 12.4002 0.649902 14.3502V24.0502C0.649902 26.0502 2.2499 27.6502 4.2499 27.6502H27.1999C29.1999 27.6502 30.7999 26.0502 30.7999 24.0502V14.3502C30.7999 12.3502 29.1499 10.7502 27.1999 10.7502ZM22.4999 6.20021C23.0499 6.00021 23.6999 6.10021 24.1999 6.45021C24.6999 6.80021 24.9999 7.35021 24.9999 7.95021V10.7502H9.3999L22.4999 6.20021ZM27.1999 25.9002H4.2499C3.2499 25.9002 2.3999 25.0502 2.3999 24.0502V14.3502C2.3999 13.3502 3.2499 12.5002 4.2499 12.5002H27.1999C28.1999 12.5002 29.0499 13.3502 29.0499 14.3502V15.7002H23.1999C21.2499 15.7002 19.6499 17.3002 19.6499 19.2502C19.6499 21.2002 21.2499 22.8002 23.1999 22.8002H29.0499V24.0002C29.0499 25.0502 28.1999 25.9002 27.1999 25.9002ZM29.0499 17.4502V21.1002H23.1999C22.1999 21.1002 21.3999 20.3002 21.3999 19.3002C21.3999 18.3002 22.1999 17.5002 23.1999 17.5002H29.0499V17.4502Z"
                      fill="#55828b"
                    ></path>
                  </svg>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black sm:text-2xl md:text-lg lg:text-xl xl:text-2xl">
                    Online Payment
                  </h3>
                  <p className="text-base font-medium text-body md:text-sm lg:text-base">
                    Lorem ipsum dolor sit amet, consect adipiscing eliteget
                    lorem.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3">
              <div className="mb-[60px] text-center md:mt-[60px]">
                <div className="mx-auto mb-7 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white shadow-card">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.7001 14.2492C3.8501 14.2492 4.0001 14.2492 4.1001 14.1992L9.6501 12.2492C10.1001 12.0992 10.3501 11.5992 10.2001 11.1492C10.0501 10.6992 9.5501 10.4492 9.1001 10.5992L5.7501 11.7992C7.4001 7.24922 11.7501 4.14922 16.8001 4.14922C22.1501 4.14922 26.8501 7.69922 28.1501 12.8492C28.2501 13.2992 28.7501 13.5992 29.2001 13.4992C29.6501 13.3992 29.9501 12.8992 29.8501 12.4492C28.3501 6.54922 22.9501 2.44922 16.8001 2.44922C10.8001 2.44922 5.6001 6.29922 3.9001 11.8992L2.3501 7.54922C2.2001 7.09922 1.7001 6.84922 1.2501 6.99922C0.800102 7.14922 0.550102 7.64922 0.700102 8.09922L2.6001 13.5492C2.7501 13.9492 3.2501 14.2492 3.7001 14.2492Z"
                      fill="#55828b"
                    ></path>
                    <path
                      d="M31.3001 24.9494L29.2501 19.5494C29.1501 19.2494 28.9001 18.9994 28.6001 18.8994C28.3001 18.7994 28.0001 18.7494 27.7001 18.8994L22.2001 20.9994C21.7501 21.1494 21.5001 21.6994 21.7001 22.1494C21.8501 22.5994 22.4001 22.8494 22.8501 22.6494L26.2501 21.3494C24.3501 25.2994 20.3001 27.8994 15.7001 27.8994C10.6501 27.8994 6.2001 24.7494 4.6501 20.0494C4.4501 19.5994 3.9501 19.3494 3.5001 19.4994C3.0501 19.6494 2.8001 20.1494 2.9501 20.5994C4.7501 25.9994 9.8501 29.6494 15.6501 29.6494C21.1501 29.6494 26.0501 26.3994 28.0501 21.4494L29.6501 25.5994C29.8001 25.9494 30.1001 26.1494 30.4501 26.1494C30.5501 26.1494 30.6501 26.1494 30.7501 26.0994C31.2501 25.8994 31.5001 25.3994 31.3001 24.9494Z"
                      fill="#55828b"
                    ></path>
                  </svg>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-semibold text-black sm:text-2xl md:text-lg lg:text-xl xl:text-2xl">
                    Easy Return.
                  </h3>
                  <p className="text-base font-medium text-body md:text-sm lg:text-base">
                    Lorem ipsum dolor sit amet, consect adipiscing eliteget
                    lorem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[70px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-5/12 xl:w-4/12">
              <div className="mb-16 max-w-[270px]">
                <a href="#" className="mb-8 inline-block">
                  <img src="/img/l10.png" alt="logo" className="max-w-full" />
                </a>

                <div className="space-y-4">
                  <p className="flex text-base font-medium text-body">
                    <span className="pr-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.1818 22H15.7987C14.8247 22 14.013 21.188 14.013 20.2136V16.6407C14.013 16.2834 13.7208 15.9911 13.3636 15.9911H10.6688C10.3117 15.9911 10.0195 16.2834 10.0195 16.6407V20.1811C10.0195 21.1555 9.20779 21.9675 8.23377 21.9675H3.78571C2.81169 21.9675 2 21.1555 2 20.1811V8.84531C2 8.3581 2.25974 7.90337 2.68182 7.64352L11.2532 2.21924C11.7078 1.92692 12.3247 1.92692 12.7792 2.21924L21.3506 7.64352C21.7727 7.90337 22 8.3581 22 8.84531V20.1486C22 21.188 21.1883 22 20.1818 22ZM10.6364 14.8542H13.3312C14.3052 14.8542 15.1169 15.6663 15.1169 16.6407V20.1811C15.1169 20.5384 15.4091 20.8307 15.7662 20.8307H20.1818C20.539 20.8307 20.8312 20.5384 20.8312 20.1811V8.87779C20.8312 8.78035 20.7662 8.68291 20.7013 8.61795L12.1623 3.19367C12.0649 3.1287 11.9351 3.1287 11.8701 3.19367L3.2987 8.61795C3.2013 8.68291 3.16883 8.78035 3.16883 8.87779V20.2136C3.16883 20.5708 3.46104 20.8632 3.81818 20.8632H8.23377C8.59091 20.8632 8.88312 20.5708 8.88312 20.2136V16.6407C8.85065 15.6663 9.66234 14.8542 10.6364 14.8542Z"
                          fill="#55828b"
                        ></path>
                      </svg>
                    </span>

                    <span>
                      {" "}
                      Shop 009A, Level 4, Block A, Demo Park, Ottawa{" "}
                    </span>
                  </p>
                  <p className="flex text-base font-medium text-body">
                    <span className="pr-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.2402 13.7615C21.1683 12.9346 20.4852 12.3594 19.6584 12.3594H4.34301C3.51613 12.3594 2.869 12.9706 2.76114 13.7615L2.00616 21.3113C1.97021 21.7427 2.11402 22.2101 2.40163 22.5337C2.68924 22.8572 3.12066 23.037 3.58803 23.037H20.4493C20.8807 23.037 21.3121 22.8572 21.6357 22.5337C21.9233 22.2101 22.0671 21.7787 22.0312 21.3113L21.2402 13.7615ZM20.665 21.7068C20.629 21.7427 20.5571 21.8146 20.4133 21.8146H3.58803C3.48017 21.8146 3.37232 21.7427 3.33637 21.7068C3.30042 21.6708 3.22851 21.5989 3.26446 21.4551L4.01945 13.8693C4.01945 13.6896 4.16325 13.5817 4.34301 13.5817H19.6943C19.8741 13.5817 19.9819 13.6896 20.0179 13.8693L20.7729 21.4551C20.7369 21.563 20.7009 21.6708 20.665 21.7068Z"
                          fill="#55828b"
                        ></path>
                        <path
                          d="M12.0007 15.166C10.5986 15.166 9.48413 16.2805 9.48413 17.6826C9.48413 19.0847 10.5986 20.1992 12.0007 20.1992C13.4028 20.1992 14.5173 19.0847 14.5173 17.6826C14.5173 16.2805 13.4028 15.166 12.0007 15.166ZM12.0007 18.9409C11.3177 18.9409 10.7424 18.3657 10.7424 17.6826C10.7424 16.9995 11.3177 16.4243 12.0007 16.4243C12.6838 16.4243 13.259 16.9995 13.259 17.6826C13.259 18.3657 12.6838 18.9409 12.0007 18.9409Z"
                          fill="#55828b"
                        ></path>
                        <path
                          d="M2.86896 7.54318C2.94086 9.12504 4.34297 9.77217 5.062 9.77217H7.57861C7.61456 9.77217 7.61456 9.77217 7.61456 9.77217C8.6931 9.70027 9.77165 8.98124 9.77165 7.54318V6.68034C10.958 6.68034 13.6904 6.68034 14.8768 6.68034V7.54318C14.8768 8.98124 15.9553 9.70027 17.0339 9.77217H17.0698H19.5505C20.2695 9.77217 21.6716 9.12504 21.7435 7.54318C21.7435 7.43532 21.7435 7.03985 21.7435 6.68034C21.7435 6.39273 21.7435 6.14107 21.7435 6.10511C21.7435 6.06916 21.7435 6.03321 21.7435 6.03321C21.6357 5.02657 21.2761 4.19968 20.665 3.55256L20.629 3.51661C19.7302 2.68972 18.6517 2.22235 17.8248 1.93474C15.416 1 12.3961 1 12.2523 1C10.1312 1.03595 8.76501 1.21571 6.71577 1.93474C5.92484 2.1864 4.84629 2.65377 3.9475 3.48065L3.91155 3.51661C3.30038 4.16373 2.94086 4.99062 2.83301 5.99726C2.83301 6.03321 2.83301 6.06916 2.83301 6.06916C2.83301 6.14107 2.83301 6.35678 2.83301 6.64439C2.86896 6.96795 2.86896 7.39937 2.86896 7.54318ZM4.81034 4.37944C5.52937 3.73232 6.42816 3.33685 7.18314 3.04924C9.05262 2.36616 10.275 2.22235 12.3242 2.1864C12.468 2.1864 15.2722 2.22235 17.4293 3.04924C18.1843 3.33685 19.0831 3.69636 19.8021 4.37944C20.1976 4.81086 20.4493 5.38608 20.5212 6.06916C20.5212 6.17702 20.5212 6.35678 20.5212 6.64439C20.5212 7.0039 20.5212 7.39937 20.5212 7.50722C20.4852 8.33411 19.6943 8.51387 19.5864 8.51387H17.1058C16.7462 8.47791 16.171 8.33411 16.171 7.54318V6.06916C16.171 5.78155 15.9913 5.56584 15.7396 5.45799C15.5239 5.38609 9.23238 5.38609 9.01667 5.45799C8.76501 5.52989 8.58525 5.78155 8.58525 6.06916V7.54318C8.58525 8.33411 8.01003 8.47791 7.65051 8.51387H5.16986C5.062 8.51387 4.27107 8.33411 4.23512 7.50722C4.23512 7.39937 4.23512 7.0039 4.23512 6.64439C4.23512 6.35678 4.23512 6.21297 4.23512 6.10511C4.16321 5.38609 4.41487 4.81086 4.81034 4.37944Z"
                          fill="#55828b"
                        ></path>
                      </svg>
                    </span>

                    <span> +1-613-555-0182 </span>
                  </p>
                  <p className="flex text-base font-medium text-body">
                    <span className="pr-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.0227 4H3.97727C2.88636 4 2 4.98345 2 6.19385V17.8061C2 19.0165 2.88636 20 3.97727 20H21.0227C22.1136 20 23 19.0165 23 17.8061V6.19385C23 4.98345 22.1136 4 21.0227 4ZM21.0227 5.32388C21.1932 5.32388 21.3295 5.3617 21.4659 5.47518L12.9773 11.1868C12.6705 11.3759 12.3295 11.3759 12.0227 11.1868L3.53409 5.47518C3.67045 5.39953 3.80682 5.32388 3.97727 5.32388H21.0227ZM21.0227 18.6383H3.97727C3.56818 18.6383 3.19318 18.26 3.19318 17.7683V6.79905L11.375 12.3215C11.7159 12.5485 12.0909 12.6619 12.4659 12.6619C12.8409 12.6619 13.2159 12.5485 13.5568 12.3215L21.7386 6.79905V17.7683C21.8068 18.26 21.4318 18.6383 21.0227 18.6383Z"
                          fill="#55828b"
                        ></path>
                      </svg>
                    </span>

                    <span> contact@yourmail.com </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
              <div className="mb-16">
                <h3 className="mb-9 text-2xl font-semibold text-black">
                  My Account
                </h3>

                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="inline-block text-base font-medium text-body hover:text-primary-300"
                    >
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block text-base font-medium text-body hover:text-primary-300"
                    >
                      My Order History
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block text-base font-medium text-body hover:text-primary-300"
                    >
                      Order Tracking
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block text-base font-medium text-body hover:text-primary-300"
                    >
                      Shopping Cart
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-16">
                <h3 className="mb-9 text-2xl font-semibold text-black">
                  Shop Departments
                </h3>

                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="inline-block text-base font-medium text-body hover:text-primary-300"
                    >
                      Computers &amp; Accessories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block text-base font-medium text-body hover:text-primary-300"
                    >
                      Smartphones &amp; Tablets
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block text-base font-medium text-body hover:text-primary-300"
                    >
                      TV, Video &amp; Audio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block text-base font-medium text-body hover:text-primary-300"
                    >
                      Cameras, Photo &amp; Video
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-6/12 xl:w-3/12">
              <div className="mb-16">
                <h3 className="mb-9 text-2xl font-semibold text-black">
                  Download App
                </h3>

                <div className="sm:flex md:block lg:flex xl:block">
                  <a
                    href="#"
                    className="mr-3 mb-3 flex w-full items-center justify-center rounded bg-primary-300 px-2 py-3 hover:bg-opacity-90"
                  >
                    <span className="block pr-3">
                      <svg
                        width="26"
                        height="30"
                        viewBox="0 0 26 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.76 15.854C21.7452 13.3949 22.8884 11.5416 25.1971 10.1751C23.9059 8.37227 21.9524 7.38072 19.3772 7.18962C16.939 7.00213 14.2714 8.57419 13.2947 8.57419C12.2624 8.57419 9.90189 7.25453 8.04456 7.25453C4.21149 7.31222 0.137939 10.2328 0.137939 16.1749C0.137939 17.9308 0.467228 19.7444 1.1258 21.6121C2.00637 24.0712 5.18086 30.0962 8.49224 29.9988C10.2238 29.9592 11.4484 28.8018 13.7017 28.8018C15.8883 28.8018 17.0204 29.9988 18.9518 29.9988C22.2927 29.952 25.1638 24.475 26 22.0088C21.5195 19.9499 21.76 15.9801 21.76 15.854ZM17.8714 4.85678C19.7472 2.68619 19.577 0.710309 19.5215 0C17.864 0.0937464 15.9475 1.09972 14.856 2.33645C13.6536 3.66332 12.9469 5.30388 13.0986 7.15357C14.8893 7.28698 16.5247 6.38917 17.8714 4.85678Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>

                    <span className="text-sm font-medium text-white">
                      Download from
                      <span className="block font-semibold">
                        {" "}
                        Apple App Store{" "}
                      </span>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="mr-3 mb-3 flex w-full items-center justify-center rounded bg-black px-2 py-3 hover:bg-opacity-90"
                  >
                    <span className="block pr-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.0726 9.87928L5.04416 0.38688C3.93691 -0.185937 2.66562 -0.104106 1.64038 0.509627C0.615142 1.16428 0 2.26899 0 3.49646V22.4813C0 23.7087 0.615142 24.8135 1.68139 25.4681C2.25552 25.8363 2.87066 26 3.52681 26C4.05994 26 4.59306 25.8773 5.08517 25.6318L24.0726 16.0984C25.2618 15.4847 26 14.2982 26 12.9889C26 11.6796 25.2618 10.4521 24.0726 9.87928ZM15.2555 7.05611L11.5647 11.8023L3.4858 1.40977C3.81388 1.40977 4.10095 1.4916 4.38801 1.61435L15.2555 7.05611ZM1.43533 22.4813V3.49646C1.43533 2.92364 1.68139 2.35083 2.13249 1.98259L10.6625 12.9889L2.09148 23.9951C1.64038 23.6269 1.43533 23.0541 1.43533 22.4813ZM4.38801 24.3225C4.10095 24.4861 3.77287 24.527 3.44479 24.527L11.5237 14.1345L15.2145 18.9216L4.38801 24.3225ZM23.4574 14.8301L16.5678 18.267L12.4669 12.9889L16.5678 7.71076L23.4574 11.1477C24.1546 11.5159 24.6057 12.2115 24.6057 12.9889C24.6057 13.7663 24.1546 14.4618 23.4574 14.8301Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>

                    <span className="text-sm font-medium text-white">
                      Get It On
                      <span className="block font-semibold">
                        {" "}
                        Google Play Store{" "}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e7e7e7] py-7">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="mb-5">
              <img
                src="/img/payment.svg"
                alt="payment"
                className="mx-auto max-w-full"
              />
            </div>
            <p className="text-base font-medium text-body">
              © 2024 TailGrids. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
