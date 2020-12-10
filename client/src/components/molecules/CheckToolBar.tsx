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
    tab: any
};


export const CheckToolBar = (props: Props) => {
    return (
        <ToolCheck>
            {
                props.tab === '1' ?
                    <div></div> :
                    <tr>
                        <ToolCheck2>
                            <GithubTeam
                                setGitCheck={props.setGitCheck}
                                gitCheck={props.gitCheck}
                                data={props.data}
                                setData={props.setData} />
                        </ToolCheck2>
                        <ToolCheck2>
                            <Slack
                                setSlackCheck={props.setSlackCheck}
                                slackCheck={props.slackCheck}
                                data={props.data}
                                setData={props.setData}
                            />
                        </ToolCheck2>
                        <ToolCheck2>
                            <GoogleCalendar
                                setCalendar={props.setCalendar}
                                calendar={props.calendar}
                                data={props.data}
                                setData={props.setData} />
                        </ToolCheck2>
                    </tr>
            }
        </ToolCheck>
    );
};


const ToolCheck = styled.td`
    
`
const ToolCheck2 = styled.td`
    
`