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
                    height={50}
                    alt="Reddit" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/among.png" 
                    width={150}
                    height={50}
                    alt="Reddit" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/only.png" 
                    width={150}
                    height={50}
                    alt="Reddit" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/google.png" 
                    width={100}
                    height={50}
                    alt="Reddit" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/reddit.png" 
                    width={150}
                    height={50}
                    alt="Reddit" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/apple.png" 
                    width={150}
                    height={50}
                    alt="Reddit" 
                    objectFit="contain"
                />
            </SliderItem>
        </SliderContainer>
        <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/facebook.png" 
                    width={150}
                    height={50}
                    alt="Reddit" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/ebay.png" 
                    width={150}
                    height={50}
                    alt="Reddit" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/fedex.png" 
                    width={150}
                    height={50}
                    alt="Reddit" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/napsta.png" 
                    width={100}
                    height={50}
                    alt="Reddit" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/shell.png" 
                    width={150}
                    height={50}
                    alt="Reddit" 
                    objectFit="contain"
                />
            </SliderItem>
            <SliderItem width={150}>
                <Image 
                    src="/assets/trusted/spotify.png" 
                    width={150}
                    height={50}
                    alt="Reddit" 
                    objectFit="contain"
                />
            </SliderItem>
        </SliderContainer>
    </>
)

export default Logos