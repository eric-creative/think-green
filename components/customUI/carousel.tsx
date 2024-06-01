import React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Leaf} from "lucide-react";

export default function Carousel(): JSX.Element {
    return (
        <>
            <div
                className="relative h-[59vh] py-5 md:h-[90vh] overflow-hidden bg-[url('https://st4.depositphotos.com/4732855/28199/i/600/depositphotos_281995214-stock-photo-group-of-happy-african-volunteers.jpg')] bg-cover md:bg-contain bg-primary bg-[50%] bg-no-repeat">
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/40 bg-fixed">
                    <div className={cn("flex h-full items-center justify-center md:justify-start")}>
                        <div className="px-6 text-center md:max-w-3xl md:text-start text-white md:px-12">
                            <h2 id={'hero-text'}
                                className={`pb-2 text-6xl md:text-6xl font-normal flex gap-3 items-center`}>
                                <Leaf size={200} color="white" strokeWidth={2.25} className={'hidden md:block'} />
                                Think Green, Live Green: Join the Movement
                            </h2>
                            <h3 id={'hero-subtext'}
                                className="mb-8 leading-relaxed text-xl md:text-3xl">
                                Make a difference for our planet. The ThinkGreen Environmental Club empowers you to take action and create a sustainable future. Join us and be part of the solution!
                            </h3>
                            <Button
                                variant={'default'}
                                className=" p-10 md:p-8 font-semibold rounded text-lg  uppercase leading-relaxed transition duration-150 ease-in-out "
                            >
                                Contribute Your views
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}