// @flow 
import * as React from 'react';
import { ActionSection } from '../molecules/ActionSection';
import { PageView } from '../molecules/PageView';


type Props = {
    cohort: any
    nth: any
    gitCheck: any
    slackCheck: any
    calendar: any
    action: any
    setAction: any
    data: any
    view: any
    setView: any
    currentPage: any
    setCurrentPage: any
};
export const Launch = (props: Props) => {
    return (
        <div>
            <PageView
                view={props.view}
                setView={props.setView}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
                data={props.data}
            />
            <ActionSection cohort={props.cohort}
                nth={props.nth}
                gitCheck={props.gitCheck}
                slackCheck={props.slackCheck}
                calendar={props.calendar}
                action={props.action}
                setAction={props.setAction}
                data={props.data}
            />
        </div>
    );
};