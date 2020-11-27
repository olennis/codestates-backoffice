// @flow 
import * as React from 'react';
type Props = {
    student:any
};
export const GitId = (props: Props) => {
    return (
        <span>
            <span>{props.student.githubUserName}</span>
        </span>
    );
};