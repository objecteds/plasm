import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
    <Carousel className="bg-black text-white py-10 lg:py-20">
        <CarouselItem index={0}>
            <Review by="zyph (Friend)">
                i get the sense i'm being ripped off. it says it's a link shortener microservice but where is the link shortening like did you forget to put it in or something??? what
            </Review>
        </CarouselItem>
        <CarouselItem index={1}>
            <Review by="Elon Musk (Guy Who Buys Companies)">
                can i buy this
            </Review>
        </CarouselItem>
        <CarouselItem index={2}>
            <Review by="Child (5-year-old)">
                what is a testimonials
            </Review>
        </CarouselItem>
        <CarouselItem index={3}>
            <Review by="adaptation (of an actual kmart review)">
                horrific. blood everywhere, dirt, fly larvae etc. banshee flying over my screen screaming, made me fall down and go into cardiac arrest. 2/5.
            </Review>
        </CarouselItem>
        <CarouselItem index={4}>
            <Review by="xQc (Twitch Streamer)">
                idk dud plasm kinda mid ngl
            </Review>
        </CarouselItem>
        <CarouselItem index={5}>
            <Review by="Me (Myself)">
                5 stars! I am the creator and I think I did a pretty good job.
            </Review>
        </CarouselItem>
        <CarouselItem index={6}>
            <Review by="random guy on the street (deceased)">
                uhhh it's not very good in my opinion. can i go now
            </Review>
        </CarouselItem>
        <CarouselItem index={7}>
            <Review by="Donkerpie (Game Critic)">
                This website encourages racism!<br />
                I was just minding my business looking at the very funny logos and then two pigeons ganged up on me in real life and sent me to the abyss
            </Review>
        </CarouselItem>
        <CarouselItem index={8}>
            <Review by="Ophanim (Ethereal Being)">
                this websites,,. ist's good
            </Review>
        </CarouselItem>
        <CarouselItem index={9}>
            <Review by="Distressed Human (distressed)">
                Saved my friendship! My friend is a computer who only communicates using links, and gives me the cold shoulder when I forget them. With Plasm, I can now remember links better! 10/10
            </Review>
        </CarouselItem>
    </Carousel>
)

export default Testimonials