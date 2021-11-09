import UiBox from './UiBox';
import Social from './SocialMediaIcons';
import HeroLine from './HeroLine';
import Blob from './Blob';
import DarkModeToggle from './DarkModeToggle';

function InteractiveContainer(){

    return(<div id = "interactiveContainer">
            <UiBox />
            <Social />
            <HeroLine />
            <Blob />
            <DarkModeToggle />
            </div>
        );
}

export default InteractiveContainer;