// @flow 
import * as React from 'react';
import { Tabs } from "../molecules/Tabs";
import { StateBar } from "../molecules/StateBar"
import { CheckToolBar } from "../molecules/CheckToolBar"
import styled from 'styled-components'


type Props = {
    setTab: any,
    setGitCheck: any
    gitCheck: any
    slackCheck: any
    setSlackCheck: any
    calendar: any
    setCalendar: any,
    data:any,
    setData:any
};

export const ToolTab = (props: Props) => {

    return (
        <Section>
            여긴 탬플릿
            <Tabs setTab={props.setTab} />
            <StateBar />
            <CheckToolBar
                gitCheck={props.gitCheck}
                setGitCheck={props.setGitCheck}
                slackCheck={props.slackCheck}
                setSlackCheck={props.setSlackCheck}
                calendar={props.calendar}
                setCalendar={props.setCalendar}
                data={props.data}
                setData={props.setData}
            />
        </Section >
    );
};

const Section = styled.section`
    padding: 4em;
    background: papayawhip;
`