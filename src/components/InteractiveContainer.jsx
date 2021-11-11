import UiBox from './UiBox';
import Social from './SocialMediaIcons';
import Blob from './Blob';
import DarkModeToggle from './DarkModeToggle';
import Arrows from './Arrows';
import MouseScroll from './MouseScroll';
import BigCircle from './BigCircle';

function InteractiveContainer(){

    return(<div id = "interactiveContainer">
            <UiBox />
            <Social />
            <Blob />
            <DarkModeToggle />
            <Arrows />
            <MouseScroll />
            <div style = {{width: window.innerWidth, height: window.innerHeight }} id = "wrapper">
                <BigCircle />
            </div>
            </div>
        );
}

export default InteractiveContainer;