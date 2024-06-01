import React from 'react';
import {Leaf} from "lucide-react";
import {articles} from "@/app/blog/config";
import Link from "next/link";

const Articles = () => {
    return (
        <div className={'container py-10 flex flex-col gap-5 bg-white w-full'}>
            <div className={'w-full flex items-center justify-center gap-3 text-center'}>
                <Leaf size={66} color="#22c55e" strokeWidth={2.25} />
                <div className={'flex flex-col gap-0 items-center justify-start !text-start'}>
                    <h2 className={'text-3xl md:text-5xl font-extrabold text-primary'}>Recent Articles</h2>
                    <p className={'text-primary uppercase text-md md:text-xs'}>Think Green</p>
                </div>
            </div>

            <div className={'grid grid-cols-1 md:grid-cols-2 gap-10 my-5 w-full'}>
                {
                    !articles ? (
                        <div className={'w-full flex justify-center items-center'}>
                            <p className={'text-lg font-semibold text-primary'}>No Article Found</p>
                        </div>
                    ) : (
                        <>
                            {
                                // @ts-ignore
                                articles?.slice(0, 4).map((article, index) => {

                                    return (
                                        <article key={index} className="flex flex-col md:flex-row bg-white transition border border-primary ">
                                            <div className="md:rotate-180 bg-primary text-white p-2 md:[writing-mode:_vertical-lr]">
                                                <time
                                                    dateTime="2022-10-10"
                                                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase "
                                                >
                                                    <span>{ article?.dateCreated.slice(0, 4) }</span>
                                                    <span className=" flex-1 text-center items-center">THINK GREEN</span>
                                                    <span>{ article?.dateCreated.slice(5, 10) }</span>
                                                </time>
                                            </div>

                                            <div className=" sm:basis-56">
                                                <img
                                                    alt=""
                                                    src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                                                    className="aspect-square h-full w-full object-cover"
                                                />
                                            </div>

                                            <div className="flex flex-1 flex-col justify-between">
                                                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                                    <a href="#">
                                                        <h3 className="font-bold uppercase text-gray-900">
                                                            { article?.title }
                                                        </h3>
                                                    </a>

                                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                                        { article?.summary }
                                                    </p>
                                                </div>

                                                <div className="sm:flex sm:items-end sm:justify-end">
                                                    <Link
                                                        href={`${ article?.url }`}
                                                        className="block bg-primary px-5 py-3 text-center text-xs font-bold uppercase text-white transition "
                                                    >
                                                        Read Article
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    )
                                })
                            }
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Articles;