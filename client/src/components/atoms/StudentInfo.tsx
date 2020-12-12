/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react'
type Props = {
    setTab: any
};
export const StudentInfo = (props: Props) => {
    const studentTab = (event: any) => {
        props.setTab(event.target.value)
    }
    return (
        <span>
            <button onClick={(event: any) => studentTab(event)} value={1}>수강생 정보</button>
        </span>
    );
};