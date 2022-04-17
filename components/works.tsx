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
                            src="/assets/works/white.png"
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
                            src="/assets/works/white.png"
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
                        <div>There are meant to be images in the</div>
                        <div>white space but I couldn&apos;t find anything.</div>
                    </WorkLeft>
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
                            src="/assets/works/white.png"
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
                            src="/assets/works/white.png"
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
                            src="/assets/works/white.png"
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
                            src="/assets/works/white.png"
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