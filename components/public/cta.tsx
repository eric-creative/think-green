import React from 'react';
import {Button} from "@/components/ui/button";
import {Leaf} from "lucide-react";

const Cta = () => {
    return (
            <div className="mx-auto w-full ">
                <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
                    <div className="bg-primary p-8 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl flex flex-col gap-2">
                            <h2 className="text-2xl font-bold flex gap-1 items-center text-white text-start md:text-3xl">
                                <Leaf size={150} color="#22c44a" strokeWidth={2.25} />Join the ThinkGreen Environmental Club and Make a Difference!
                            </h2>

                            <div className="text-white/90 sm:mt-4 text-start">
                                <p>Are you concerned about the plastic pollution in our oceans? Do you want to make your school or neighborhood greener? Then join ThinkGreen Environmental Club!<br/><br/>
                                    We&apos;re a friendly group of students who organize beach cleanups, plant trees in local parks, and raise awareness about sustainability through educational campaigns.<br/><br/>
                                    In ThinkGreen, you&apos;ll:<br/><br/></p>
                                <ul className={'space-y-1 list-disc mx-5'} >
                                    <li>Learn practical ways to reduce your environmental impact.</li>
                                    <li>Participate in hands-on projects that make a real difference.</li>
                                    <li>Meet other passionate environmentalists and make new friends.</li>
                                    <li>Have fun and enjoy engaging activities for a greener future.</li>
                                </ul>
                            </div>

                            <div className="mt-4 md:mt-8">
                                <Button
                                    variant={'outline'}
                                    className="rounded bg-primary px-12 py-3 text-sm font-bold text-white hover:text-primary transition "
                                >
                                    JOIN OUR CLUB
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-1 lg:grid-cols-2">
                        <img
                            alt=""
                            src="https://assets.theoceancleanup.com/app/uploads/2019/04/Bird-surrounded-by-plastic-photo-by-Matthew_Chauvin.jpg"
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                        />

                        <img
                            alt=""
                            src="https://st3.depositphotos.com/29633910/32794/i/450/depositphotos_327943072-stock-photo-garbage-recycling-material-collectors.jpg"
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                        />
                    </div>
                </div>
            </div>
    );
};

export default Cta;