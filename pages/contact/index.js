import React from 'react'

export default function index() {
    return (
        <div>

            <section className="bg-[#fafafa] pt-10">
                <div className="container mx-auto">
                    <div className="rounded-lg border border-light bg-white py-4 px-4 shadow-card sm:px-6 md:px-8 md:py-5">
                        <ul className="flex items-center">
                            <li className="flex items-center">
                                <a href="index.html" className="text-base font-semibold text-black hover:text-primary">
                                    Home
                                </a>
                                <span className="px-3 text-body-color">
                                    <svg width="7" height="12" viewBox="0 0 7 12" className="fill-current">
                                        <path d="M0.879233 11.4351C0.808625 11.4351 0.720364 11.3998 0.667408 11.3469C0.543844 11.2233 0.543844 11.0291 0.649756 10.9056L5.09807 6.17483C5.18633 6.08657 5.18633 5.92771 5.09807 5.82179L0.649756 1.09105C0.526192 0.967487 0.543844 0.773315 0.667408 0.649751C0.790972 0.526187 0.985145 0.543839 1.10871 0.667403L5.55702 5.39815C5.85711 5.73353 5.85711 6.26309 5.55702 6.58083L1.10871 11.3292C1.0381 11.3998 0.967493 11.4351 0.879233 11.4351Z"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.229332 10.5281L4.48868 5.99831L0.24288 1.48294C-0.133119 1.09849 -0.0312785 0.549591 0.267983 0.25033C0.652758 -0.134445 1.2069 -0.0332381 1.50812 0.267982L1.52041 0.280272L5.9781 5.02138C6.46442 5.56491 6.47872 6.42661 5.96853 6.96778V6.96778L1.50834 11.7289C1.36051 11.8767 1.15353 12 0.879227 12C0.660517 12 0.428074 11.9064 0.267983 11.7463C-0.0719543 11.4064 -0.0699959 10.8773 0.220873 10.538L0.229332 10.5281ZM5.55702 6.58083C5.85711 6.26309 5.85711 5.73353 5.55702 5.39815L1.10871 0.667403C0.985145 0.543839 0.790972 0.526187 0.667408 0.649751C0.543844 0.773315 0.526192 0.967487 0.649756 1.09105L5.09807 5.82179C5.18633 5.92771 5.18633 6.08657 5.09807 6.17483L0.649756 10.9056C0.543844 11.0291 0.543844 11.2233 0.667408 11.3469C0.720364 11.3998 0.808625 11.4351 0.879233 11.4351C0.967493 11.4351 1.0381 11.3998 1.10871 11.3292L5.55702 6.58083Z"></path>
                                    </svg>
                                </span>
                            </li>

                            <li className="text-base font-semibold text-primary">Support</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="relative z-10 overflow-hidden bg-[#fafafa] pt-24 pb-[120px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[770px] text-center">
                                <h2 className="mb-3 text-center text-3xl font-bold leading-tight text-black md:text-4xl md:leading-tight xl:text-[45px] xl:leading-tight">
                                    Need Help? Open a Ticket
                                </h2>
                                <p className="text-base font-medium leading-relaxed text-body-color md:text-lg md:leading-relaxed">
                                    Submit Your Support Ticket, We will be with you as soon as we are
                                    able.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 flex">
                        <div className="w-full px-4">
                            <div className="relative mx-auto w-full max-w-[770px] border border-form-stroke bg-white py-10 px-6 shadow-card sm:py-[60px] sm:px-[65px] md:p-10 lg:py-[60px] lg:px-[65px]">
                                <form>
                                    <div className="-mx-4 flex flex-wrap">
                                        <div className="w-full px-4 md:w-1/2">
                                            <div className="mb-7">
                                                <label
                                                    htmlFor="firstName"
                                                    className="mb-3 block text-base font-medium text-dark"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    id="firstName"
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="Enter your first name"
                                                    className="w-full border border-form-stroke bg-white py-4 px-6 placeholder-[#9699A6] shadow-input outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full px-4 md:w-1/2">
                                            <div className="mb-7">
                                                <label
                                                    htmlFor="lastName"
                                                    className="mb-3 block text-base font-medium text-dark"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    id="lastName"
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Enter your last Name"
                                                    className="w-full border border-form-stroke bg-white py-4 px-6 placeholder-[#9699A6] shadow-input outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full px-4 md:w-1/2">
                                            <div className="mb-7">
                                                <label
                                                    htmlFor="email"
                                                    className="mb-3 block text-base font-medium text-dark"
                                                >
                                                    Business Email
                                                </label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    placeholder="Enter your Email"
                                                    className="w-full border border-form-stroke bg-white py-4 px-6 placeholder-[#9699A6] shadow-input outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full px-4 md:w-1/2">
                                            <div className="mb-7">
                                                <label
                                                    htmlFor="number"
                                                    className="mb-3 block text-base font-medium text-dark"
                                                >
                                                    Phone number
                                                </label>
                                                <input
                                                    id="number"
                                                    type="text"
                                                    name="number"
                                                    placeholder="Enter your number"
                                                    className="w-full border border-form-stroke bg-white py-4 px-6 placeholder-[#9699A6] shadow-input outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full px-4">
                                            <div className="mb-7">
                                                <label
                                                    htmlFor="message"
                                                    className="mb-3 block text-base font-medium text-dark"
                                                >
                                                    What are you looking for?
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    placeholder="Type your message here"
                                                    rows={6}
                                                    className="w-full resize-none border border-form-stroke bg-white py-4 px-6 placeholder-[#9699A6] shadow-input outline-none focus:border-primary"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full px-4">
                                            <div className="text-center">
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center border-2 border-transparent bg-primary py-3 px-10 text-base font-semibold text-white hover:bg-opacity-90"
                                                >
                                                    Submit Ticket
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div>
                                    <span className="absolute -top-5 -right-5 -z-10">
                                        <svg
                                            width={57}
                                            height={121}
                                            viewBox="0 0 57 121"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="23.0992" cy="1.62854" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3649" cy="1.62854" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="1.62854" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="12.3864" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3649" cy="12.3864" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="12.3864" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="23.1422" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3649" cy="23.1422" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="23.1422" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="33.9005" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3649" cy="33.9005" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="33.9005" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="44.6515" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3649" cy="44.6515" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="44.6515" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="55.4049" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3649" cy="55.4049" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="55.4049" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="66.1559" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="76.6744" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="87.193" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="97.7111" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="108.227" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="118.746" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3629" cy="66.1559" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3629" cy="76.6744" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3629" cy="87.193" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3629" cy="97.7111" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3629" cy="108.227" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3629" cy="118.746" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="66.1559" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="76.6744" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="87.193" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="97.7111" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="108.227" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="118.746" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="1.62854" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="12.3864" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="23.1422" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="33.9005" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="44.6515" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="55.4049" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="66.1559" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="76.6744" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="87.193" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="97.7111" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="108.227" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="118.746" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="1.62854" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="12.3864" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="23.1422" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="33.9005" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="44.6515" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="55.4049" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="66.1559" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="76.6744" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="87.193" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="97.7111" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="108.227" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="118.746" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="1.62854" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="12.3864" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="23.1422" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="33.9005" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="44.6515" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="55.4049" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="66.1559" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="76.6744" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="87.193" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="97.7111" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="108.227" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="118.746" r="1.62854" fill="#3056D3" />
                                        </svg>
                                    </span>
                                    <span className="absolute -bottom-5 -left-5 -z-10">
                                        <svg
                                            width={57}
                                            height={121}
                                            viewBox="0 0 57 121"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="23.0992" cy="1.62854" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3649" cy="1.62854" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="1.62854" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="12.3864" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3649" cy="12.3864" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="12.3864" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="23.1422" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3649" cy="23.1422" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="23.1422" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="33.9005" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3649" cy="33.9005" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="33.9005" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="44.6515" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3649" cy="44.6515" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="44.6515" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="55.4049" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3649" cy="55.4049" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="55.4049" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="66.1559" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="76.6744" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="87.193" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="97.7111" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="108.227" r="1.62854" fill="#3056D3" />
                                            <circle cx="23.0992" cy="118.746" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3629" cy="66.1559" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3629" cy="76.6744" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3629" cy="87.193" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3629" cy="97.7111" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3629" cy="108.227" r="1.62854" fill="#3056D3" />
                                            <circle cx="12.3629" cy="118.746" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="66.1559" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="76.6744" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="87.193" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="97.7111" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="108.227" r="1.62854" fill="#3056D3" />
                                            <circle cx="1.62854" cy="118.746" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="1.62854" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="12.3864" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="23.1422" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="33.9005" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="44.6515" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="55.4049" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="66.1559" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="76.6744" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="87.193" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="97.7111" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="108.227" r="1.62854" fill="#3056D3" />
                                            <circle cx="33.8571" cy="118.746" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="1.62854" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="12.3864" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="23.1422" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="33.9005" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="44.6515" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="55.4049" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="66.1559" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="76.6744" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="87.193" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="97.7111" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="108.227" r="1.62854" fill="#3056D3" />
                                            <circle cx="44.6149" cy="118.746" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="1.62854" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="12.3864" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="23.1422" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="33.9005" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="44.6515" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="55.4049" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="66.1559" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="76.6744" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="87.193" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="97.7111" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="108.227" r="1.62854" fill="#3056D3" />
                                            <circle cx="55.3707" cy="118.746" r="1.62854" fill="#3056D3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
