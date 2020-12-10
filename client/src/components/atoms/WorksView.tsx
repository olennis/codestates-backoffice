// @flow 
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
type Props = {
    setTab: any
};
export const WorksView = (props: Props) => {
    const WorksViewTab = (event: any) => {
        props.setTab(event.target.value)
        console.log(event.target.value)
    }
    return (
        <span>
            <button onClick={(event: any) => WorksViewTab(event)} value={3}>과제 현황</button>
        </span>
    );
};