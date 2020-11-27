// @flow 
import * as React from 'react';
import { GoogleCalendar } from "../atoms/GoogleCalendar"
import { GithubTeam } from '../atoms/GithubTeam';
import { Slack } from '../atoms/Slack';
import styled from 'styled-components'


type Props = {
    setGitCheck: any;
    gitCheck: any
    setSlackCheck: any;
    slackCheck: any
    calendar: any
    setCalendar: any
    data: any,
    setData: any
};


export const CheckToolBar = (props: Props) => {
    return (
        <CheckToolSection>
            나는 툴 체크박스
            <GithubTeam 
            setGitCheck={props.setGitCheck} 
            gitCheck={props.gitCheck} 
            data={props.data}
            setData={props.setData} />
            <Slack 
            setSlackCheck={props.setSlackCheck} 
            slackCheck={props.slackCheck} 
            data={props.data}
            setData={props.setData}
            />
            <GoogleCalendar 
            setCalendar={props.setCalendar} 
            calendar={props.calendar} 
            data={props.data}
            setData={props.setData}/>
        </CheckToolSection>
    );
};

const CheckToolSection = styled.section`
    padding: 1em;
    background: yellow;
`