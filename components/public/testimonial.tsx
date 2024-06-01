'use client'
import React, {useRef, useEffect} from 'react';
import KeenSlider from 'keen-slider'; // Assuming you're using KeenSlider as an ES module
import { testimonials} from "@/app/config";
import {StepBack, StepForward} from "lucide-react";

const Testimonial = () => {
    const keenSliderRef = useRef(null);

    useEffect(() => {
        if (!keenSliderRef.current) {
            // Initialize KeenSlider only on first render
            keenSliderRef.current = new KeenSlider('#keen-slider', {
                loop: true,
                slides: {
                    origin: 'center',
                    perView: 1.25,
                    spacing: 16,
                },
                breakpoints: {
                    '(min-width: 1024px)': {
                        slides: {
                            origin: 'auto',
                            perView: 1.5,
                            spacing: 32,
                        },
                    },
                },
            });
        }

        return () => {
            // Clean up KeenSlider instance on unmount
            if (keenSliderRef.current) {
                // @ts-ignore
                keenSliderRef.current.destroy();
                keenSliderRef.current = null;
            }
        };
    }, [testimonials]); // Re-initialize KeenSlider on slides prop change

    const handlePreviousClick = () => {
        if (keenSliderRef.current) {
            // @ts-ignore
            keenSliderRef.current.prev();
        }
    };

    const handleNextClick = () => {
        if (keenSliderRef.current) {
            // @ts-ignore
            keenSliderRef.current.next();
        }
    };
    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
                    <h2 className="max-w-xl text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                        Read trusted reviews from the club members
                    </h2>
                    <div className="mt-8 flex gap-4 lg:mt-0">
                        <button
                            aria-label="Previous slide"
                            onClick={handlePreviousClick}
                            id="keen-slider-previous"
                            className="rounded-full border-4 border-primary p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                        >
                            <StepBack size={16} color="#25f609" strokeWidth={2.25} />
                        </button>

                        <button
                            aria-label="Next slide"
                            onClick={handleNextClick}
                            id="keen-slider-next"
                            className="rounded-full border-4 border-primary p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                        >
                            <StepForward size={16} color="#25f609" strokeWidth={2.25} />
                        </button>
                    </div>
                </div>

                <div className="-mx-6 mt-8 lg:mx-0">
                    <div id="keen-slider" className="keen-slider flex">

                        {
                            testimonials ? (
                                <>
                                    {
                                        testimonials?.map((testimonial, index) => {

                                            return (
                                                <div key={index} className="keen-slider__slide">
                                                    <blockquote
                                                        className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                                                    >
                                                        <div>
                                                            <div className="flex gap-0.5 text-red-500">
                                                                Rating &nbsp; &nbsp; { testimonial?.rating }
                                                            </div>

                                                            <div className="mt-4">
                                                                <p className="text-2xl font-bold text-primary sm:text-3xl">
                                                                    { testimonial?.name }
                                                                </p>

                                                                <p className="mt-4 leading-relaxed text-gray-700">
                                                                    { testimonial?.quote }
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <footer
                                                            className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                                            &mdash; { testimonial?.title }
                                                        </footer>
                                                    </blockquote>
                                                </div>
                                            )
                                        })
                                    }
                                </>
                            ) : (
                                <> No Testimonials</>
                            )
                        }

                    </div>
                </div>
            </div>
        </section>

    );
};

export default Testimonial;