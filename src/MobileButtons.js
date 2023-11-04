import { GrChapterPrevious, GrChapterNext } from "react-icons/gr";
import { BiPlay, BiPause } from "react-icons/bi";

/*This component will render all the Buttons on the iPod*/
function MobileButtons(props) {
    const { mouseDown, mouseUp, mouseMove, mouseLeave, handleCenterBtn, handleMenuBtn } = props;
    return (
        <div className="mobileButtonsArea" onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={mouseMove} onMouseLeave={mouseLeave} draggable="false">
            <div className="row1">
                <button onClick={handleMenuBtn}>MENU</button>
            </div>
            <div className="row2">
                <button><GrChapterPrevious /></button>
                <div className="centerBtn" draggable="false" onClick={handleCenterBtn}></div>
                <button><GrChapterNext /></button>
            </div>
            <div className="row3">
                <button><BiPlay /><BiPause /></button>
            </div>
        </div>
    );
}

export default MobileButtons;