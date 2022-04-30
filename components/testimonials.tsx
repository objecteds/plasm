import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
    <Carousel className="bg-black text-white py-10 lg:py-20">
        <CarouselItem index={0}>
            <Review by="Tim Apple (Inventor of Apple)">
                Plasm shows persistence in being one of the services of all time.
            </Review>
        </CarouselItem>
    </Carousel>
)

export default Testimonials