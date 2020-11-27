// @flow 
import * as React from 'react';
type Props = {
    student:any
};
export const Before = (props: Props) => {
    return (
        <span>
            <span>{props.student.log.split(',')[1]}</span>
        </span>
    );
};