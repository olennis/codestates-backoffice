// @flow 
import * as React from 'react';
type Props = {
    student:any
};
export const GitId = (props: Props) => {
    return (
        <div>
            <span>{props.student.githubUserName}</span>
        </div>
    );
};