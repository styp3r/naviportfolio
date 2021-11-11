import Cross from '../images/cross.png';

function UiBox(){
    return(
        <div id = "heroBoxContainer">
            <div id = "heroBox"></div>
            <img id = "heroCross" src = {Cross} width= "50" height = "50"/>
            <img id = "heroCross1" src = {Cross} width= "50" height = "50"/>
        </div>
    );
}

export default UiBox;