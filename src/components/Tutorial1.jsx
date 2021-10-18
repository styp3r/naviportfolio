import React from 'react';
import Button from './Button';
import {Link} from 'react-router-dom';

function Tutorial1(){

    return (
        <div>
            <h1 className = "font">Tutorial1</h1>
            <h1 className = "font">Tap the button</h1>
            <Link to = "/tut2"><Button /></Link>
        </div>);
}

export default Tutorial1;