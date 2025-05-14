'use client'

import {Story as StoryType} from "../types/stories"
import {useState} from "react";
import {CarouselApi} from "./ui/carousel"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";


interface Props {
    story: StoryType;
}

const Story = ({story}: Props) => {
    const [api, setApi] = useState<CarouselApi>();

    return (
        <div className="px-20">
            <Carousel setApi={setApi} className="w-full lg:w-4/5 h-56 mx-auto">
                <CarouselContent className="px-5">
                    {story.pages.map((page, index) => (
                        <CarouselItem key={index} className="p-5 md:p-10 border">
                            <Card>
                                <h2 className="text-center text-gray-400">{story.story}</h2>
                            </Card>
                            <CardContent className="p-5 xl:flex">
                                <Image
                                    src={page.png}
                                    alt={`Page ${index + 1} image`}
                                    width={500}
                                    height={500}
                                    className="w-80 h-8w-80 xl:w-[500px] xl:h-[500px] founded-3xl mx-auto float-right p-5 xl:order-last" />
                                <p className="font-semibold text-xl first-letter:text-3xl whitespace-pre-wrap">{page.txt}</p>
                            </CardContent>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    );
}

export default Story;