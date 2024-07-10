import Axios from "@/servises/Axios";
import React, { useRef } from "react";
import Swal from "sweetalert2";

export default function Comments({ _id, comments }) {
  const inputRef = useRef();

  const sendComment = async (event) => {
    event.preventDefault();
    if (inputRef.current.value.trim().length > 4) {
      const { data } = await Axios.post("comments", {
        message: inputRef.current.value,
        productId: _id,
        username: "Loren Davis",
      });
      if (data?.resulte) {
        Swal.fire({
          icon: "success",
          text: "comment send",
        });
        inputRef.current.value = "";
      }
    }
  };

  return (
    <section className="bg-[#fafafa] pb-10 lg:pb-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="mb-10 overflow-hidden rounded-lg bg-white py-10 px-8 text-center shadow-card sm:px-14 lg:mb-0 lg:px-8 xl:px-14">
              <h3 className="mb-5 text-2xl font-semibold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                Customer reviews
              </h3>

              <div className="inline-flex items-center justify-center rounded-md border-[.5px] border-[#e7e7e7] bg-[#f4f7ff] py-3 px-5">
                <div className="mr-3 flex items-center">
                  <span className="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6563 7.46875L13 6.59375L10.4375 1.21875C10.25 0.84375 9.75001 0.84375 9.56251 1.21875L7.00001 6.625L1.37501 7.46875C0.968761 7.53125 0.812511 8.0625 1.12501 8.34375L5.21876 12.5625L4.25001 18.4688C4.18751 18.875 4.59376 19.2188 4.96876 18.9688L10.0625 16.1875L15.125 18.9688C15.4688 19.1562 15.9063 18.8438 15.8125 18.4688L14.8438 12.5625L18.9375 8.34375C19.1875 8.0625 19.0625 7.53125 18.6563 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6563 7.46875L13 6.59375L10.4375 1.21875C10.25 0.84375 9.75001 0.84375 9.56251 1.21875L7.00001 6.625L1.37501 7.46875C0.968761 7.53125 0.812511 8.0625 1.12501 8.34375L5.21876 12.5625L4.25001 18.4688C4.18751 18.875 4.59376 19.2188 4.96876 18.9688L10.0625 16.1875L15.125 18.9688C15.4688 19.1562 15.9063 18.8438 15.8125 18.4688L14.8438 12.5625L18.9375 8.34375C19.1875 8.0625 19.0625 7.53125 18.6563 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6563 7.46875L13 6.59375L10.4375 1.21875C10.25 0.84375 9.75001 0.84375 9.56251 1.21875L7.00001 6.625L1.37501 7.46875C0.968761 7.53125 0.812511 8.0625 1.12501 8.34375L5.21876 12.5625L4.25001 18.4688C4.18751 18.875 4.59376 19.2188 4.96876 18.9688L10.0625 16.1875L15.125 18.9688C15.4688 19.1562 15.9063 18.8438 15.8125 18.4688L14.8438 12.5625L18.9375 8.34375C19.1875 8.0625 19.0625 7.53125 18.6563 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6563 7.46875L13 6.59375L10.4375 1.21875C10.25 0.84375 9.75001 0.84375 9.56251 1.21875L7.00001 6.625L1.37501 7.46875C0.968761 7.53125 0.812511 8.0625 1.12501 8.34375L5.21876 12.5625L4.25001 18.4688C4.18751 18.875 4.59376 19.2188 4.96876 18.9688L10.0625 16.1875L15.125 18.9688C15.4688 19.1562 15.9063 18.8438 15.8125 18.4688L14.8438 12.5625L18.9375 8.34375C19.1875 8.0625 19.0625 7.53125 18.6563 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6563 7.46875L13 6.59375L10.4375 1.21875C10.25 0.84375 9.75001 0.84375 9.56251 1.21875L7.00001 6.625L1.37501 7.46875C0.968761 7.53125 0.812511 8.0625 1.12501 8.34375L5.21876 12.5625L4.25001 18.4688C4.18751 18.875 4.59376 19.2188 4.96876 18.9688L10.0625 16.1875L15.125 18.9688C15.4688 19.1562 15.9063 18.8438 15.8125 18.4688L14.8438 12.5625L18.9375 8.34375C19.1875 8.0625 19.0625 7.53125 18.6563 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                </div>
                <span className="text-base font-medium text-black">
                  4.7 out of 5
                </span>
              </div>

              <p className="pt-3 pb-10 text-base font-medium text-slate-700">
                40 customer ratings
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="whitespace-nowrap text-base font-medium text-black">
                    5 star
                  </span>
                  <div className="relative mx-3 h-[14px] w-full rounded-full bg-[#F4F7FF]">
                    <div className="absolute left-0 top-0 h-full w-[84%] rounded-full bg-[#FFA645]"></div>
                  </div>
                  <span className="whitespace-nowrap text-base font-medium text-black">
                    84%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="whitespace-nowrap text-base font-medium text-black">
                    4 star
                  </span>
                  <div className="relative mx-3 h-[14px] w-full rounded-full bg-[#F4F7FF]">
                    <div className="absolute left-0 top-0 h-full w-[50%] rounded-full bg-[#FFA645]"></div>
                  </div>
                  <span className="whitespace-nowrap text-base font-medium text-black">
                    9%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="whitespace-nowrap text-base font-medium text-black">
                    3 star
                  </span>
                  <div className="relative mx-3 h-[14px] w-full rounded-full bg-[#F4F7FF]">
                    <div className="absolute left-0 top-0 h-full w-[40%] rounded-full bg-[#FFA645]"></div>
                  </div>
                  <span className="whitespace-nowrap text-base font-medium text-black">
                    4%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="whitespace-nowrap text-base font-medium text-black">
                    2 star
                  </span>
                  <div className="relative mx-3 h-[14px] w-full rounded-full bg-[#F4F7FF]">
                    <div className="absolute left-0 top-0 h-full w-[20%] rounded-full bg-[#FFA645]"></div>
                  </div>
                  <span className="whitespace-nowrap text-base font-medium text-black">
                    2%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="whitespace-nowrap text-base font-medium text-black">
                    1 star
                  </span>
                  <div className="relative mx-3 h-[14px] w-full rounded-full bg-[#F4F7FF]">
                    <div className="absolute left-0 top-0 h-full w-[10%] rounded-full bg-[#FFA645]"></div>
                  </div>
                  <span className="whitespace-nowrap text-base font-medium text-black">
                    1%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-7/12">
            {comments?.slice(0, 3).map((comment) => (
              <div
                key={comment._id}
                className="mb-9 overflow-hidden rounded-lg bg-white shadow-card"
              >
                <div className="py-8 px-6 sm:py-10 md:px-8 xl:px-10">
                  <h4 className="mb-4 text-lg font-bold text-black sm:text-xl">
                    {comment.message}
                  </h4>
                  <p className="text-base font-medium text-slate-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas ac risus a risus elementum vehicula. Class aptent
                    taciti sociosqu ad litora torquent consectetur adipiscing
                    elit. Maecenas ac risus a risus elementum
                  </p>
                </div>

                <div className="items-center justify-between border-t border-[#e7e7e7] px-6 pt-4 md:flex md:px-8 xl:px-10">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 h-10 w-10 overflow-hidden rounded-full">
                      <img
                        src="/img/image-01.png"
                        alt="author"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex items-center">
                      <h3 className="pr-2 text-lg font-medium text-black">
                        Jhon Smith
                      </h3>
                      <p className="text-sm font-semibold text-slate-700">
                        12, Dec 2024
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-center space-x-4">
                    <button className="flex items-center text-slate-700 hover:text-primary-300">
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.6563 7.46875L13 6.59375L10.4375 1.21875C10.25 0.84375 9.75001 0.84375 9.56251 1.21875L7.00001 6.625L1.37501 7.46875C0.968761 7.53125 0.812511 8.0625 1.12501 8.34375L5.21876 12.5625L4.25001 18.4688C4.18751 18.875 4.59376 19.2188 4.96876 18.9688L10.0625 16.1875L15.125 18.9688C15.4688 19.1562 15.9063 18.8438 15.8125 18.4688L14.8438 12.5625L18.9375 8.34375C19.1875 8.0625 19.0625 7.53125 18.6563 7.46875Z"
                            fill="#FFA645"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-base font-medium"> 4 of 5 </span>
                    </button>
                    <button className="flex items-center text-slate-700 hover:text-primary-300">
                      <span className="mr-1">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          className="fill-current"
                        >
                          <path d="M16.6782 6.44102C16.1719 6.01914 15.5532 5.76602 14.9063 5.76602H11.8407V3.71289C11.8407 2.47539 11.4469 1.57539 10.7157 1.01289C10.2375 0.675391 9.67503 0.478516 9.00003 0.478516C8.38128 0.478516 7.90315 0.647266 7.90315 0.647266C7.53753 0.759766 7.25628 1.09727 7.25628 1.49102V4.35977C7.25628 5.73789 6.01878 6.46914 5.34378 6.77852V6.75039C5.34378 6.46914 5.11878 6.24414 4.83753 6.24414H1.68752C0.956275 6.24414 0.337524 6.83477 0.337524 7.59414V16.2004C0.337524 16.9316 0.92815 17.5504 1.68752 17.5504H4.83753C5.09065 17.5504 5.31565 17.3254 5.31565 17.0723C5.68128 17.241 6.07503 17.3535 6.4969 17.3535H13.5C15.3 17.3535 16.4813 16.3691 16.7063 14.7098L17.6063 9.08477C17.775 8.07227 17.4094 7.05977 16.6782 6.44102ZM4.3594 16.5379H1.68752C1.49065 16.5379 1.3219 16.3691 1.3219 16.1723V7.59414C1.3219 7.39727 1.49065 7.22852 1.68752 7.22852H4.3594V16.5379ZM16.65 8.88789L15.75 14.541C15.5813 15.6941 14.7938 16.3129 13.5 16.3129H6.4969C6.07503 16.3129 5.65315 16.1441 5.31565 15.8629V7.81914C5.96253 7.59414 8.21253 6.60977 8.21253 4.35977V1.57539C8.32503 1.54727 8.60628 1.49102 8.94378 1.49102C9.39378 1.49102 9.78753 1.60352 10.0969 1.82852C10.575 2.19414 10.8282 2.84102 10.8282 3.74102V6.30039C10.8282 6.58164 11.0532 6.80664 11.3344 6.80664H14.8782C15.3 6.80664 15.6938 6.94727 16.0313 7.22852C16.5094 7.59414 16.7344 8.24102 16.65 8.88789Z"></path>
                        </svg>
                      </span>
                      <span className="text-base font-medium"> 25 </span>
                    </button>
                    <button className="text-base font-medium text-slate-700 hover:text-primary-300">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="mb-9 overflow-hidden rounded-lg bg-white shadow-card">
              <div className="py-8 px-6 sm:py-10 md:px-8 xl:px-10">
                <h4 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Write a Review
                </h4>
                <p className="mb-2 text-base font-medium text-black">
                  Click on star to review
                </p>
                <div className="mb-8 flex items-center">
                  <span className="mr-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6563 7.46875L13 6.59375L10.4375 1.21875C10.25 0.84375 9.75001 0.84375 9.56251 1.21875L7.00001 6.625L1.37501 7.46875C0.968761 7.53125 0.812511 8.0625 1.12501 8.34375L5.21876 12.5625L4.25001 18.4688C4.18751 18.875 4.59376 19.2188 4.96876 18.9688L10.0625 16.1875L15.125 18.9688C15.4688 19.1562 15.9063 18.8438 15.8125 18.4688L14.8438 12.5625L18.9375 8.34375C19.1875 8.0625 19.0625 7.53125 18.6563 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6563 7.46875L13 6.59375L10.4375 1.21875C10.25 0.84375 9.75001 0.84375 9.56251 1.21875L7.00001 6.625L1.37501 7.46875C0.968761 7.53125 0.812511 8.0625 1.12501 8.34375L5.21876 12.5625L4.25001 18.4688C4.18751 18.875 4.59376 19.2188 4.96876 18.9688L10.0625 16.1875L15.125 18.9688C15.4688 19.1562 15.9063 18.8438 15.8125 18.4688L14.8438 12.5625L18.9375 8.34375C19.1875 8.0625 19.0625 7.53125 18.6563 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6563 7.46875L13 6.59375L10.4375 1.21875C10.25 0.84375 9.75001 0.84375 9.56251 1.21875L7.00001 6.625L1.37501 7.46875C0.968761 7.53125 0.812511 8.0625 1.12501 8.34375L5.21876 12.5625L4.25001 18.4688C4.18751 18.875 4.59376 19.2188 4.96876 18.9688L10.0625 16.1875L15.125 18.9688C15.4688 19.1562 15.9063 18.8438 15.8125 18.4688L14.8438 12.5625L18.9375 8.34375C19.1875 8.0625 19.0625 7.53125 18.6563 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6563 7.46875L13 6.59375L10.4375 1.21875C10.25 0.84375 9.75001 0.84375 9.56251 1.21875L7.00001 6.625L1.37501 7.46875C0.968761 7.53125 0.812511 8.0625 1.12501 8.34375L5.21876 12.5625L4.25001 18.4688C4.18751 18.875 4.59376 19.2188 4.96876 18.9688L10.0625 16.1875L15.125 18.9688C15.4688 19.1562 15.9063 18.8438 15.8125 18.4688L14.8438 12.5625L18.9375 8.34375C19.1875 8.0625 19.0625 7.53125 18.6563 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-1">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6563 7.46875L13 6.59375L10.4375 1.21875C10.25 0.84375 9.75001 0.84375 9.56251 1.21875L7.00001 6.625L1.37501 7.46875C0.968761 7.53125 0.812511 8.0625 1.12501 8.34375L5.21876 12.5625L4.25001 18.4688C4.18751 18.875 4.59376 19.2188 4.96876 18.9688L10.0625 16.1875L15.125 18.9688C15.4688 19.1562 15.9063 18.8438 15.8125 18.4688L14.8438 12.5625L18.9375 8.34375C19.1875 8.0625 19.0625 7.53125 18.6563 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                </div>

                <form onSubmit={sendComment}>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3">
                      <div className="mb-6">
                        <textarea
                          ref={inputRef}
                          rows="6"
                          placeholder="Write your Review"
                          className="w-full rounded-lg border border-[#e7e7e7] bg-[#f4f7ff] py-3 px-6 font-medium text-slate-700 placeholder-slate-700 outline-none transition focus:border-primary-300 active:border-primary-300 disabled:cursor-default disabled:bg-[#F5F7FD]"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <div>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center rounded-md bg-primary-300 py-3 px-8 text-center text-base font-semibold text-white hover:bg-opacity-90"
                        >
                          Submit Review
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
