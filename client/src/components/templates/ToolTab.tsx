// @flow 
import * as React from 'react';
import { Tabs } from "../molecules/Tabs";
import { StateBar } from "../molecules/StateBar"
import { CheckToolBar } from "../molecules/CheckToolBar"
import styled from 'styled-components'


type Props = {
    setTab: any,
    setGitCheck: any
};

export const ToolTab = (props: Props) => {

    return (
        <Section>
            여긴 탬플릿
            <Tabs setTab={props.setTab} />
            <StateBar />
            <CheckToolBar setGitCheck={props.setGitCheck} />
        </Section >
    );
};

const Section = styled.section`
    padding: 4em;
    background: papayawhip;
`