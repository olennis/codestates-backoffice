// @flow 
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */

import React, { useState } from 'react'
import { StudentInfo } from "../atoms/StudentInfo"
import { ChangeCohortTab } from "../atoms/ChangeCohortTab"
import { WorksView } from "../atoms/WorksView"


type Props = {
    setTab: any
};

export const Tabs = (props: Props) => {

    return (
        <div>
            <StudentInfo setTab={props.setTab} />
            <ChangeCohortTab setTab={props.setTab} />
            <WorksView setTab={props.setTab} />
        </div>
    );
};
