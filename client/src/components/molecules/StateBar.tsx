// @flow 
import * as React from 'react';
import styled from "styled-components"

type Props = {

};


export const StateBar = (props: Props) => {
    return (
        <StateSection>
            <SpanDevied>직전기수</SpanDevied>
            <SpanDevied>현재기수</SpanDevied>
            <SpanDevied>Github ID</SpanDevied>
        </StateSection>
    );
};

const StateSection = styled.section`
    padding: 1em;
    background: green;
`

const SpanDevied = styled.span`
    padding: 20px;
`