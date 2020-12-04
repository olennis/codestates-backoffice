// @flow 
import React from 'react'
import { SelectAction } from "../atoms/SelectAction"
import { SendButton } from "../atoms/SendButton"

type Props = {
    action: any
    setAction: any

    data : any
    cohort : any
    nth : any
    gitCheck : any
    slackCheck : any
    calendar : any
    setData : any

};

export const ActionSection = (props: Props) => {
    return (
        <div>

            <SelectAction 
            action={props.action} 
            setAction={props.setAction} />
            <SendButton 
            data={props.data}
            cohort = {props.cohort}
            nth = {props.nth}
            gitCheck = {props.gitCheck}
            slackCheck = {props.slackCheck}
            calendar = {props.calendar}
            action = {props.action}
            setData = {props.setData}

            />
        </div>
    );
};