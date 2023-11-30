import React from 'react'
import Link from "next/link"

export default function ArticleCard({title , body , images , _id}) {
    return (
        <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <img
                src={ images[0] || "https://images.unsplash.com/photo-1626197031507-c17099753214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm h-56 btn-"
            />
            <p
                className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3  rounded-full uppercase "
            >
                Entertainment
            </p>
            <Link href={`/blog/${_id}`} className="text-lg font-bold sm:text-xl md:text-2xl">
               {title}
            </Link>
            <p className="text-sm text-black line-clamp-4">{body} <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam,
            </p>
            <div className="pt-2 pr-0 pb-0 pl-0">
                <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                    Jack Sparrow
                </a>
                <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
                    · 23rd, March 2021 ·
                </p>
                <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
                    1hr 20min. read
                </p>
            </div>
        </div>
    )
}
