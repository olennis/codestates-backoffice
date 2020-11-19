// @flow 
import * as React from 'react';
import { GoogleCalendar } from "../atoms/GoogleCalendar"
import { GithubTeam } from '../atoms/GithubTeam';
import { Slack } from '../atoms/Slack';
import styled from 'styled-components'


type Props = {
    setGitCheck: any;
};


export const CheckToolBar = (props: Props) => {
    return (
        <CheckToolSection>
            나는 툴 체크박스
            <GithubTeam setGitCheck={props.setGitCheck} />
            <Slack />
            <GoogleCalendar />
        </CheckToolSection>
    );
};

const CheckToolSection = styled.section`
    padding: 1em;
    background: yellow;
`