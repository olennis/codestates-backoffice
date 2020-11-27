// @flow 
import * as React from 'react';
type Props = {
    student:any
};
export const Present = (props: Props) => {
    return (
        <span>
            <span>{props.student.log.split(',')[0]}</span>
        </span>
    );
};