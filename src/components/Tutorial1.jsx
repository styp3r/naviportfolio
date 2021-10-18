import React from 'react';
import Button from './Button';
import {Link} from 'react-router-dom';

function Tutorial1(){

    return (
        <div>
            <div className = "tutBox1"></div>          
            <div className = "blurBox"></div>
            <div className = "blurBox1"></div>
            <div className = "blurBox2"></div>
            <Link to = "/tut2"><Button /></Link>
        </div>);
}

export default Tutorial1;