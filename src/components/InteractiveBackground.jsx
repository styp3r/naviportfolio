import React from 'react';
import GlowBall from './GlowBall';
import BigMonster from './BigMonster';
import Octopus from './Octopus';
import BackgroundSquares from './BackgroundSquares';
import GlowMonster from './GlowMonster';

function InteractiveBackground(){

    let sectionWidth = window.innerWidth;
    let sectionHeight = window.innerHeight;

    return (
        <div id = "interactiveContainer" style = {{width: sectionWidth, height: sectionHeight }}>
            <BackgroundSquares />
            <GlowBall />
            <BigMonster />
            <Octopus />
            <GlowMonster />
        </div>
    );
}

export default InteractiveBackground;
