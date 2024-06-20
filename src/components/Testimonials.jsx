import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
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
  const testimonials = [
    {
      name: "Jennie Doe",
      image: "https://i.pinimg.com/236x/00/62/87/006287d3aa9c240f2ca4fdfe90d67a39.jpg",
      feedback: "Working with Jessica has been a transformative experience. I have lost 20 pounds and feel more energetic than ever!",
    },
    {
      name: "Jane Smith",
      image: "https://i.pinimg.com/236x/7e/b6/5e/7eb65e2b2f15e2c761a0bc33b5868dad.jpg",
      feedback: "The personalized nutrition plan was exactly what I needed. My health has improved significantly, and I feel great!",
    },
    {
      name: "Michael Brown",
      image: "https://i.pinimg.com/236x/fc/58/af/fc58af39dcf4033496e5480afed060af.jpg",
      feedback: "I never thought I could enjoy working out until I started training with Jessica. Highly recommend!",
    },
    {
        name: "Jennie Doe",
        image: "https://i.pinimg.com/236x/00/62/87/006287d3aa9c240f2ca4fdfe90d67a39.jpg",
        feedback: "Working with Jessica has been a transformative experience. I have lost 20 pounds and feel more energetic than ever!",
      },
      {
        name: "Jane Smith",
        image: "https://i.pinimg.com/236x/7e/b6/5e/7eb65e2b2f15e2c761a0bc33b5868dad.jpg",
        feedback: "The personalized nutrition plan was exactly what I needed. My health has improved significantly, and I feel great!",
      },
      {
        name: "Michael Brown",
        image: "https://i.pinimg.com/236x/fc/58/af/fc58af39dcf4033496e5480afed060af.jpg",
        feedback: "I never thought I could enjoy working out until I started training with Jessica. Highly recommend!",
      }
    // Add more testimonials as needed
  ];

  return (
    <div id="testimonials" className="min-h-screen w-full flex select-none text-gray-900 justify-center bg-gray-200 items-center flex-col">
      <h1 className="text-5xl font-bold mb-8">Testimonials</h1>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="bg-green-400 p-3 flex flex-col justify-center items-center">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <p className="text-lg font-bold mt-3">{testimonial.name}</p>
                  <p className="text-lg mt-3 text-center">&quot;{testimonial.feedback}&quot;</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Testimonials;
