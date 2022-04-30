import React from 'react';
import Image from 'next/image';
import { Tile, TileBackground, TileContent, TileWrapper } from './tile';
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './work';

const Works = () => (
    <TileWrapper numOfPages={7}>
        <TileBackground>
            <WorkBackground />
        </TileBackground>
        <TileContent>
            <Tile
            page = {0}
            renderContent = {({progress}) => (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>Go above and beyond.</div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image 
                            src="/assets/works/mcdonalds.png"
                            layout="fill"
                            alt="Irrelevant image"
                        />
                    </WorkRight>
                </WorkContainer>
            )}></Tile>
        </TileContent>
        <TileContent>
            <Tile
            page = {1}
            renderContent = {({progress}) => (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>Improved communication</div>
                        <div>with zero caveats.</div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image 
                            src="/assets/works/aperture.png"
                            layout="fill"
                            alt="Irrelevant image"
                        />
                    </WorkRight>
                </WorkContainer>
            )}></Tile>
        </TileContent>
        <TileContent>
            <Tile
            page = {2}
            renderContent = {({progress}) => (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>Sorry for the images,</div>
                        <div>they&apos;re the best ones I could find.</div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image 
                            src="/assets/works/sorry.png"
                            layout="fill"
                            alt="Irrelevant image"
                        />
                    </WorkRight>
                </WorkContainer>
            )}></Tile>
        </TileContent>
        <TileContent>
            <Tile
            page = {3}
            renderContent = {({progress}) => (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>This website is pretty cool.</div>
                        <div>Don&apos;t you agree?</div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image 
                            src="/assets/works/nestle.png"
                            layout="fill"
                            alt="Irrelevant image"
                        />
                    </WorkRight>
                </WorkContainer>
            )}></Tile>
        </TileContent>
        <TileContent>
            <Tile
            page = {4}
            renderContent = {({progress}) => (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>Here's another one.</div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image 
                            src="/assets/works/burger.png"
                            layout="fill"
                            alt="Irrelevant image"
                        />
                    </WorkRight>
                </WorkContainer>
            )}></Tile>
        </TileContent>
        <TileContent>
            <Tile
            page = {5}
            renderContent = {({progress}) => (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>Okay, I&apos;ll stop.</div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image 
                            src="/assets/works/up.png"
                            layout="fill"
                            alt="Irrelevant image"
                        />
                    </WorkRight>
                </WorkContainer>
            )}></Tile>
        </TileContent>
        <TileContent>
            <Tile
            page = {6}
            renderContent = {({progress}) => (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>Last one, I promise.</div>
                    </WorkLeft>
                    <WorkRight progress={progress}>
                        <Image 
                            src="/assets/works/days.png"
                            layout="fill"
                            alt="Irrelevant image"
                        />
                    </WorkRight>
                </WorkContainer>
            )}></Tile>
        </TileContent>
    </TileWrapper>
)

export default Works;