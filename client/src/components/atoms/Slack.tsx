// @flow 
import * as React from 'react';
import { CheckAtoms } from "./CheckAtoms"

type Props = {
    slackCheck: any
    setSlackCheck: any
};
export const Slack = (props: Props) => {
    return (
        <div>
            <input type="checkbox" onClick={(event: any) => props.setSlackCheck(event.target.checked)} /> 슬랙
        </div>
    );
};