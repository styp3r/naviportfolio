import UiBox from './UiBox';
import Social from './SocialMediaIcons';
import Blob from './Blob';
import DarkModeToggle from './DarkModeToggle';
import Arrows from './Arrows';
import MouseScroll from './MouseScroll';

function InteractiveContainer(){

    return(<div id = "interactiveContainer">
            <UiBox />
            <Social />
            <Blob />
            <DarkModeToggle />
            <Arrows />
            <MouseScroll />
            </div>
        );
}

export default InteractiveContainer;