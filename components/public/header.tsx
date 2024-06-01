'use client'

import {CustomButton} from "@/components/customUI/custom-button";
import {useRouter} from "next/navigation";
import {Leaf, SearchIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import Slider from "@/components/customUI/carousel";
import {Separator} from "@/components/ui/separator";
import {PublicLinks} from "@/app/config";
import Link from "next/link";


export default function Header() {
    const router = useRouter();

    const handleOnclick = () => {
        router.push('/api/auth/login')
    }

    return (
        <header>
            <nav
                className=" flex bg-white w-full flex-nowrap items-center justify-between py-5 shadow-md lg:flex-wrap lg:justify-between md:py-5 2xl:py-8">
                <div className="relative flex w-full flex-wrap items-center justify-between px-3">
                    <div className="ms-2 md:me-2 flex gap-2 justify-center items-center">
                        <Leaf size={36} color="#22c55e" strokeWidth={2.25} /><Link className=" text-2xl text-primary font-bold" href="/">ThinkGreen</Link>
                    </div>

                    {/*Hamburger button for mobile view */}
                    <button
                        className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                        type="button"
                        data-twe-target="#navbarSupportedContent14"
                        aria-controls="navbarSupportedContent14"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        {/*Hamburger icon */}
                        <span
                            className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor">
                              <path
                                  fill-rule="evenodd"
                                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                  clip-rule="evenodd"/>
                            </svg>
                          </span>
                    </button>

                    {/*Collapsible navbar container*/}
                    <div
                        className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                        id="navbarSupportedContent14">
                        <ul
                            className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row">
                            {
                                PublicLinks.map((link, index) => {
                                    return (
                                        <li key={index}
                                            className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2">
                                            <Link
                                                className="text-black dark:text-white lg:px-2"
                                                aria-current="page"
                                                href={`${link.link}`}
                                            >{ link.label }</Link
                                            >
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className=" w-auto lg:pe-2">
                            <div className="relative flex gap-2 w-full flex-wrap items-stretch">
                                <input
                                    type="search"
                                    className="relative m-0 -me-0.5 block  min-w-0 flex-auto rounded-s border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-1 text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="button-addon3"/>

                                {/*-Search button*/}
                                <button
                                    className="relative rounded-e border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 motion-reduce:transition-none dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
                                    type="button"
                                    id="button-addon3">
                                    <SearchIcon size={20}/>
                                </button>
                                <CustomButton/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

