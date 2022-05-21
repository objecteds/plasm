import React from 'react';
import Image from 'next/image';
import { Tile, TileBackground, TileContent, TileWrapper } from './tile';
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './work';

const Works = () => (
    <TileWrapper numOfPages={5}>
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
                        <div>Yeah, the images are irrelevant.</div>
                        <div>They are placeholders.</div>
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
            page = {3}
            renderContent = {({progress}) => (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>But for now, have this.</div>
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
            page = {4}
            renderContent = {({progress}) => (
                <WorkContainer>
                    <WorkLeft progress={progress}>
                        <div>Last one, I promise.</div>
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
    </TileWrapper>
)

export default Works;