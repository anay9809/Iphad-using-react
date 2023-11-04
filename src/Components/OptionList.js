import Option from "./Option";

/* 
This is the OptionList Componet.
This will render one Heading and multiple Option components.
This component will be used by MobileScreen component.
*/
function OptionList(props) {
    const { options, focusedOption } = props;
    return (
        <div className="option-list">
            <h1>iPod.js</h1>
            <ul>
                {options.map((option) => (
                    <Option key={option.id} option={option} focusedOption={focusedOption} />
                ))}
            </ul>
        </div>
    );
}

export default OptionList;