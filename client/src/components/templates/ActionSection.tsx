// @flow 
import React from 'react'
import { SelectAction } from "../atoms/SelectAction"

type Props = {
    action: any
    setAction: any
};

export const ActionSection = (props: Props) => {
    return (
        <div>
            <SelectAction action={props.action} setAction={props.setAction} />
        </div>
    );
};