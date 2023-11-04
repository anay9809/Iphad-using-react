import { Component } from "react";
import "./styles.css";
import MobileButtons from "./MobileButtons";
import MobileScreen from "./MobileScreen";
import CoverFlowScreen from "./Screens/CoverFlowScreen";
import GamesScreen from "./Screens/GamesScreen";
import MusicScreen from "./Screens/MusicScreen";
import SettingsScreen from "./Screens/SettingsScreen";

/* 
This App component will work like a virtual iPod to display
multiple options and screens.
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      options: [
        { id: 0, optionName: "Cover Flow", screen: <CoverFlowScreen /> },
        { id: 1, optionName: "Music", screen: <MusicScreen /> },
        { id: 2, optionName: "Games", screen: <GamesScreen /> },
        { id: 3, optionName: "Settings", screen: <SettingsScreen /> },
      ],
      focusedOption: 0,
      showMenu: true,
      mouseEvents: true,
    }
    this.timer = null;
    this.moveTimer = null;
    this.startY = null;
  };

  //This function wiill be used to change the focused option
  focusHandler = (number) => {
    const { options, focusedOption } = this.state;
    let newFocusedOption = (focusedOption + number + options.length) % options.length;
    this.setState({ focusedOption: newFocusedOption });
  };

  /* 
  This function will be called when the user holds down 
  mouse on the circular menu.
  */
  handleMouseDown = (e) => {
    if (this.state.mouseEvents) {
      this.timer = setTimeout(() => { }, 1000);
      this.startY = e.clientY;
    }
  }

  /* 
  This function will checks if the mouse click was a long press
  if not than it will cancel the timer form handleMouseDown function
  */
  handleMouseUp = () => {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
      this.startY = null;
    }
  }

  /* 
  This function will check and handle if the mouse is moving while pressing
  the mouse button down.
 */
  handleMouseMove = (e) => {
    if (this.timer) {
      clearTimeout(this.moveTimer);
      let currentY = e.clientY;
      let diffY = Math.abs(currentY - this.startY);
      let radius = e.target.clientHeight / 2;
      let radiansPerPixel = (2 * Math.PI) / (2 * radius);
      let angleInDegrees = diffY * radiansPerPixel * (180 / Math.PI);

      this.moveTimer = setTimeout(() => {
        if (angleInDegrees > 20) {
          if (currentY > this.startY) {
            this.focusHandler(1);
          } else {
            this.focusHandler(-1);
          }
        }
      }, 80);
    }
  }

  /* 
  This function will clear all timers started on the mouse click and
  will also clear the initial Y position of the mouse.
  */
  handleMouseLeave = () => {
    clearTimeout(this.timer);
    this.timer = null;
    this.startY = null;
    clearTimeout(this.moveTimer);
    this.moveTimer = null;
  }

  /* 
  This function will handle the center button which will check
  the selected option and open the screen accordingly.
  */
  handleCenterBtn = () => {
    if (this.state.showMenu === true) {
      this.setState((prevState) => ({
        showMenu: !prevState.showMenu,
        mouseEvents: !prevState.mouseEvents,
      }));
    }
  }

  /* 
  This function will handle the Menu button that will take us
  back to the OptionsList from the displayed Screen
  */
  handleMenuBtn = () => {
    if (this.state.showMenu === false) {
      this.setState((prevState) => ({
        showMenu: !prevState.showMenu,
        mouseEvents: !prevState.mouseEvents,
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <MobileScreen options={this.state.options}
          focusedOption={this.state.focusedOption}
          showMenu={this.state.showMenu}
        />
        <MobileButtons
          mouseDown={this.handleMouseDown}
          mouseUp={this.handleMouseUp}
          mouseMove={this.handleMouseMove}
          mouseLeave={this.handleMouseLeave}
          handleCenterBtn={this.handleCenterBtn}
          handleMenuBtn={this.handleMenuBtn}
        />
      </div>
    );
  };
}

export default App;
