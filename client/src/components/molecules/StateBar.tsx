// @flow 
import * as React from 'react';
import styled from "styled-components"

type Props = {

};
export const StateBar = (props: Props) => {
    return (
        <StateSection>
            나는상태바
        </StateSection>
    );
};

const StateSection = styled.section`
    padding: 1em;
    background: purple
`