// @flow 
/* eslint-disable @typescript-eslint/no-use-before-define */

import * as React from 'react';
import { Button } from '@material-ui/core';

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
            <Button variant="outlined" color="default" size="large" onClick={(event: any) => WorksViewTab(event)} value={3}>과제 현황</Button>
        </span>
    );
};