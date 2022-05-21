import React from 'react';
import Image from 'next/image';
import SliderContainer, { SliderItem } from './slider';

const Logos: React.FC = () => (
    <>
        <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/amazon.png" 
                    width={150}
                    height={100}
                    alt="amazon" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/among.png" 
                    width={150}
                    height={100}
                    alt="among" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/google.png" 
                    width={150}
                    height={100}
                    alt="google" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/apple.png" 
                    width={150}
                    height={100}
                    alt="apple" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/ffv.png" 
                    width={150}
                    height={100}
                    alt="ffv" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/pepsi.png" 
                    width={150}
                    height={100}
                    alt="netflix" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/macbook.png" 
                    width={150}
                    height={100}
                    alt="macintosh" 
                    objectFit="contain"
                />
            </SliderItem>
        </SliderContainer>
        <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/facebook.png" 
                    width={150}
                    height={100}
                    alt="facebook" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/ebay.png" 
                    width={150}
                    height={100}
                    alt="ebay" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/fedex.png" 
                    width={150}
                    height={100}
                    alt="fedex" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/spotify.png" 
                    width={150}
                    height={100}
                    alt="spotify" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/duck.png" 
                    width={150}
                    height={100}
                    alt="duckgogo" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/adios.png" 
                    width={150}
                    height={100}
                    alt="adidas" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/visa.png" 
                    width={150}
                    height={100}
                    alt="visa" 
                    objectFit="contain"
                />
            </SliderItem>
        </SliderContainer>
    </>
)

export default Logos