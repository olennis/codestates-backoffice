// @flow 
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */

import React, { useState } from 'react'
import { StudentInfo } from "../atoms/StudentInfo"
import { ChangeCohortTab } from "../atoms/ChangeCohortTab"
import { WorksView } from "../atoms/WorksView"
import styled from 'styled-components'

type Props = {
    setTab: any
};

export const Tabs = (props: Props) => {

    return (
        <TabSection>
            나는탭
            <StudentInfo setTab={props.setTab} />
            <ChangeCohortTab setTab={props.setTab} />
            <WorksView setTab={props.setTab} />
        </TabSection>
    );
};

const TabSection = styled.section`
    padding: 1em;
    background: skyblue;
`
