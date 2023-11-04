import { styled } from "styled-components";
import { FaGreaterThan } from "react-icons/fa6";

/* 
This is a Option Component that will render Option name
and a arrow icon. This Option componet will be in 
OptionList component 
*/
const OptionStyle = styled.li`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.$isFocused ? "blue" : "white"};
    color: ${(props) => props.$isFocused ? "white" : "black"};
`

function Option(props) {
    const { option, focusedOption } = props;
    return (
        <OptionStyle $isFocused={focusedOption === option.id}>
            <span>{option.optionName}</span>
            <span><FaGreaterThan style={{ color: "white" }} /></span>
        </OptionStyle>
    )
}

export default Option;