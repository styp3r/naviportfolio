import React from 'react';
import ProjectItem from './ProjectItem';

function Work(){

    return (<div id = "workContainer">
        <h1 id = "workTitle">Some things I've worked on</h1>
        <ProjectItem title = "one" itemName = "Project .001"/>
        <ProjectItem title = "two" itemName = "Project .002"/>
        <ProjectItem title = "three" itemName = "Project .003"/>
    </div>);
}

export default Work;