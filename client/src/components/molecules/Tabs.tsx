// @flow 
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */

import React, { useState } from 'react'
import { StudentInfo } from "../atoms/StudentInfo"
import { ChangeCohortTab } from "../atoms/ChangeCohortTab"
import { WorksView } from "../atoms/WorksView"
import styled from 'styled-components'


export const Tabs = () => {
    const [tab, setTab] = useState(1);

    return (
        <TabSection>
            <StudentInfo setTab={setTab} />
            <ChangeCohortTab setTab={setTab} />
            <WorksView setTab={setTab} />
        </TabSection>
    );
};

const TabSection = styled.section`
    padding: 1em;
    background: skyblue;
`
