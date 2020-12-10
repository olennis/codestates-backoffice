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
                    <td>
                        <th>
                            <GithubTeam
                                setGitCheck={props.setGitCheck}
                                gitCheck={props.gitCheck}
                                data={props.data}
                                setData={props.setData} />
                        </th>
                        <th>
                            <Slack
                                setSlackCheck={props.setSlackCheck}
                                slackCheck={props.slackCheck}
                                data={props.data}
                                setData={props.setData}
                            />
                        </th>
                        <th>
                            <GoogleCalendar
                                setCalendar={props.setCalendar}
                                calendar={props.calendar}
                                data={props.data}
                                setData={props.setData} />
                        </th>
                    </td>
            }
        </ToolCheck>
    );
};


const ToolCheck = styled.td`
    background: green;
`