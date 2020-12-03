// @flow 
import * as React from 'react';
import { ActionSection } from '../molecules/ActionSection';
import PageView from '../molecules/PageView';

type Props = {
    cohort: any
    nth: any
    gitCheck: any
    slackCheck: any
    calendar: any
    action: any
    setAction: any
    data: any
    setData :any
};
export const Launch = (props: Props) => {
    return (
        <div>
            <PageView />
            <ActionSection 
                cohort={props.cohort}
                nth={props.nth}
                gitCheck={props.gitCheck}
                slackCheck={props.slackCheck}
                calendar={props.calendar}
                action={props.action}
                setAction={props.setAction}
                data={props.data}
                setData = {props.setData}
            />
        </div>
    );
};