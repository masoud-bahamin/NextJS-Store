
import useUserInfo from '@/hooks/useUserInfo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function Header() {

    const [searchValue, setSearchValue] = useState("")

    const router = useRouter()

    const searchHandler = event => {
        event.preventDefault()
        if (searchValue.trim()) {
            router.push(`/search?q=${searchValue}`)
        }
    }
    useEffect(() => {
        if (router.query.q) {
            setSearchValue(router.query.q)
        }


    }, [])

    const [userInfo] = useUserInfo()
    console.log(userInfo);

    return (
        <header className="w-full bg-white">
            {/* topbar */}
            <div className="hidden border-b border-[#e7e7e7] sm:block">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 md:w-2/3 lg:w-1/2">
                            <ul className="-mx-3 flex items-center">
                                <li>
                                    <a href="#" className="inline-block py-4 px-3 text-sm font-medium text-slate-700 hover:text-blue-600">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="inline-block py-4 px-3 text-sm font-medium text-slate-700 hover:text-blue-600">
                                        Order Tracking
                                    </a>
                                </li>
                                <li>
                                    <a href="support.html" className="inline-block py-4 px-3 text-sm font-medium text-slate-700 hover:text-blue-600">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="inline-block py-4 px-3 text-sm font-medium text-slate-700 hover:text-blue-600">
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full px-4 md:w-1/3 lg:w-1/2">
                            <div className="-mx-3 hidden items-center justify-end md:flex">
                                <div className="px-3">
                                    <div className="relative">
                                        <select className="w-full appearance-none rounded-lg bg-transparent py-3 pr-4 text-sm font-medium text-slate-700 outline-none transition">
                                            <option value="">English</option>
                                            <option value="">Urdu</option>
                                            <option value="">Hindi</option>
                                        </select>
                                        <span className="absolute right-0 top-1/2 mt-[-2px] h-2 w-2 -translate-y-1/2 rotate-45 border-r border-b border-body-color">
                                        </span>
                                    </div>
                                </div>
                                <div className="px-3">
                                    <div className="relative">
                                        <select className="w-full appearance-none rounded-lg bg-transparent py-3 pr-4 text-sm font-medium text-slate-700 outline-none transition">
                                            <option value="">USD</option>
                                            <option value="">INR</option>
                                            <option value="">ERU</option>
                                        </select>
                                        <span className="absolute right-0 top-1/2 mt-[-2px] h-2 w-2 -translate-y-1/2 rotate-45 border-r border-b border-body-color">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* navbar */}
            <div className="border-b border-[#e7e7e7]">
                <div className="container mx-auto">
                    <div className="relative -mx-4 flex items-center justify-center sm:justify-between">
                        <div className="w-60 max-w-full px-4 lg:w-48">
                            <a href="index.html" className="block w-full py-5 lg:py-3">
                                {/* <img src="/img/logo.svg" alt="logo" className="w-full" /> */}
                                BAHAMINO
                            </a>
                        </div>
                        <div className="flex w-full items-center justify-end px-4 lg:justify-between">
                            <div className="flex w-full items-center justify-between px-4">
                                <div className="w-full">
                                    <button className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-blue-600 focus:ring-2 lg:hidden">
                                        <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                                        <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                                        <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                                    </button>
                                    <nav className="absolute right-4 top-full w-full max-w-[250px] justify-center rounded-lg bg-white py-5 px-6 shadow lg:static lg:flex lg:w-full lg:max-w-full lg:justify-end lg:bg-transparent lg:py-0 lg:px-0 lg:shadow-none hidden">
                                        <ul className="blcok items-center lg:flex">
                                            <li>
                                                <Link href="/" className="flex justify-between py-2 text-base font-medium text-slate-900 hover:text-blue-600 lg:mx-5 lg:inline-flex lg:py-6 2xl:mx-6">
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop" className="flex justify-between py-2 text-base font-medium text-slate-900 hover:text-blue-600 lg:mx-5 lg:inline-flex lg:py-6 2xl:mx-6">
                                                    Shop
                                                </Link>
                                            </li>
                                            <li className="group relative lg:py-4">
                                                <Link href="#" className="flex items-center justify-between py-2 text-base font-medium text-slate-900 hover:text-blue-600 group-hover:text-blue-600 lg:mx-6 lg:inline-flex lg:py-2">
                                                    Products
                                                    <span className="pl-2">
                                                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.39683 5.40046C5.20176 5.40046 5.00669 5.33284 4.84413 5.1807L0.487528 0.920728C0.373737 0.802396 0.373737 0.616445 0.471272 0.498112C0.585064 0.37978 0.76388 0.37978 0.877671 0.481208L5.23427 4.74118C5.31555 4.8257 5.46185 4.8257 5.55939 4.74118L9.91599 0.481208C10.0298 0.362875 10.2086 0.37978 10.3224 0.498112C10.4362 0.616445 10.4199 0.802396 10.3061 0.920728L5.94953 5.16379C5.78697 5.31594 5.5919 5.40046 5.39683 5.40046Z" fill="currentColor"></path>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.56447 5.4667L0.199071 1.19812C-0.0611467 0.927515 -0.0588086 0.512326 0.16261 0.243696L0.172344 0.231887L0.182952 0.220855C0.450688 -0.0575644 0.874846 -0.0571462 1.14383 0.182609L1.15072 0.188754L5.39683 4.34069L9.63276 0.198704C9.93371 -0.108224 10.3725 -0.0268578 10.6107 0.220855C10.9 0.521698 10.829 0.954046 10.5944 1.19798L10.5854 1.20743L6.22292 5.4559C5.99907 5.66539 5.70971 5.80046 5.39683 5.80046C5.10561 5.80046 4.81129 5.69783 4.5708 5.47274L4.56447 5.4667ZM9.91599 0.481208L5.55939 4.74118C5.46185 4.8257 5.31555 4.8257 5.23427 4.74118L0.877671 0.481208C0.76388 0.37978 0.585064 0.37978 0.471272 0.498112C0.373737 0.616445 0.373737 0.802396 0.487528 0.920728L4.84413 5.1807C5.00669 5.33284 5.20176 5.40046 5.39683 5.40046C5.5919 5.40046 5.78697 5.31594 5.94953 5.16379L10.3061 0.920728C10.4199 0.802396 10.4362 0.616445 10.3224 0.498112C10.2086 0.37978 10.0298 0.362875 9.91599 0.481208Z" fill="currentColor"></path>
                                                        </svg>
                                                    </span>
                                                </Link>

                                                <div className="relative top-full left-0 z-10 rounded-lg bg-white px-2 transition-all group-hover:opacity-100 lg:invisible lg:absolute lg:top-[115%] lg:w-[600px] lg:border-[.5px] lg:border-[#e7e7e7] lg:py-8 lg:px-12 lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full xl:w-[700px] hidden lg:block">
                                                    <span className="absolute -top-[6px] left-8 -z-10 hidden h-3 w-3 rotate-45 rounded-sm border-[.5px] border-r-0 border-b-0 border-[#e7e7e7] bg-white lg:block xl:left-10"></span>
                                                    <div className="-mx-4 flex flex-wrap lg:justify-center">
                                                        <div className="w-full px-4 lg:w-1/3">
                                                            <div>
                                                                <h3 className="mb-3 text-base font-semibold text-black">
                                                                    New Arrivals
                                                                </h3>
                                                                <a href="filters.html" className="block rounded py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                                                                    Dresses
                                                                </a>
                                                                <a href="filters.html" className="block rounded py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                                                                    Jackets
                                                                </a>
                                                                <a href="filters.html" className="block rounded py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                                                                    Sweatshirts
                                                                </a>
                                                                <a href="filters.html" className="block rounded py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                                                                    Tops &amp; Tees
                                                                </a>
                                                                <a href="filters.html" className="block rounded py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                                                                    Party Dresses
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="w-full px-4 lg:w-1/3">
                                                            <div>
                                                                <h3 className="mb-3 text-base font-semibold text-black">
                                                                    New Arrivals
                                                                </h3>
                                                                <a href="filters.html" className="block rounded py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                                                                    Dresses
                                                                </a>
                                                                <a href="filters.html" className="block rounded py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                                                                    Jackets
                                                                </a>
                                                                <a href="filters.html" className="block rounded py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                                                                    Sweatshirts
                                                                </a>
                                                                <a href="filters.html" className="block rounded py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                                                                    Tops &amp; Tees
                                                                </a>
                                                                <a href="filters.html" className="block rounded py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                                                                    Party Dresses
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="w-full px-4 lg:w-1/3">
                                                            <div>
                                                                <h3 className="mb-3 text-base font-semibold text-black">
                                                                    New Arrivals
                                                                </h3>
                                                                <a href="filters.html" className="block rounded py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                                                                    Dresses
                                                                </a>
                                                                <a href="filters.html" className="block rounded py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                                                                    Jackets
                                                                </a>
                                                                <a href="filters.html" className="block rounded py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                                                                    Sweatshirts
                                                                </a>
                                                                <a href="filters.html" className="block rounded py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                                                                    Tops &amp; Tees
                                                                </a>
                                                                <a href="filters.html" className="block rounded py-2 text-sm font-medium text-slate-700 hover:text-blue-600">
                                                                    Party Dresses
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <Link href="/about" className="flex justify-between py-2 text-base font-medium text-slate-900 hover:text-blue-600 lg:mx-5 lg:inline-flex lg:py-6 2xl:mx-6">
                                                    About
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog" className="flex justify-between py-2 text-base font-medium text-slate-900 hover:text-blue-600 lg:mx-5 lg:inline-flex lg:py-6 2xl:mx-6">
                                                    Blog
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact" className="flex justify-between py-2 text-base font-medium text-slate-900 hover:text-blue-600 lg:mx-5 lg:hidden lg:py-6 xl:inline-flex 2xl:mx-6">
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="hidden w-full items-center justify-end space-x-4 pr-[70px] sm:flex lg:pr-0">
                                <div className="hidden items-center pr-1 xl:flex">
                                    <form onSubmit={searchHandler}>
                                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                            </div>
                                            <input value={searchValue} onChange={e => setSearchValue(e.target.value)}
                                                type="search" id="default-search"
                                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                                            {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    {userInfo ? (
                                        <Link href="/acount" className="relative flex h-10 w-10 items-center justify-center rounded-full border-[.5px] border-[#e7e7e7] bg-[#f4f7ff] text-slate-900">
                                            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.9998 12.5125C13.8186 12.5125 16.1217 10.2094 16.1217 7.39062C16.1217 4.57188 13.8186 2.23438 10.9998 2.23438C8.18105 2.23438 5.87793 4.5375 5.87793 7.35625C5.87793 10.175 8.18105 12.5125 10.9998 12.5125ZM10.9998 3.4375C13.1654 3.4375 14.9186 5.19062 14.9186 7.35625C14.9186 9.52187 13.1654 11.275 10.9998 11.275C8.83418 11.275 7.08105 9.52187 7.08105 7.35625C7.08105 5.225 8.83418 3.4375 10.9998 3.4375Z" fill="#212B36"></path>
                                                <path d="M21.3467 18.7002C18.4936 16.2596 14.8155 14.9189 10.9999 14.9189C7.18425 14.9189 3.50613 16.2596 0.653003 18.7002C0.378004 18.9064 0.343629 19.2846 0.584254 19.5596C0.790503 19.8002 1.16863 19.8346 1.44363 19.6283C4.0905 17.3939 7.49363 16.1564 11.0343 16.1564C14.5749 16.1564 17.978 17.3939 20.6249 19.6283C20.728 19.7314 20.8655 19.7658 21.003 19.7658C21.1749 19.7658 21.3467 19.6971 21.4499 19.5596C21.6561 19.2846 21.6217 18.9064 21.3467 18.7002Z" fill="#212B36"></path>
                                            </svg>
                                           <p className='text-xs'>{userInfo.email?.slice(0,5)}</p> 
                                        </Link>
                                    ) : (
                                        <Link href="/signup" className="relative flex h-10 w-10 items-center justify-center rounded-full border-[.5px] border-[#e7e7e7] bg-[#f4f7ff] text-slate-900">
                                            Sign Up
                                        </Link>
                                    )}

                                </div>
                                <div className="relative z-20 group">
                                    <div className="flex max-w-[200px] justify-end">
                                        <button className="relative flex h-10 w-10 items-center justify-center rounded-full border-[.5px] border-[#e7e7e7] bg-[#f4f7ff] text-slate-900">
                                            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.0002 23.0002C12.5716 23.0002 12.1073 22.8539 11.7859 22.5249C10.9645 21.7936 10.1431 21.0989 9.42877 20.4773C7.32162 18.6492 5.5002 17.077 4.21448 15.5048C2.71448 13.6766 2.0002 11.9216 2.0002 9.98374C2.0002 8.08246 2.64305 6.32744 3.82162 5.04773C5.0002 3.73146 6.64305 3.0002 8.42877 3.0002C9.7502 3.0002 11.0002 3.43895 12.0716 4.2799C12.3931 4.53584 12.7145 4.82835 13.0002 5.15742C13.2859 4.82835 13.6073 4.53584 13.9288 4.2799C15.0002 3.43895 16.2145 3.0002 17.5716 3.0002C19.3573 3.0002 20.9645 3.73146 22.1788 5.04773C23.3573 6.32744 24.0002 8.08246 24.0002 9.98374C24.0002 11.9216 23.2859 13.6766 21.7859 15.5048C20.5002 17.077 18.6788 18.6492 16.5716 20.4773C15.8573 21.0989 15.0359 21.7936 14.2145 22.5249C13.8931 22.8174 13.4288 23.0002 13.0002 23.0002ZM8.42877 4.24334C7.0002 4.24334 5.67877 4.82835 4.7502 5.88868C3.78591 6.94901 3.28591 8.37497 3.28591 9.94718C3.28591 11.556 3.89305 13.055 5.17877 14.6638C6.39305 16.1629 8.17877 17.6985 10.2502 19.4901C10.9645 20.1117 11.7859 20.8064 12.6073 21.5742C12.8216 21.757 13.1788 21.757 13.3931 21.5742C14.2502 20.843 15.0359 20.1117 15.7502 19.4901C17.8216 17.6985 19.6073 16.1629 20.8216 14.6638C22.1073 13.055 22.7145 11.556 22.7145 9.94718C22.7145 8.37497 22.1788 6.94901 21.2502 5.88868C20.2859 4.82835 19.0002 4.24334 17.5716 4.24334C16.5002 4.24334 15.5359 4.57241 14.7145 5.26711C14.3573 5.52305 14.0716 5.85211 13.7502 6.21775C13.5716 6.43712 13.2859 6.58338 13.0002 6.58338C12.7145 6.58338 12.4288 6.43712 12.2502 6.21775C11.9645 5.85211 11.6431 5.52305 11.2859 5.26711C10.4645 4.60897 9.5002 4.24334 8.42877 4.24334Z" fill="#212B36"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.2585 4.04521C12.5091 4.24477 12.7619 4.46758 13.0002 4.71385C13.2385 4.46758 13.4913 4.24477 13.7419 4.04521L13.7435 4.04391C14.8653 3.16342 16.1442 2.7002 17.5716 2.7002C19.4444 2.7002 21.1305 3.46895 22.3993 4.84431C23.6343 6.18534 24.3002 8.01564 24.3002 9.98374C24.3002 12.0065 23.5508 13.8266 22.0181 15.6947C20.7379 17.2602 18.9398 18.8201 16.8903 20.5981L16.7686 20.7037C16.5209 20.9192 16.2618 21.1423 15.995 21.372C15.4876 21.8088 14.9524 22.2696 14.4152 22.7479C14.04 23.0887 13.5048 23.3002 13.0002 23.3002C12.5141 23.3002 11.969 23.1365 11.579 22.7423C11.0438 22.266 10.5108 21.8071 10.0054 21.372C9.73865 21.1423 9.47956 20.9192 9.23189 20.7037C9.1912 20.6684 9.15061 20.6332 9.11012 20.5981C7.0607 18.8202 5.26261 17.2603 3.98239 15.6949C2.44959 13.8267 1.7002 12.0066 1.7002 9.98374C1.7002 8.01639 2.36539 6.18693 3.59952 4.84604C4.83546 3.46658 6.55928 2.7002 8.42877 2.7002C9.81948 2.7002 11.1343 3.16282 12.2568 4.04391L12.2585 4.04521ZM3.82162 5.04773C2.64305 6.32744 2.0002 8.08246 2.0002 9.98374C2.0002 11.9216 2.71448 13.6766 4.21448 15.5048C5.47824 17.0501 7.25956 18.5955 9.32105 20.3839L9.42877 20.4773C9.67408 20.6908 9.93203 20.9129 10.1983 21.1422C10.7073 21.5804 11.2466 22.0448 11.7859 22.5249C12.1073 22.8539 12.5716 23.0002 13.0002 23.0002C13.4288 23.0002 13.8931 22.8174 14.2145 22.5249C14.7538 22.0448 15.2931 21.5804 15.8021 21.1421C16.0684 20.9129 16.3263 20.6908 16.5716 20.4773L16.6793 20.3839C18.7408 18.5955 20.5222 17.0501 21.7859 15.5048C23.2859 13.6766 24.0002 11.9216 24.0002 9.98374C24.0002 8.08246 23.3573 6.32744 22.1788 5.04773C20.9645 3.73146 19.3573 3.0002 17.5716 3.0002C16.2145 3.0002 15.0002 3.43895 13.9288 4.2799C13.6818 4.47658 13.4348 4.69484 13.204 4.9347C13.1344 5.00698 13.0664 5.08122 13.0002 5.15742C12.934 5.08122 12.866 5.00698 12.7964 4.9347C12.5656 4.69484 12.3186 4.47658 12.0716 4.2799C11.0002 3.43895 9.7502 3.0002 8.42877 3.0002C6.64305 3.0002 5.0002 3.73146 3.82162 5.04773ZM4.97214 6.09052C4.06508 7.08792 3.58591 8.43851 3.58591 9.94718C3.58591 11.4697 4.15695 12.9045 5.41247 14.4757C6.58673 15.9252 8.31036 17.4158 10.3452 19.1756L10.4464 19.2632C10.5954 19.3928 10.7502 19.5267 10.9084 19.6634C11.5028 20.1773 12.1549 20.741 12.8062 21.3494C12.9092 21.4331 13.0976 21.432 13.1983 21.346C13.6996 20.9183 14.1671 20.499 14.6143 20.0979C14.9361 19.8092 15.2474 19.53 15.5533 19.2638L15.6552 19.1756C17.6901 17.4158 19.4137 15.9251 20.588 14.4757C21.8434 12.9044 22.4145 11.4697 22.4145 9.94718C22.4145 8.44444 21.9031 7.09072 21.0264 6.08846C20.1174 5.09005 18.9122 4.54334 17.5716 4.54334C16.5665 4.54334 15.672 4.85019 14.9082 5.49617L14.899 5.50394L14.8892 5.51095C14.5695 5.74006 14.3094 6.03596 13.9883 6.40132L13.979 6.41184C13.7476 6.69331 13.3807 6.88338 13.0002 6.88338C12.6176 6.88338 12.2487 6.69118 12.0175 6.40713L12.0138 6.4025C11.7408 6.05318 11.4394 5.74617 11.1112 5.51095L11.1046 5.50626L11.0983 5.50123C10.3264 4.88278 9.42742 4.54334 8.42877 4.54334C7.08392 4.54334 5.84571 5.09308 4.97589 6.08632L4.97214 6.09052ZM13.7502 6.21775L13.7749 6.18961C14.0864 5.83524 14.3665 5.51647 14.7145 5.26711C15.5359 4.57241 16.5002 4.24334 17.5716 4.24334C19.0002 4.24334 20.2859 4.82835 21.2502 5.88868C22.1788 6.94901 22.7145 8.37497 22.7145 9.94718C22.7145 11.556 22.1073 13.055 20.8216 14.6638C19.6304 16.1345 17.8892 17.6403 15.8678 19.3885L15.7502 19.4901C15.453 19.7487 15.1435 20.0263 14.8216 20.315C14.3698 20.7202 13.8936 21.1472 13.3931 21.5742C13.1788 21.757 12.8216 21.757 12.6073 21.5742C11.9588 20.968 11.3103 20.4074 10.7145 19.8923C10.5556 19.755 10.4005 19.621 10.2502 19.4901L10.1326 19.3885C8.11124 17.6403 6.37002 16.1345 5.17877 14.6638C3.89305 13.055 3.28591 11.556 3.28591 9.94718C3.28591 8.37497 3.78591 6.94901 4.7502 5.88868C5.67877 4.82835 7.0002 4.24334 8.42877 4.24334C9.5002 4.24334 10.4645 4.60897 11.2859 5.26711C11.6431 5.52305 11.9645 5.85211 12.2502 6.21775C12.4288 6.43712 12.7145 6.58338 13.0002 6.58338C13.2859 6.58338 13.5716 6.43712 13.7502 6.21775Z" fill="#212B36"></path>
                                            </svg>

                                            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-600 text-[10px] font-semibold text-white text-center">
                                                3
                                            </span>
                                        </button>
                                    </div>
                                    <div className="absolute top-full right-0 mt-5 w-[330px] hidden group-hover:block" >
                                        <div className="overflow-hidden rounded-lg border border-[#e7e7e7] bg-white py-8 px-6 shadow-card">
                                            <div className="border-b border-[#e7e7e7] pb-3">
                                                <div className="-mx-1 flex items-center justify-between pb-4">
                                                    <div className="flex items-center px-1">
                                                        <div className="mr-3 h-10 w-full max-w-[40px] overflow-hidden rounded">
                                                            <img src="/img/image-02.jpg" alt="product image" className="w-full" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-black">
                                                                Circular Sienna
                                                            </p>
                                                            <p className="truncate text-xs font-medium text-slate-700">
                                                                Awesome white shirt
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="px-1">
                                                        <p className="text-base font-semibold text-black">$36.00</p>
                                                    </div>
                                                </div>
                                                <div className="-mx-1 flex items-center justify-between py-4">
                                                    <div className="flex items-center px-1">
                                                        <div className="mr-3 h-10 w-full max-w-[40px] overflow-hidden rounded">
                                                            <img src="/img/image-03.jpg" alt="product image" className="w-full" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium text-black">
                                                                Black T-shirt
                                                            </p>
                                                            <p className="truncate text-xs font-medium text-slate-700">
                                                                It's a nice black t-shirt
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="px-1">
                                                        <p className="text-base font-semibold text-black">$36.00</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <button className="flex w-full items-center justify-center rounded-md bg-blue-600 py-[10px] px-10 text-center text-base font-normal text-white hover:bg-opacity-90">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-20 group">
                                    <div className="flex max-w-[200px] justify-end">
                                        <Link href={"/cart"} className="relative flex h-10 w-10 items-center justify-center rounded-full border-[.5px] border-[#e7e7e7] bg-[#f4f7ff] text-slate-900">
                                            <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.2783 8.00273H22.0596L19.2971 0.974601C19.1346 0.608976 18.7283 0.446476 18.3627 0.568351C17.9971 0.730851 17.8346 1.1371 17.9564 1.50273L20.5158 8.04335H5.44395L8.00332 1.50273C8.16582 1.1371 7.9627 0.730851 7.59707 0.568351C7.23145 0.405851 6.8252 0.608976 6.6627 0.974601L3.9002 8.00273H2.68145C2.07207 8.00273 1.54395 8.49023 1.54395 9.14023V12.5934C1.54395 13.2027 2.03145 13.7309 2.68145 13.7309H2.72207L3.77832 22.9934C3.94082 24.4152 5.15957 25.5121 6.62207 25.5121H19.2971C20.7596 25.5121 21.9783 24.4152 22.1408 22.9934L23.1971 13.7309H23.2377C23.8471 13.7309 24.3752 13.2434 24.3752 12.5934V9.14023C24.4158 8.53085 23.9283 8.00273 23.2783 8.00273ZM3.00645 9.4246H22.9939V12.2684H3.00645V9.4246ZM20.7596 22.7902C20.6783 23.5215 20.0689 24.0496 19.3377 24.0496H6.6627C5.93145 24.0496 5.32207 23.5215 5.24082 22.7902L4.18457 13.6902H21.8158L20.7596 22.7902Z" fill="#212B36"></path>
                                                <path d="M8.73467 20.6375C9.14092 20.6375 9.46592 20.3125 9.46592 19.9062V16.7781C9.46592 16.3719 9.14092 16.0469 8.73467 16.0469C8.32842 16.0469 8.00342 16.3719 8.00342 16.7781V19.9062C8.00342 20.3125 8.32842 20.6375 8.73467 20.6375Z" fill="#212B36"></path>
                                                <path d="M17.2659 20.6375C17.6722 20.6375 17.9972 20.3125 17.9972 19.9062V16.7781C17.9972 16.3719 17.6722 16.0469 17.2659 16.0469C16.8597 16.0469 16.5347 16.3719 16.5347 16.7781V19.9062C16.5753 20.3125 16.9003 20.6375 17.2659 20.6375Z" fill="#212B36"></path>
                                            </svg>

                                            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-600 text-[10px] font-semibold text-white text-center">
                                                1
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="absolute top-full right-0 mt-5 w-[330px] hidden group-hover:block" >
                                        <div className="overflow-hidden rounded-lg bg-white p-8 shadow-card">
                                            <div className="mb-5 border-b border-[#e7e7e7] pb-3">
                                                <div className="-mx-1 flex items-center justify-between pb-4">
                                                    <div className="flex items-center px-1">
                                                        <div className="mr-3 h-10 w-full max-w-[40px] overflow-hidden rounded">
                                                            <img src="/img/image-02.jpg" alt="product image" className="w-full" />
                                                        </div>
                                                        <div>
                                                            <a href="#" className="text-sm font-medium text-black hover:text-blue-600">
                                                                Circular Sienna
                                                            </a>
                                                            <p className="truncate text-xs font-medium text-slate-700">
                                                                Awesome white shirt
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="px-1">
                                                        <p className="text-base font-semibold text-black">$36.00</p>
                                                    </div>
                                                </div>
                                                <div className="-mx-1 flex items-center justify-between py-4">
                                                    <div className="flex items-center px-1">
                                                        <div className="mr-3 h-10 w-full max-w-[40px] overflow-hidden rounded">
                                                            <img src="/img/image-03.jpg" alt="product image" className="w-full" />
                                                        </div>
                                                        <div>
                                                            <a href="#" className="text-sm font-medium text-black hover:text-blue-600">
                                                                Black T-shirt
                                                            </a>
                                                            <p className="truncate text-xs font-medium text-slate-700">
                                                                It's a nice black t-shirt
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="px-1">
                                                        <p className="text-base font-semibold text-black">$36.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="-mx-1 border-b border-[#e7e7e7] pb-5">
                                                <div className="mb-3 flex items-center justify-between">
                                                    <div className="px-1">
                                                        <p className="text-base font-medium text-black">Subtotal</p>
                                                    </div>
                                                    <div className="px-1">
                                                        <p className="text-base font-semibold text-black">$108</p>
                                                    </div>
                                                </div>
                                                <div className="mb-3 flex items-center justify-between">
                                                    <div className="px-1">
                                                        <p className="text-base font-medium text-black">
                                                            Shipping Cost (+)
                                                        </p>
                                                    </div>
                                                    <div className="px-1">
                                                        <p className="text-base font-semibold text-black">$10.85</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="px-1">
                                                        <p className="text-base font-medium text-black">
                                                            Discount (-)
                                                        </p>
                                                    </div>
                                                    <div className="px-1">
                                                        <p className="text-base font-semibold text-black">$9.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="-mx-1 flex items-center justify-between pt-5 pb-6">
                                                <div className="px-1">
                                                    <p className="text-base font-medium text-black">
                                                        Total Payable
                                                    </p>
                                                </div>
                                                <div className="px-1">
                                                    <p className="text-base font-semibold text-black">$88.15</p>
                                                </div>
                                            </div>

                                            <div>
                                                <a href="shopping-cart.html" className="flex w-full items-center justify-center rounded-md bg-blue-600 py-[10px] px-10 text-center text-base font-normal text-white hover:bg-opacity-90">
                                                    Place Order
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
