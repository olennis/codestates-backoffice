/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */

import React from 'react'
import { Button } from '@material-ui/core';
type Props = {
    setTab: any
};


export const StudentInfo = (props: Props) => {
    const studentTab = (event: any) => {
        props.setTab(event.target.value)
        console.log(event.target.value)
    }

    return (
        <span>
            <Button variant="outlined" color="default" size="large" onClick={(event: any) => studentTab(event)} value={1}>수강생 정보</Button>
        </span>
    );
};