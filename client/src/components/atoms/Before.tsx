// @flow 
import * as React from 'react';
type Props = {
    student:any
};
export const Before = (props: Props) => {
    return (
        <div>
            <span>{props.student.log.split(',')[1]}</span>
        </div>
    );
};