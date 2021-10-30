import React from 'react';
import GlowBall from './GlowBall';
import BigMonster from './BigMonster';
import WormHole from './WormHole';

function InteractiveBackground(){

    let sectionWidth = window.innerWidth;
    let sectionHeight = window.innerHeight;

    return (
        <div className = "interactiveContainer" style = {{width: sectionWidth, height: sectionHeight }}>
            <GlowBall />
            <BigMonster />
            <WormHole />
        </div>
    );
}

export default InteractiveBackground;
