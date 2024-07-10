import Link from "next/link";
import React from "react";

export default function ProductCard({
  _id,
  title,
  price,
  thumbnail,
  viewBox,
  rating,
  description,
}) {
  return (
    <>
      <div className={`${viewBox} h-full w-full px-4 md:w-1/2 mb-6`}>
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg">
          <Link href={`/product/${_id}`}>
            <img
              src={thumbnail}
              alt="ui/ux review check"
              className="w-full h-60"
            />

            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
          </Link>
          <button
            className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-300 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </span>
          </button>
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-start justify-between h-12">
            <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-green-gray-900 antialiased">
              <Link href={`/product/${_id}`}>{title}</Link>
            </h5>
            <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-green-gray-900 antialiased">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              {rating}
            </p>
          </div>
          <p className=" text-sm font-light leading-relaxed text-gray-700  mb-5 line-clamp-3 overflow-hidden">
            {description}
          </p>
          <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-green-gray-900 antialiased">
            $ {price}
          </h5>
          <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
            <span
              data-tooltip-target="money"
              className="cursor-pointer rounded-full border border-primary-200/5 bg-primary-200/5 p-3 text-primary-200 transition-colors hover:border-primary-200/10 hover:bg-primary-200/10 hover:!opacity-100 group-hover:opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                <path
                  fillRule="evenodd"
                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                  clipRule="evenodd"
                />
                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
              </svg>
            </span>
            <span
              data-tooltip-target="wifi"
              className="cursor-pointer rounded-full border border-primary-200/5 bg-primary-200/5 p-3 text-primary-200 transition-colors hover:border-primary-200/10 hover:bg-primary-200/10 hover:!opacity-100 group-hover:opacity-70"
            >
              <svg
                aria-hidden="true"
                fill="currentColor"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M2.9668 10.002V15.002C2.9668 17.8304 2.9668 19.2446 3.84548 20.1233C4.72416 21.002 6.13837 21.002 8.9668 21.002H11.9668"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6.9668 17.002H10.9668"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M18.4668 13.502C20.3998 13.502 21.9668 15.0396 21.9668 16.9363C21.9668 19.0818 19.8511 20.1366 18.8418 21.7449C18.6267 22.0877 18.3224 22.0877 18.0918 21.7449C17.051 20.1977 14.9668 19.0371 14.9668 16.9363C14.9668 15.0396 16.5338 13.502 18.4668 13.502Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.4668 17.002H18.4758"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.1038 7.92324C9.82182 8.94288 8.79628 10.7018 6.84777 10.9567C5.12733 11.1817 3.82246 10.4299 3.48916 10.1155C3.12168 9.86056 2.28416 9.04485 2.07906 8.53503C1.87395 8.02521 2.11324 6.9206 2.28416 6.47026L2.96743 4.48946C3.13423 3.99194 3.5247 2.81521 3.92501 2.4172C4.32533 2.01918 5.13581 2.00187 5.4694 2.00187H12.4749C14.2781 2.02737 18.2209 1.98577 19.0003 2.00187C19.7797 2.01797 20.2481 2.67211 20.3848 2.95251C21.5477 5.77276 22 7.38793 22 8.07619C21.8482 8.8104 21.22 10.1948 19.0003 10.8037C16.6933 11.4366 15.3854 10.2057 14.9751 9.7331M9.15522 9.7331C9.47997 10.1325 10.4987 10.9363 11.9754 10.9567C13.4522 10.9771 14.7273 9.94553 15.1802 9.42721C15.3084 9.27426 15.5853 8.82053 15.8725 7.92324"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              data-tooltip-target="bedrooms"
              className="cursor-pointer rounded-full border border-primary-200/5 bg-primary-200/5 p-3 text-primary-200 transition-colors hover:border-primary-200/10 hover:bg-primary-200/10 hover:!opacity-100 group-hover:opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </span>

            <span
              data-tooltip-target="fire"
              className="cursor-pointer rounded-full border border-primary-200/5 bg-primary-200/5 p-3 text-primary-200 transition-colors hover:border-primary-200/10 hover:bg-primary-200/10 hover:!opacity-100 group-hover:opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span
              data-tooltip-target="more"
              className="cursor-pointer rounded-full border border-primary-200/5 bg-primary-200/5 p-3 text-primary-200 transition-colors hover:border-primary-200/10 hover:bg-primary-200/10 hover:!opacity-100 group-hover:opacity-70"
            >
              +20
            </span>
          </div>
        </div>
        <div className="p-6 pt-3">
          <button
            className="block w-full select-none rounded-lg bg-primary-200 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-primary-200/20 transition-all hover:shadow-lg hover:shadow-primary-200/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
