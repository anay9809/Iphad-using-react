import OptionList from "./Components/OptionList";
import Screen from "./Components/Screen";

/*
This component will render either the OptionList component 
or the Screen component after cheking the conditions.
*/
function MobileScreen(props) {
    const { options, focusedOption, showMenu } = props;
    return (
        <div className="mobile-screen">
            {showMenu
                ? (<OptionList options={options} focusedOption={focusedOption} />)
                : (<Screen options={options} focusedOption={focusedOption} />)
            }
        </div>
    );
}

export default MobileScreen;