// @flow 
import * as React from 'react';
import { Tabs } from "../molecules/Tabs";
import { StateBar } from "../molecules/StateBar"
import { CheckToolBar } from "../molecules/CheckToolBar"



type Props = {
    setTab: any,
    setGitCheck: any
    gitCheck: any
    slackCheck: any
    setSlackCheck: any
    calendar: any
    setCalendar: any,
    data: any,
    setData: any,
    tab: any,
    setCheckNum: any
    checkNum: any
};

export const ToolTab = (props: Props) => {

    return (
        <div>
            <Tabs setTab={props.setTab} />
            <StateBar
                tab={props.tab}
                data={props.data}
                setData={props.setData}
                checkNum={props.checkNum}
                setCheckNum={props.setCheckNum} />
            <CheckToolBar
                gitCheck={props.gitCheck}
                setGitCheck={props.setGitCheck}
                slackCheck={props.slackCheck}
                setSlackCheck={props.setSlackCheck}
                calendar={props.calendar}
                setCalendar={props.setCalendar}
                data={props.data}
                setData={props.setData}
                tab={props.tab}
            />
        </div >
    );
};

