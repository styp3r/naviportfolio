import React from 'react';
import GlowBall from './GlowBall';
import BigMonster from './BigMonster';
import WormHole from './WormHole';
import BackgroundSquares from './BackgroundSquares';

function InteractiveBackground(){

    let sectionWidth = window.innerWidth;
    let sectionHeight = window.innerHeight;

    return (
        <div className = "interactiveContainer" style = {{width: sectionWidth, height: sectionHeight }}>
            <BackgroundSquares />
            <GlowBall />
            <BigMonster />
            <WormHole />
        </div>
    );
}

export default InteractiveBackground;
