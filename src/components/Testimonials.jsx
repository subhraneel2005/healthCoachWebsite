import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";

function Testimonials() {
  const testimonialsArray = Array.from({ length: 10 });

  return (
    <div className="min-h-screen w-full flex select-none text-gray-900 justify-center bg-gray-300 items-center flex-col">
        <h1 className="md:text-8xl text-5xl heroText mb-4">Testimonials</h1>
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {testimonialsArray.map((_, index) => (
                    <CarouselItem key={index}>
                        <Card>
                            <CardContent className="bg-green-400 p-3 flex flex-col justify-center items-center">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>Clients</AvatarFallback>
                                </Avatar>
                                <p className="text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel> 
    </div>
  )
}

export default Testimonials
