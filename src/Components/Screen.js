import { styled } from "styled-components";
import React from "react";

/*
This is the Screen Component.
This will render multiple screens depending on the focused option
by the user. This component will be used by MobileScreen component.
 */
const ScreenStyle = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 7px;
`;

function Screen(props) {
    const { options, focusedOption } = props;
    return (
        <ScreenStyle>
            {options.map((option) => (
                <React.Fragment key={option.id}>
                    {(option.id === focusedOption) ? option.screen : null}
                </React.Fragment>
            ))}
        </ScreenStyle>
    )
}

export default Screen;