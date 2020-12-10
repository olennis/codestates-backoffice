// @flow 
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
type Props = {
    setTab: any
};
export const ChangeCohortTab = (props: Props) => {
    const moveCohortTab = (event: any) => {
        props.setTab(event.target.value)
        console.log(event.target.value)
    }
    return (
        <span>
            <button onClick={(event: any) => moveCohortTab(event)} value={2}>기수 이동</button>
        </span>
    );
};