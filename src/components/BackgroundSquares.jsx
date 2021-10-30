import Glob from '../images/glob.png';

function BackgroundSquares(){
    return(
        <div className = "backgroundSquares">
            <img id = "globOne" src = {Glob}/>
            <img id = "globTwo" src = {Glob}/>
            <img id = "globThree" src = {Glob}/>
            <img id = "globFour" src = {Glob}/>
        </div>
    );
}

export default BackgroundSquares;